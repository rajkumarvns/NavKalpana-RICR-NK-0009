const mongoose = require('mongoose');

const quizAttemptSchema = new mongoose.Schema({
    userId: String,
    topic: String,
    difficulty: String,
    score: Number,
    total: Number,
    weakAreas: [String],
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('QuizAttempt', quizAttemptSchema);