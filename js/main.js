document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.add('scrolled'); // Force on inner pages, wait check index
        }
    });

    // Mobile Menu Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const isActive = navLinks.classList.contains('active');
            navToggle.innerHTML = isActive ? '✕' : '☰';
        });
    }

    // Initialize Scroll state for navbar
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    }

    // Scroll Animations
    const observerOptions = {
        threshold: 0.05,
        rootMargin: "0px 0px 50px 0px"
    };

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });
    } else {
        // Direct reveal if IntersectionObserver not supported
        document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
    }

    // Fast fallback for iOS / Safari / Chrome mobile
    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach(el => {
            if (!el.classList.contains('visible')) {
                el.classList.add('visible');
            }
        });
    }, 400);
});
