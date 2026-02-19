const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    collegeName: { type: String, required: true },
    mobile: { type: String, required: true },
    password: { type: String, required: true },
    rank: { type: Number, default: 0 }, // For ACIE leaderboard [cite: 153, 160]
    masteryScore: { type: Number, default: 0 }
});

module.exports = mongoose.model('User', UserSchema);