// 1. Initialize AOS (Animate On Scroll)
AOS.init({ once: true, offset: 100, duration: 800, easing: 'ease-out-cubic' });

// 2. Initialize Typed.js (Efek Ngetik)
if (document.getElementById('typed-text')) {
    new Typed('#typed-text', {
        // PERUBAHAN DI SINI SESUAI REQUEST
        strings: ['Undergraduate Student.', 'Basketball Player.', 'Gym Rat.'],
        typeSpeed: 50, 
        backSpeed: 30, 
        backDelay: 2000, 
        loop: true, 
        showCursor: true, 
        cursorChar: '|'
    });
}

// 3. Navbar Scroll Effect (Glassmorphism)
const navbar = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-lg');
        navbar.style.background = 'rgba(5, 8, 16, 0.95)';
    } else {
        navbar.classList.remove('shadow-lg');
        navbar.style.background = 'rgba(5, 8, 16, 0.8)';
    }
});

// 4. Form Handling (Popup)
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("thankYouPopup").style.display = "flex";
    this.reset();
});

document.getElementById("closePopup").addEventListener("click", function () {
    document.getElementById("thankYouPopup").style.display = "none";
});

window.addEventListener("click", function (e) {
    const popup = document.getElementById("thankYouPopup");
    if (e.target === popup) {
        popup.style.display = "none";
    }
});