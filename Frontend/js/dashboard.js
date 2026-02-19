window.onload = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if(!user) {
        window.location.href = "login.html";
        return;
    }
    
    // Welcome message update (index.html/dashboard.html ke liye)
    const welcomeElem = document.getElementById('welcomeName');
    if(welcomeElem) welcomeElem.innerText = user.name;

    // Wait for Navbar to load then update
    setTimeout(() => {
        const nameElem = document.querySelector('.user-name');
        const rankElem = document.querySelector('.rank-value');
        
        if(nameElem) nameElem.innerText = user.name;
        if(rankElem) rankElem.innerText = `#${user.rank || '--'}`;
    }, 500); // 500ms delay taaki fetch complete ho jaye
};


function logout() {
    localStorage.clear();
    window.location.href = "login.html";
}