// Main JavaScript for Wakenga Mining Website

// DOM Elements
import '../css/style.css';
const header = document.querySelector('.header');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navList = document.querySelector('.nav-list');
const languageButtons = document.querySelectorAll('.language-selector button');
const faqItems = document.querySelectorAll('.faq-item');
const contactForm = document.getElementById('contact-form');
const contactFormHome = document.getElementById('contact-form-home');

// Header scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Mobile menu toggle
if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
  });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-list a').forEach(link => {
  link.addEventListener('click', () => {
    if (navList.classList.contains('active')) {
      navList.classList.remove('active');
      mobileMenuToggle.classList.remove('active');
    }
  });
});

// Language switcher
languageButtons.forEach(button => {
  button.addEventListener('click', () => {
    languageButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    const language = button.getAttribute('data-lang');
    // Here you would implement the actual language change
    // For now, we'll just log it
    console.log(`Language changed to: ${language}`);
  });
});

// FAQ accordion
faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    const isActive = item.classList.contains('active');
    
    // Close all other items
    faqItems.forEach(faqItem => {
      faqItem.classList.remove('active');
      const toggle = faqItem.querySelector('.faq-toggle i');
      toggle.className = 'fas fa-plus';
    });
    
    // If clicked item wasn't active, activate it
    if (!isActive) {
      item.classList.add('active');
      const toggle = item.querySelector('.faq-toggle i');
      toggle.className = 'fas fa-minus';
    }
  });
});

// Contact form submission
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Basic form validation
    const name = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !message) {
      alert('Please fill in all required fields.');
      return;
    }
    
    // In a real implementation, you would send the form data to a server
    // For now, we'll just simulate a submission
    const formData = new FormData(contactForm);
    const formObject = Object.fromEntries(formData);
    
    console.log('Form submitted:', formObject);
    
    // Show success message
    alert('Thank you for your message! We will contact you soon.');
    contactForm.reset();
  });
}

// Contact form on home page
if (contactFormHome) {
  contactFormHome.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Basic form validation
    const name = contactFormHome.querySelector('[name="name"]').value;
    const email = contactFormHome.querySelector('[name="email"]').value;
    const message = contactFormHome.querySelector('[name="message"]').value;
    
    if (!name || !email || !message) {
      alert('Please fill in all required fields.');
      return;
    }
    
    // In a real implementation, you would send the form data to a server
    // For now, we'll just simulate a submission
    const formData = new FormData(contactFormHome);
    const formObject = Object.fromEntries(formData);
    
    console.log('Form submitted:', formObject);
    
    // Show success message
    alert('Thank you for your message! We will contact you soon.');
    contactFormHome.reset();
  });
}

// Animate elements when they come into view
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.mineral-card, .activity-card, .news-card, .leader-card, .location-card');
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementTop < windowHeight * 0.8) {
      element.classList.add('animate');
    }
  });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Initialize page-specific elements
const initializePageElements = () => {
  // Homepage slider (placeholder for future implementation)
  const heroSection = document.querySelector('.hero');
  if (heroSection) {
    // Here you would implement a hero slider/carousel if needed
    console.log('Hero section initialized');
  }
};

// Run initialization on page load
document.addEventListener('DOMContentLoaded', initializePageElements);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  });
});