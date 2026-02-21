document.addEventListener('DOMContentLoaded', async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');

    // 1. Authentication Check 
    if (!token || !user) {
        window.location.href = "/login";
        return;
    }

    // Static UI Updates (Name and basic info)
    if (document.getElementById('welcomeName')) {
        document.getElementById('welcomeName').innerText = user.name;
    }

    // 2. Fetch Latest AI Analysis Data from Database
    try {
        const response = await fetch('/api/ai/report-data', { // Ek naya endpoint data ke liye
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` }
        });
        const result = await response.json();

        if (result.success && result.data) {
            const analysis = result.data;

            // Update Dashboard Metrics with Real AI Data
            const resScoreElem = document.querySelector('.resume-score-val');
            const skillScoreElem = document.querySelector('.skill-score-val');
            const projectScoreElem = document.querySelector('.project-score-val');

            if (resScoreElem) resScoreElem.innerText = `${analysis.finalStrengthScore}/100`;
            if (skillScoreElem) skillScoreElem.innerText = `${analysis.metrics.skillRelevance}%`;
            if (projectScoreElem) projectScoreElem.innerText = `${analysis.metrics.projectDepth}%`;
            
            // Navbar Rank update (Latest from DB)
            const navRank = document.querySelector('.rank-value');
            if (navRank) navRank.innerText = `#${analysis.finalStrengthScore || '--'}`;
        }
    } catch (err) {
        console.error("Dashboard Data Fetch Error:", err);
    }
});

function logout() {
    localStorage.clear();
    window.location.href = "/login";
}



