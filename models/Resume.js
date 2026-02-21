const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    targetRole: { type: String, required: true }, 
    
    // AI Metrics (Weighted logic)
    metrics: {
        skillRelevance: { type: Number, default: 0 },  // 40% weight
        projectDepth: { type: Number, default: 0 },    // 30% weight
        experienceScore: { type: Number, default: 0 }, // 20% weight
        structureScore: { type: Number, default: 0 }   // 10% weight
    },
    
    finalStrengthScore: { type: Number, default: 0 }, // Calculated score

    // Intelligence for Future Modules
    extractedSkills: [String],   // Skills found
    missingSkills: [String],     // Required skills not found
    weakTopics: [String],        // Topics for Adaptive Quiz
    
    analysisReport: String,      // Detailed AI suggestions
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Resume', resumeSchema);


