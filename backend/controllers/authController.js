const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        const { name, email, collegeName, mobile, password, confirmPassword } = req.body;

        // 1. Validation
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match!" });
        }

        // 2. Check if user exists
        const userExists = await User.findOne({ email });
        if (userExists) return res.status(400).json({ message: "Email already registered" });

        // 3. Hash Password 
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // 4. Save User
        const newUser = new User({
            name, email, collegeName, mobile, password: hashedPassword
        });

        await newUser.save();
        res.status(201).json({ message: "Success", redirect: "/login.html" });
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
        if (!isMatch) return res.status(400).json({ message: "Invalid Credentials" });

        // Generate JWT Token 
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'secretkey', { expiresIn: '1h' });

        res.json({ message: "Success", token, user: { name: user.name, rank: user.rank }, redirect: "/dashboard.html" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};