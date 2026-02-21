const PDFParser = require("pdf2json");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const Resume = require("../models/Resume");

// API Setup
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

exports.analyzeResume = async (req, res) => {
    try {
        let rawText = "";
        // Frontend se user ka desired role uthana
        const desiredRole = req.body.targetRole; 

        // 1. PDF Text Extraction Logic
        if (req.body.inputType === 'pdf' && req.file) {
            const pdfParser = new PDFParser(null, 1);
            rawText = await new Promise((resolve, reject) => {
                pdfParser.on("pdfParser_dataError", errData => reject(errData.parserError));
                pdfParser.on("pdfParser_dataReady", () => {
                    resolve(pdfParser.getRawTextContent());
                });
                pdfParser.parseBuffer(req.file.buffer);
            });
        } else {
            rawText = req.body.resumeText;
        }

        if (!rawText || rawText.trim().length < 50) {
            return res.status(400).json({ success: false, message: "Bhai, resume content bohot kam hai!" });
        }

        // 2. Gemini AI Configuration (Using Flash for speed)
        const model = genAI.getGenerativeModel({ 
                model: "gemini-2.5-flash" ,
                temperature: 0.30,      // Deep reasoning fast hogi
                topP: 0.95,
                topK: 40,
                maxOutputTokens: 1024,
                responseMimeType: "application/json" // Native JSON mode
        });
        
        // Prompt ko update kiya hai desiredRole ke basis par
        const prompt = `
            Act as an expert Technical Recruiter and ATS Auditor.
            Task: Analyze the provided resume specifically for the Target Role: "${desiredRole}".
            
            Resume Content: "${rawText}"
            
            Instructions:
            1. Compare the resume skills and projects against the standard requirements of a ${desiredRole}.
            2. Calculate scores (0-100) based on how well the candidate fits this specific role.
            3. Identify missing skills and weak technical topics strictly relevant to ${desiredRole}.
            
            Return ONLY a valid JSON:
            {
              "detectedRole": "${desiredRole}",
              "skillRelevance": number,
              "projectDepth": number,
              "experienceScore": number,
              "structureScore": number,
              "extractedSkills": [],
              "missingSkills": ["skills required for ${desiredRole} but missing in resume"],
              "weakTopics": ["topics to study for ${desiredRole} interviews"],
              "analysisReport": "summary of fit for ${desiredRole}"
            }
        `;

        const result = await model.generateContent(prompt);
        const responseText = result.response.text();
        
        const cleanJson = responseText.replace(/```json|```/gi, "").trim();
        const aiData = JSON.parse(cleanJson);

        // 3. Scoring & DB Save
        const finalScore = (aiData.skillRelevance * 0.4) + (aiData.projectDepth * 0.3) + 
                           (aiData.experienceScore * 0.2) + (aiData.structureScore * 0.1);

        const analysis = await Resume.findOneAndUpdate(
            { userId: req.user.id },
            {
                userId: req.user.id,
                targetRole: aiData.detectedRole, // User ka chosen role save hoga
                metrics: {
                    skillRelevance: aiData.skillRelevance,
                    projectDepth: aiData.projectDepth,
                    experienceScore: aiData.experienceScore,
                    structureScore: aiData.structureScore
                },
                finalStrengthScore: finalScore.toFixed(2),
                extractedSkills: aiData.extractedSkills,
                missingSkills: aiData.missingSkills,
                weakTopics: aiData.weakTopics,
                analysisReport: aiData.analysisReport
            },
            { upsert: true, new: true }
        );

        res.status(200).json({ success: true, data: analysis });

    } catch (err) {
        console.error("AI Controller Error:", err);
        res.status(500).json({ success: false, message: "AI Analysis failed. Model or Network issue." });
    }
};

// 2. Isse report page render hogi (AUTH FIX)
exports.getReport = async (req, res) => {
    try {
        // Bhai, yahan sirf page render karenge bina data ke.
        // Data ko report.ejs ke andar JavaScript (fetch) se mangwayenge token ke sath.
        res.render('report'); 
    } catch (err) {
        res.redirect('/error');
    }
};


// Dashboard ke liye sirf data bhejane wala function
// 3. Raw Data API for Dashboard & Report Page
exports.getRawReportData = async (req, res) => {
    try {
        const analysis = await Resume.findOne({ userId: req.user.id });
        if (!analysis) {
            return res.status(404).json({ success: false, message: "Pehle resume analyze karo bhai!" });
        }
        res.status(200).json({ success: true, data: analysis });
    } catch (err) {
        res.status(500).json({ success: false, message: "Data fetch failed." });
    }
};

