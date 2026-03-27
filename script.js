// script.js

// Typing Effect for Hero Section
const phrases = [
    "Full Stack Developer",
    "Software Engineer",
    "Creative Problem Solver"
];
let currentPhraseIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;

    const currentPhrase = phrases[currentPhraseIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentPhrase.substring(0, currentCharIndex - 1);
        currentCharIndex--;
        typingSpeed = 50;
    } else {
        typingElement.textContent = currentPhrase.substring(0, currentCharIndex + 1);
        currentCharIndex++;
        typingSpeed = 100;
    }

    if (!isDeleting && currentCharIndex === currentPhrase.length) {
        isDeleting = true;
        typingSpeed = 1500; // Pause at end of phrase
    } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        typingSpeed = 500; // Pause before starting new word
    }

    setTimeout(typeEffect, typingSpeed);
}

// Scroll Reveal Animation (Intersection Observer)
function scrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.15 });

    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
}

// Navbar styling on scroll
function handleNavbar() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.borderBottom = '1px solid rgba(0, 0, 0, 0.08)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = 'transparent';
            navbar.style.borderBottom = '1px solid transparent';
            navbar.style.backdropFilter = 'none';
        }
    });

    // Mobile menu toggle
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if(menuBtn) {
        menuBtn.addEventListener('click', () => {
            if(navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'rgba(255, 255, 255, 0.95)';
                navLinks.style.padding = '20px';
                navLinks.style.borderBottom = '1px solid rgba(0, 0, 0, 0.08)';
            }
        });
    }
}

// Smooth scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if(targetElement) {
            // Close mobile menu if open
            const navLinks = document.querySelector('.nav-links');
            if(window.innerWidth <= 768) {
                navLinks.style.display = 'none';
            }
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Modal & Form Logic
const projectData = {
    'turf': {
        title: 'Turf Slot Booking System',
        tech: '<span>Web</span><span>Database</span>',
        desc: 'An online reservation platform that simplifies turf booking, handling slots entirely digitally. It provides a seamless interface for users to check availability, book their preferred slots, and manage reservations efficiently.'
    },
    'roadvision': {
        title: 'RoadVision AI',
        tech: '<span>AI / ML</span><span>Python</span>',
        desc: 'An AI-based road safety and detection system that analyzes footage to identify critical traffic anomalies. It leverages advanced computer vision to enhance road safety and prevent accidents.'
    },
    'blood': {
        title: 'Blood Donation System',
        tech: '<span>Web</span><span>Database</span>',
        desc: 'A web platform developed to easily and seamlessly connect active blood donors with receivers in emergencies. The system ensures rapid response times and maintains a secure database of donors.'
    }
};

function openModal(projectId) {
    const modal = document.getElementById('project-modal');
    const data = projectData[projectId];
    if(data && modal) {
        document.getElementById('modal-title').textContent = data.title;
        document.getElementById('modal-tech').innerHTML = data.tech;
        document.getElementById('modal-desc').textContent = data.desc;
        modal.classList.add('show');
    }
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    typeEffect();
    scrollReveal();
    handleNavbar();
    
    // Modal close hooks
    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.close-btn');
    if(closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('show');
        });
    }
    window.addEventListener('click', (e) => {
        if(e.target === modal) {
            modal.classList.remove('show');
        }
    });

    // Contact form mailto integration
    const form = document.getElementById('contactForm');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            const body = `Message from Portfolio:\n\n${message}`;
            window.location.href = `mailto:sakthi71105@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        });
    }
});
