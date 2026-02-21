const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();

// View Engine Setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // FormData handle karne ke liye zaroori hai
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/navkalpana')
    .then(() => console.log("✅ Database Connected"))
    .catch(err => console.log("❌ DB Error:", err));

// View Routes
app.get('/', (req, res) => res.render('index'));
app.get('/login', (req, res) => res.render('login'));
app.get('/register', (req, res) => res.render('register'));
app.get('/error', (req, res) => res.render('error'));
app.get('/dashboard', (req, res) => {
    res.render('dashboard', { user: { name: "Loading...", rank: '--' } });
});
app.get('/analysis', (req, res) => {
    res.render('analysis', { user: req.user || { name: 'User', rank: '--' } }); 
});

// --- API Routes Register Karo (YAHAN PROBLEM THI) ---
const authRoutes = require('./routes/authRoutes');
const aiRoutes = require('./routes/aiRoutes'); // AI Routes import karo

app.use('/api/auth', authRoutes);
app.use('/api/ai', aiRoutes); // Is line ko add karna compulsory hai

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server: http://localhost:${PORT}`));



