// ==========================================
// DOM Elements
// ==========================================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const navLinkEls = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contactForm');

// ==========================================
// Mobile Navigation
// ==========================================
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
});

// Close mobile nav on link click
navLinkEls.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
    });
});

// Close mobile nav on outside click
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
    }
});

// ==========================================
// Smooth Scroll
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ==========================================
// Navbar Scroll Effect
// ==========================================
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ==========================================
// Active Nav Link on Scroll
// ==========================================
const sections = document.querySelectorAll('section[id]');

function updateActiveLink() {
    let current = '';
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 200) {
            current = section.getAttribute('id');
        }
    });
    navLinkEls.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// ==========================================
// Scroll Reveal Animations
// ==========================================
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
});

document.addEventListener('DOMContentLoaded', () => {
    // Reveal individual elements
    const revealEls = document.querySelectorAll(
        '.exp-item, .project-card, .skill-card, .edu-card, .stat, .about-text, .contact-info, .contact-form'
    );
    revealEls.forEach(el => {
        el.classList.add('reveal');
        revealObserver.observe(el);
    });

    // Staggered reveal for grids
    const staggerEls = document.querySelectorAll(
        '.about-stats, .edu-grid, .skills-grid, .projects-grid'
    );
    staggerEls.forEach(el => {
        el.classList.add('reveal-stagger');
        revealObserver.observe(el);
    });
});

// ==========================================
// EmailJS Contact Form
// ==========================================
(function () {
    emailjs.init("pFYrcsRvAxeympGTI");
})();

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');

        if (!name || !email || !subject || !message) {
            showToast('Please fill in all fields', 'error');
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showToast('Please enter a valid email address', 'error');
            return;
        }

        showToast('Sending your message...', 'info');

        emailjs.send('service_f7ihtqq', 'template_ilr0pil', {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
            to_email: 'fdsimoes92@gmail.com'
        }).then(function () {
            showToast('Thank you! I\'ll get back to you soon.', 'success');
            contactForm.reset();
        }, function (error) {
            let msg = 'Sorry, there was an error sending your message. ';
            if (error.status === 412) msg += 'Email service configuration issue. ';
            else if (error.status === 400) msg += 'Invalid email format. ';
            else if (error.status === 429) msg += 'Too many requests. Please try again later. ';
            msg += 'Please contact me directly at fdsimoes92@gmail.com';
            showToast(msg, 'error');
        });
    });
}

// ==========================================
// Toast Notifications
// ==========================================
function showToast(message, type = 'info') {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <span>${message}</span>
        <button class="toast-close" aria-label="Close">&times;</button>
    `;

    toast.querySelector('.toast-close').addEventListener('click', () => toast.remove());
    document.body.appendChild(toast);

    setTimeout(() => {
        if (toast.parentElement) toast.remove();
    }, 5000);
}

// ==========================================
// Scroll-to-Top Button
// ==========================================
let scrollBtn = null;

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        if (!scrollBtn) {
            scrollBtn = document.createElement('button');
            scrollBtn.className = 'scroll-top';
            scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
            scrollBtn.setAttribute('aria-label', 'Scroll to top');
            Object.assign(scrollBtn.style, {
                position: 'fixed',
                bottom: '32px',
                right: '32px',
                width: '44px',
                height: '44px',
                background: 'var(--accent)',
                color: 'var(--bg)',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1rem',
                zIndex: '1000',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 16px rgba(201, 169, 110, 0.25)'
            });
            scrollBtn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            scrollBtn.addEventListener('mouseenter', () => {
                scrollBtn.style.transform = 'translateY(-3px)';
            });
            scrollBtn.addEventListener('mouseleave', () => {
                scrollBtn.style.transform = 'translateY(0)';
            });
            document.body.appendChild(scrollBtn);
        }
        scrollBtn.style.opacity = '1';
        scrollBtn.style.pointerEvents = 'auto';
    } else if (scrollBtn) {
        scrollBtn.style.opacity = '0';
        scrollBtn.style.pointerEvents = 'none';
    }
});
