// Frontier Site Operations - JavaScript

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    const navbar = document.getElementById('navbar');

    // Hero Video Fade Control
    const heroVideo = document.getElementById('heroVideo');
    const heroBg = document.querySelector('.hero-bg');
    const heroContent = document.querySelector('.hero-content');
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroScroll = document.querySelector('.hero-scroll');
    const featureItems = document.querySelectorAll('.feature-item');

    if (heroVideo) {
        // Function to handle video start
        const handleVideoStart = () => {
            setTimeout(() => {
                heroVideo.classList.add('fade-in');
            }, 300);
        };

        // If video is already ready (cached), show it immediately
        if (heroVideo.readyState >= 3) {
            handleVideoStart();
        } else {
            // Otherwise wait for it to load
            heroVideo.addEventListener('loadeddata', handleVideoStart);
        }

        // Fade out before video ends
        let videoFadeStarted = false;
        let backgroundTransitioned = false;

        heroVideo.addEventListener('timeupdate', function() {
            const timeLeft = heroVideo.duration - heroVideo.currentTime;

            // Start video fade-out and background transition 4 seconds before end
            if (timeLeft <= 4 && !videoFadeStarted) {
                videoFadeStarted = true;
                
                // Fade out video
                heroVideo.classList.remove('fade-in');
                heroVideo.classList.add('fade-out');
                
                // Transition background and text to light theme simultaneously
                // This creates a cross-fade effect from Video -> Light Background
                if (!backgroundTransitioned) {
                    backgroundTransitioned = true;
                    heroBg.classList.add('light');
                    heroContent.classList.add('light-text');
                    heroTitle.classList.add('light-text');
                    heroSubtitle.classList.add('light-text');
                    heroScroll.classList.add('light-text');
                    featureItems.forEach(item => item.classList.add('light-text'));
                }
            }
        });
    }
    
    // Mobile menu toggle
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger icon
            const spans = this.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }
    
    // Navbar scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe service cards
    document.querySelectorAll('.service-card, .why-item, .stat-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Form validation helper functions
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function isValidPhone(phone) {
    const re = /^[\d\s\-\(\)]+$/;
    return re.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

// Form validation (for contact page) - validates before Netlify submission
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();

        let errors = [];

        if (name === '') {
            errors.push('Please enter your name.');
        }

        if (email === '' || !isValidEmail(email)) {
            errors.push('Please enter a valid email address.');
        }

        if (phone !== '' && !isValidPhone(phone)) {
            errors.push('Please enter a valid phone number.');
        }

        if (errors.length > 0) {
            e.preventDefault();
            alert(errors.join('\n'));
            return false;
        }

        // Form is valid - let Netlify handle the submission
        return true;
    });
}

// Initialize form validation
document.addEventListener('DOMContentLoaded', initContactForm);
