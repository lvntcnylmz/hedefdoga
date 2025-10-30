// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li');
const contactForm = document.getElementById('contactForm');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Sticky header on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Active link highlighting
const sections = document.querySelectorAll('section');
const navLinks2 = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks2.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Form validation
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Simple validation
        if (name === '') {
            showError('name', 'Name is required');
            return;
        }
        
        if (email === '') {
            showError('email', 'Email is required');
            return;
        } else if (!isValidEmail(email)) {
            showError('email', 'Please enter a valid email');
            return;
        }
        
        if (subject === '') {
            showError('subject', 'Subject is required');
            return;
        }
        
        if (message === '') {
            showError('message', 'Message is required');
            return;
        }
        
        const body = `İsim: ${name}%0AEmail: ${email}%0A%0AMesaj:%0A${message}`;
        window.location.href = `mailto:info@hedefdogasporlari.com?subject=${subject}&body=${body}`;
    // If all validations pass, show success message
    showSuccess();
        // Reset form
        contactForm.reset();
    });
}

// Helper functions for form validation
function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorElement = document.createElement('div');
    
    // Remove any existing error message
    removeError(fieldId);
    
    errorElement.className = 'error-message';
    errorElement.innerText = message;
    errorElement.style.color = 'red';
    errorElement.style.fontSize = '0.8rem';
    errorElement.style.marginTop = '5px';
    
    field.parentNode.appendChild(errorElement);
    field.style.borderColor = 'red';
    
    // Remove error after 3 seconds
    setTimeout(() => {
        removeError(fieldId);
    }, 3000);
}

function removeError(fieldId) {
    const field = document.getElementById(fieldId);
    const existingError = field.parentNode.querySelector('.error-message');
    
    if (existingError) {
        existingError.remove();
    }
    
    field.style.borderColor = '';
}

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function showSuccess() {
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.innerText = 'Your message has been sent successfully!';
    successMessage.style.color = 'green';
    successMessage.style.padding = '10px';
    successMessage.style.marginTop = '10px';
    successMessage.style.backgroundColor = '#e7f7e7';
    successMessage.style.borderRadius = '4px';
    
    // Remove any existing success message
    const existingSuccess = contactForm.querySelector('.success-message');
    if (existingSuccess) {
        existingSuccess.remove();
    }
    
    contactForm.appendChild(successMessage);
    
    // Remove success message after 5 seconds
    setTimeout(() => {
        const successMsg = contactForm.querySelector('.success-message');
        if (successMsg) {
            successMsg.remove();
        }
    }, 5000);
}

// Animation on scroll effects
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    
    // Add initial opacity to cards for animation
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Check if element is in viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Show elements when they enter the viewport
    function showVisibleElements() {
        projectCards.forEach(card => {
            if (isElementInViewport(card)) {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 200);
            }
        });
    }
    
    // Run on load and scroll
    window.addEventListener('scroll', showVisibleElements);
    window.addEventListener('resize', showVisibleElements);
    showVisibleElements();
});
