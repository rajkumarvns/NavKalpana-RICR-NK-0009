document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');

    // Authentication Check 
    if (!token || !user) {
        window.location.href = "/login";
        return;
    }

    // UI Updates based on PDF 6.5 [cite: 319, 324]
    if (document.getElementById('welcomeName')) {
        document.getElementById('welcomeName').innerText = user.name;
    }
    
    // Update Navbar stats
    const navName = document.querySelector('.user-name');
    const navRank = document.querySelector('.rank-value');
    if (navName) navName.innerText = user.name;
    if (navRank) navRank.innerText = `#${user.rank || '--'}`;

    // Update Dashboard Cards
    const resScoreElem = document.querySelector('.resume-score-val');
    const mastScoreElem = document.querySelector('.mastery-score-val');
    if (resScoreElem) resScoreElem.innerText = `${user.resumeScore || 0}/100`;
    if (mastScoreElem) mastScoreElem.innerText = `${user.masteryScore || 0}%`;
});

function logout() {
    localStorage.clear();
    window.location.href = "/login";
}

