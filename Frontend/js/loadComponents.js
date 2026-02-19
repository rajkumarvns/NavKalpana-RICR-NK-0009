async function loadComponent(id, file) {
    try {
        // Bhai, agar hum pages folder ke andar hain, toh path se 'pages/' hatana padega
        let fetchPath = file;
        if (window.location.pathname.includes('/pages/')) {
            fetchPath = file.replace('pages/', ''); 
        }

        const response = await fetch(fetchPath);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const html = await response.text();
        const element = document.getElementById(id);
        
        if (element) {
            element.innerHTML = html;
        }
    } catch (err) {
        console.error("Component load failed:", file, err);
    }
}

// Inhe call karne ka sahi tarika:
// Dashboard ke liye placeholder
loadComponent('dash-navbar-placeholder', 'pages/components/dash-navbar.html');

// Home page ke placeholders
loadComponent('navbar-placeholder', 'pages/components/navbar.html');
loadComponent('hero-placeholder', 'pages/components/hero.html');
loadComponent('features-placeholder', 'pages/components/features.html');
loadComponent('footer-placeholder', 'pages/components/footer.html');