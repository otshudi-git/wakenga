// Animations for Wakenga Mining Website

// Function to check if element is in viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to add animation class when element is in viewport
function animateOnScroll() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  
  elements.forEach(element => {
    if (isElementInViewport(element)) {
      // Add the animation class based on the data attribute
      const animationType = element.dataset.animation || 'fadeIn';
      element.classList.add(animationType);
    }
  });
}

// Function to initialize animations
function initializeAnimations() {
  // Add animation classes to elements
  const animatedElements = [
    { selector: '.mineral-card', animation: 'fadeInUp', delay: true },
    { selector: '.activity-card', animation: 'fadeInUp', delay: true },
    { selector: '.stats-container .stat-item', animation: 'fadeInUp', delay: true },
    { selector: '.timeline-item', animation: 'fadeInLeft', delay: true },
    { selector: '.leader-card', animation: 'fadeInUp', delay: true },
    { selector: '.location-card', animation: 'fadeInUp', delay: true },
    { selector: '.csr-pillar', animation: 'fadeInRight', delay: true },
    { selector: '.news-card', animation: 'fadeInUp', delay: true },
    { selector: '.contact-card', animation: 'fadeIn', delay: false },
    { selector: '.section-header', animation: 'fadeIn', delay: false }
  ];
  
  // Apply animation classes
  animatedElements.forEach(({ selector, animation, delay }) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element, index) => {
      element.classList.add('animate-on-scroll');
      element.dataset.animation = animation;
      
      // Add delay if needed
      if (delay) {
        element.style.animationDelay = `${index * 0.1}s`;
      }
    });
  });
  
  // Run animation check on scroll and on load
  window.addEventListener('scroll', animateOnScroll);
  window.addEventListener('load', animateOnScroll);
}

// Hero parallax effect
function initializeParallax() {
  const hero = document.querySelector('.hero');
  
  if (hero) {
    window.addEventListener('scroll', () => {
      const scrollPosition = window.pageYOffset;
      hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });
  }
}

// Counter animation for statistics
function initializeCounters() {
  const counters = document.querySelectorAll('.stat-number');
  
  counters.forEach(counter => {
    const target = parseInt(counter.textContent);
    const countUp = () => {
      const count = +counter.innerText.replace(/\+/g, '');
      const increment = target / 20;
      
      if (count < target) {
        counter.innerText = Math.ceil(count + increment) + (counter.innerText.includes('+') ? '+' : '');
        setTimeout(countUp, 50);
      } else {
        counter.innerText = target + (counter.innerText.includes('+') ? '+' : '');
      }
    };
    
    // Only start animation when element is in viewport
    const observerOptions = {
      threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          countUp();
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    observer.observe(counter);
  });
}

// Partner logo slider animation
function initializePartnerSlider() {
  const partnersSlider = document.querySelector('.partners-slider');
  
  if (partnersSlider) {
    // Simple auto-scroll animation
    // In a real implementation, this would be replaced with a proper slider
    let position = 0;
    const speed = 1;
    const logos = partnersSlider.querySelectorAll('.partner-logo');
    
    // Clone logos for infinite scrolling effect
    logos.forEach(logo => {
      const clone = logo.cloneNode(true);
      partnersSlider.appendChild(clone);
    });
    
    function moveSlider() {
      position -= speed;
      
      // Reset position after all logos have scrolled
      if (position <= -(logos.length * 200)) {
        position = 0;
      }
      
      partnersSlider.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(moveSlider);
    }
    
    // Pause animation on hover
    partnersSlider.addEventListener('mouseenter', () => {
      cancelAnimationFrame(moveSlider);
    });
    
    partnersSlider.addEventListener('mouseleave', () => {
      requestAnimationFrame(moveSlider);
    });
    
    // Start the animation
    requestAnimationFrame(moveSlider);
  }
}

// Export the animation functions
export { 
  initializeAnimations, 
  initializeParallax, 
  initializeCounters, 
  initializePartnerSlider 
};