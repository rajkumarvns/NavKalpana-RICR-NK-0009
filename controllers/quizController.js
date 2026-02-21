const QuizAttempt = require('../models/QuizAttempts');
const { generateQuiz, generateStudySuggestions } = require('../services/geminiService');

exports.generateQuiz = async (req, res) => {
    const { topic, difficulty } = req.body;

    try {
        const questions = await generateQuiz(topic, difficulty);
        res.json({ success: true, questions });
    } catch (err) {
        console.error("❌ Quiz generation error:", err.response?.status, err.response?.data, err.message, err.stack);
        res.json({ success: false, message: "Quiz generation failed" });
    }
};


exports.submitQuiz = async (req, res) => {
    const { topic, difficulty, answers, correctAnswers, userId } = req.body;

    let score = 0;
    let weakAreas = [];

    correctAnswers.forEach((correct, index) => {
        if (answers[index] === correct) {
            score++;
        } else {
            weakAreas.push(`Question ${index + 1}`);
        }
    });

    const attempt = await QuizAttempt.create({
        userId,
        topic,
        difficulty,
        score,
        total: correctAnswers.length,
        weakAreas
    });

    const suggestions = await generateStudySuggestions(topic, weakAreas);

    res.json({
        success: true,
        score,
        total: correctAnswers.length,
        suggestions
    });
};