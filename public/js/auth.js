// Registration Logic
const regForm = document.getElementById('regForm');
if (regForm) {
    regForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Form se naam pehle hi nikal lo
        const userName = document.getElementById('name').value; 

        const data = {
            name: userName,
            email: document.getElementById('email').value,
            collegeName: document.getElementById('college').value,
            mobile: document.getElementById('mobile').value,
            password: document.getElementById('password').value,
            confirmPassword: document.getElementById('confirmPassword').value
        };

        const res = await fetch('/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        const result = await res.json();
        
        if (res.status === 201) {
            Swal.fire({
                title: `welcome ${userName}! 🎉`, // Yahan user ka naam aayega
                html: `<p style="color: #94a3b8;">your registration has been completed successfully <br> can can login now</p>`,
                icon: 'success',
                background: 'rgba(15, 23, 42, 0.95)', // Dark Theme Match
                confirmButtonColor: '#4F46E5',
                timer: 4000,
                timerProgressBar: true,
                allowOutsideClick: false
            }).then(() => {
                window.location.href = "/login";
            });
        } else {
            // Error handling agar email pehle se registered ho
            Swal.fire({
                title: 'Opps!',
                text: result.message || 'something is wrong.',
                icon: 'error',
                background: 'rgba(15, 23, 42, 0.95)',
                confirmButtonColor: '#ef4444'
            });
        }
    });
}

// Login Logic
// Login Logic Fix
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const result = await res.json();
        
        if (res.status === 200) {
            localStorage.setItem('token', result.token);
            localStorage.setItem('user', JSON.stringify(result.user));
            window.location.href = result.redirect; // Dashboard par jayega
        } else if (res.status === 401) {
            // Bhai yahan alert nahi, seedha error page par redirect hoga
            window.location.href = "/error"; 
        } else {
            // Baki errors ke liye SWAL popup
            Swal.fire({
                icon: 'error',
                title: 'Opps...',
                text: result.message,
                background: 'rgba(15, 23, 42, 0.95)',
                confirmButtonColor: '#4F46E5'
            });
        }
    });
}

// Professional Session Warning function
function showSessionWarning() {
    Swal.fire({
        title: '<span style="color: #fff; font-family: Poppins;">Session Warning!</span>',
        html: '<p style="color: #94a3b8; font-family: Poppins;">your will be logout in next 5 minutes!</p>',
        icon: 'warning',
        iconColor: '#6366f1', // Indigo Color
        background: 'rgba(15, 23, 42, 0.95)', // Dark Slate (Backend match)
        backdrop: `rgba(0,0,0,0.6) blur(8px)`, // Glassmorphism effect
        confirmButtonText: 'Okay',
        confirmButtonColor: '#4f46e5', // Indigo Button
        allowOutsideClick: false, // Jab tak click na kare tab tak nahi hatega
        customClass: {
            popup: 'rounded-[32px] border border-white/10 shadow-2xl'
        }
    });
}

// Session Timer Logic
function startSessionTimer() {
    const sessionDuration = 30 * 60 * 1000; // 30 mins
    const warningTime = 25 * 60 * 1000;    // 25 mins

    // 25 min par custom warning
    setTimeout(() => {
        showSessionWarning();
    }, warningTime);

    // 30 min par final logout
    setTimeout(() => {
        localStorage.clear();
        window.location.href = "/"; // Home page redirect
    }, sessionDuration);
}

if (localStorage.getItem('token')) {
    startSessionTimer();
}



