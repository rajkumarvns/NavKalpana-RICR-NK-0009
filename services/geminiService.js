const axios = require("axios");

exports.generateQuiz = async (topic, difficulty) => {
    const API = process.env.GEMINI_API_KEY;
    const prompt = `
Generate 5 ${difficulty} MCQs on "${topic}".
Return JSON only:
[
 { "question": "", "options": ["","","",""], "answer": "" }
]
`;

    const res = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${API}`,
        {
            contents: [{ parts: [{ text: prompt }] }]
        }
    );

    let text = res.data.candidates[0].content.parts[0].text;
    text = text.replace(/```json|```/g, "").trim();
    return JSON.parse(text);
};


exports.generateStudySuggestions = async (topic, weakAreas) => {
    const API = process.env.GEMINI_API_KEY;
    const prompt = `
User performed weak in: ${weakAreas.join(", ")}.
Suggest study plan with:
- Concepts to revise
- 3 YouTube search keywords
- 2 Practice platforms
Return structured text.
`;

    const res = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${API}`,
        {
            contents: [{ parts: [{ text: prompt }] }]
        }
    );

    return res.data.candidates[0].content.parts[0].text;
};
