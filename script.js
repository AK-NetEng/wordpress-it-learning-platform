// Typing Animation
const texts = [
    "SEO that ranks you #1",
    "Google Ads that convert",
    "Meta Ads that engage",
    "WordPress sites that sell",
    "Data-driven digital growth"
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseTime = 2000;

function typeText() {
    const currentText = texts[textIndex];
    const displayText = isDeleting ?
        currentText.substring(0, charIndex - 1) :
        currentText.substring(0, charIndex + 1);

    const el = document.getElementById('typingText');
    if (el) {
        el.innerHTML = displayText + '<span class="cursor">|</span>';
    }

    if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => isDeleting = true, pauseTime);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
    }

    charIndex = isDeleting ? charIndex - 1 : charIndex + 1;
    setTimeout(typeText, isDeleting ? deletingSpeed : typingSpeed);
}
typeText();

// Matrix Rain Effect
const canvas = document.querySelector('.matrix');
if (canvas) {
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = '01';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function drawMatrix() {
        ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#00ff41';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    setInterval(drawMatrix, 50);

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Scroll Progress
window.addEventListener('scroll', () => {
    const bar = document.getElementById('scrollProgress');
    if (bar) {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        bar.style.width = scrolled + '%';
    }
});

// Floating Particles (only on pages with .hero)
function createParticle() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 6 + 's';
    hero.appendChild(particle);
    setTimeout(() => particle.remove(), 6000);
}
setInterval(createParticle, 300);
