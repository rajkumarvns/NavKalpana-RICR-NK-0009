const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();

// View Engine Setup [cite: 31, 32]
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(cors());

// MongoDB Connection [cite: 33, 103]
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/navkalpana')
    .then(() => console.log("✅ DB Connected"))
    .catch(err => console.log("❌ DB Error:", err));

// View Routes
app.get('/', (req, res) => res.render('index'));
app.get('/login', (req, res) => res.render('login'));
app.get('/register', (req, res) => res.render('register'));
app.get('/dashboard', (req, res) => {
    // Note: Frontend script localStorage se user data inject karega 
    res.render('dashboard', { user: { name: "Loading...", rank: '--' } });
});

// Auth API Routes [cite: 162]
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000; // Recommended for deployment [cite: 34, 130]
app.listen(PORT, () => console.log(`🚀 Server: http://localhost:${PORT}`));

