const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        const { name, email, collegeName, mobile, password, confirmPassword } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match!" });
        }

        const userExists = await User.findOne({ email });
        if (userExists) return res.status(400).json({ message: "Email already registered" });

        // Bcrypt hashing as per Section 4 
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            name, email, collegeName, mobile, password: hashedPassword
        });

        await newUser.save();
        // Redirecting to EJS route instead of .html
        res.status(201).json({ message: "Success", redirect: "/login" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        // exports.login update
        if (!isMatch) {
            // Option 1: Page redirect (Professional look)
            return res.status(401).json({ message: "Invalid", redirect: "/error" });
        }

        // JWT Token generation 
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'secretkey', { expiresIn: '1h' });

        // Sending user details for the dashboard
        res.json({ 
            message: "Success", 
            token, 
            user: { 
                name: user.name, 
                rank: user.rank || '--',
                resumeScore: user.resumeScore || 0,
                masteryScore: user.masteryScore || 0
            }, 
            redirect: "/dashboard" 
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

