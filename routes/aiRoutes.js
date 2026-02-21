const express = require('express');
const router = express.Router();
const aiController = require('../controllers/aiController');
const { protect } = require('../middleware/authMiddleware'); 
const multer = require('multer');

// Multer configuration: RAM memory storage use kar rahe hain
const upload = multer({ 
    storage: multer.memoryStorage(),
    limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit for security
});

// POST route for AI Analysis
router.post('/analyze', protect, upload.single('resumeFile'), aiController.analyzeResume);

// --- YAHAN CHANGE KARNA HAI (Report Route) ---
// Ye route report page dikhayega
router.get('/report', aiController.getReport);

// Dashboard par JSON data bhejane ke liye (Add this line)
router.get('/report-data', protect, aiController.getRawReportData);

module.exports = router;

