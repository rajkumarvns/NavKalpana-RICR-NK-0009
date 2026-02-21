document.getElementById('analysisForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // UI Elements
    const btn = document.getElementById('submitBtn'); 
    const btnText = document.getElementById('btnText');
    const loader = document.getElementById('loader');

    // Start Loading State
    btn.disabled = true;
    const originalText = btnText.innerText;
    btnText.innerText = "Auditing for your Target Role..."; 
    loader.classList.remove('hidden');

    // FormData automatically packs targetRole, resumeFile, and resumeText
    const formData = new FormData(e.target);

    try {
        const res = await fetch('/api/ai/analyze', {
            method: 'POST',
            headers: { 
                // JWT Token check
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: formData // Browser automatically sets boundary for Multer
        });

        const result = await res.json();

        if (res.status === 200 && result.success) {
            Swal.fire({
                title: 'Analysis Complete! 🚀',
                html: `
                    <div class="text-left">
                        <p style="color: #6366f1; font-weight: bold; margin-bottom: 8px;">Target Role: ${result.data.targetRole}</p>
                        <p style="color: #94a3b8;">Bhai, aapka Strength Score <b>${result.data.finalStrengthScore}</b> hai.</p>
                    </div>
                `,
                icon: 'success',
                background: 'rgba(15, 23, 42, 0.95)',
                confirmButtonColor: '#4F46E5',
                confirmButtonText: 'View Dashboard'
            }).then(() => {
                // Success redirect
                window.location.href = "/dashboard";
            });
        } else {
            // Error from backend
            throw new Error(result.message || "Analysis failed");
        }

    } catch (err) {
        console.error("Frontend Error:", err);
        Swal.fire({
            title: 'Opps!',
            text: err.message || 'AI Analysis fail ho gayi bhai!',
            icon: 'error',
            background: 'rgba(15, 23, 42, 0.95)',
            confirmButtonColor: '#ef4444'
        });
    } finally {
        // Reset button state
        btn.disabled = false;
        btnText.innerText = originalText;
        loader.classList.add('hidden');
    }
});

const Resume = require('./models/Resume');
const { protect } = require('./middleware/authMiddleware');

app.get('/dashboard', protect, async (req, res) => {
    try {
        // Database se is user ki latest analysis nikalo
        const analysis = await Resume.findOne({ userId: req.user.id });
        
        // Dashboard render karo asli data ke sath
        res.render('dashboard', { 
            user: req.user, 
            analysis: analysis || null 
        });
    } catch (err) {
        res.render('dashboard', { user: req.user, analysis: null });
    }
});
