// Language Toggle Functionality

// Available translations
const translations = {
  en: {
    // Home page
    "hero-title": "Mining Excellence in the Heart of Congo",
    "hero-subtitle": "Exploration, Exploitation, and Export of Premium Minerals",
    "discover-wakenga": "Discover Wakenga",
    "partner-with-us": "Partner With Us",
    "our-minerals": "Our Premium Minerals",
    "minerals-intro": "Discover the high-quality minerals we extract, process, and export globally",
    
    // Navigation
    "home": "Home",
    "about": "About Us",
    "activities": "Activities",
    "minerals": "Minerals",
    "responsibility": "CSR",
    "projects": "Projects",
    "news": "News",
    "contact": "Contact",
    
    // Footer
    "quick-links": "Quick Links",
    "our-company": "Our Company",
    "legal": "Legal",
    "privacy-policy": "Privacy Policy",
    "terms-of-use": "Terms of Use",
    "contact-us": "Contact Us",
    "all-rights-reserved": "All Rights Reserved"
  },
  fr: {
    // Home page
    "hero-title": "Excellence Minière au Cœur du Congo",
    "hero-subtitle": "Exploration, Exploitation et Exportation de Minéraux de Première Qualité",
    "discover-wakenga": "Découvrir Wakenga",
    "partner-with-us": "Devenir Partenaire",
    "our-minerals": "Nos Minéraux Premium",
    "minerals-intro": "Découvrez les minéraux de haute qualité que nous extrayons, traitons et exportons mondialement",
    
    // Navigation
    "home": "Accueil",
    "about": "À Propos",
    "activities": "Activités",
    "minerals": "Minéraux",
    "responsibility": "RSE",
    "projects": "Projets",
    "news": "Actualités",
    "contact": "Contact",
    
    // Footer
    "quick-links": "Liens Rapides",
    "our-company": "Notre Entreprise",
    "legal": "Mentions Légales",
    "privacy-policy": "Politique de Confidentialité",
    "terms-of-use": "Conditions d'Utilisation",
    "contact-us": "Contactez-Nous",
    "all-rights-reserved": "Tous Droits Réservés"
  }
};

// Function to change the language
function changeLanguage(lang) {
  // Save the selected language in local storage
  localStorage.setItem('preferredLanguage', lang);
  
  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      // For input placeholders
      if (element.hasAttribute('placeholder')) {
        element.setAttribute('placeholder', translations[lang][key]);
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });
  
  // Update language buttons
  document.querySelectorAll('.language-selector button').forEach(button => {
    if (button.getAttribute('data-lang') === lang) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}

// Initialize language based on saved preference or default to English
function initializeLanguage() {
  const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
  changeLanguage(savedLanguage);
}

// Export the language functionality for use in the main.js
export { changeLanguage, initializeLanguage };