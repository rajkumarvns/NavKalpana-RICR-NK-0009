// Register Logic
const regForm = document.getElementById('regForm');
if(regForm) {
    regForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const data = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            collegeName: document.getElementById('college').value,
            mobile: document.getElementById('mobile').value,
            password: document.getElementById('password').value,
            confirmPassword: document.getElementById('confirmPassword').value
        };

        const res = await fetch('http://localhost:5000/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        const result = await res.json();
        if(res.status === 201) {
            alert("Registration Successful!");
            window.location.href = "login.html";
        } else {
            alert(result.message || "Error occurred");
        }
    });
}

// Login Logic
const loginForm = document.getElementById('loginForm');
if(loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        const res = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const result = await res.json();
        if(res.status === 200) {
            // Token aur user details store karna zaroori hai [cite: 163]
            localStorage.setItem('token', result.token);
            localStorage.setItem('user', JSON.stringify(result.user));
            window.location.href = "dashboard.html";
        } else {
            alert(result.message || "Invalid Login");
        }
    });
}

