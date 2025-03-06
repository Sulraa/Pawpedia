// Auth Modal Functionality
function initAuth() {
    const signUpBtn = document.querySelector('.sign-in');
    const loginBtn = document.querySelector('.log-in');
    const signUpModal = document.getElementById('signUpModal');
    const loginModal = document.getElementById('loginModal');
    const closeButtons = document.querySelectorAll('.close-modal');

    if (signUpBtn && signUpModal) {
        signUpBtn.onclick = () => signUpModal.style.display = 'block';
    }

    if (loginBtn && loginModal) {
        loginBtn.onclick = () => loginModal.style.display = 'block';
    }

    closeButtons.forEach(btn => {
        btn.onclick = () => {
            if (signUpModal) signUpModal.style.display = 'none';
            if (loginModal) loginModal.style.display = 'none';
        };
    });

    window.onclick = (e) => {
        if (e.target === signUpModal || e.target === loginModal) {
            if (signUpModal) signUpModal.style.display = 'none';
            if (loginModal) loginModal.style.display = 'none';
        }
    };
}

// Initialize auth when DOM is ready
document.addEventListener('DOMContentLoaded', initAuth);
