// Disable browser scroll restoration so page always starts at the top on reload
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

// Data Imports
import {
  profile,
  clientProjects,
  personalProjects,
  services,
  processSteps,
  testimonials,
  articles
} from './data.js';

// Component Imports
import { renderNavbar } from './navbar.js'; // Ensure this matches the file created in step 2
import { renderProfile } from '../components/profileCard.js'; // Ensure this matches the file created in step 2

// Section Renderers
import { renderProjects, attachFilterControls } from './sections/renderProjects.js';
import { renderServices } from './sections/renderServices.js';
import { renderProcess } from './sections/renderProcess.js';
import { renderTestimonials } from './sections/renderTestimonials.js';
import { renderArticles } from './sections/renderArticles.js';

/**
 * Initialize the Floating Navbar
 * & Handle Scroll Spy (Active State)
 */
function initNavigation() {
  // 1. Inject the navbar HTML
  renderNavbar();

  // 2. Set up Scroll Spy to highlight active section in the Floating HUD
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNav() {
    let currentSectionId = '';

    // Find which section is currently in view
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      // Offset of 30% viewport height for natural feel
      if (window.scrollY >= (sectionTop - window.innerHeight * 0.3)) {
        currentSectionId = section.getAttribute('id');
      }
    });

    // Update the HUD links
    // Note: We target links by their href attribute since the nav is injected dynamically
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(link => {
      // Remove active styles (text-slate-900 / white)
      link.classList.remove('text-slate-900', 'dark:text-white', 'bg-slate-100', 'dark:bg-slate-800');
      link.classList.add('text-slate-600', 'dark:text-slate-300'); // Reset to inactive

      if (link.getAttribute('href') === `#${currentSectionId}`) {
        // Add active styles
        link.classList.remove('text-slate-600', 'dark:text-slate-300');
        link.classList.add('text-slate-900', 'dark:text-white', 'bg-slate-100', 'dark:bg-slate-800');
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav);
  // Trigger once on load
  setTimeout(updateActiveNav, 100);
}

/**
 * Initialize Profile Card
 */
function initProfile() {
  const cardContainer = document.getElementById('profileCard');
  if (cardContainer) {
    renderProfile(cardContainer, profile);
  }
}

/**
 * Initialize Projects & Filters
 */
function initProjects() {
  const clientProjectsEl = document.getElementById('clientProjects');
  const personalProjectsEl = document.getElementById('personalProjects');

  // Client Work
  if (clientProjectsEl) {
    renderProjects(clientProjectsEl, clientProjects);
    attachFilterControls('.filter-btn', clientProjectsEl, clientProjects);
  }

  // Personal / R&D
  if (personalProjectsEl) {
    renderProjects(personalProjectsEl, personalProjects);
    attachFilterControls('.filter-btn-personal', personalProjectsEl, personalProjects);
  }
}

/**
 * Initialize Content Sections
 */
function initContent() {
  const servicesEl = document.getElementById('servicesList');
  const processEl = document.getElementById('processSteps');
  const testimonialsEl = document.getElementById('testimonialsList');
  const articlesEl = document.getElementById('articlesList');

  if (servicesEl) renderServices(servicesEl, services);
  if (processEl) renderProcess(processEl, processSteps);
  if (testimonialsEl) renderTestimonials(testimonialsEl, testimonials);
  if (articlesEl) renderArticles(articlesEl, articles);
}

/**
 * HIGH-END POLISH: Mouse Spotlight Effect
 * Adds a subtle radial gradient glow that follows the mouse 
 * on all cards, giving it that "Engineer/Hardware" feel.
 */
function initSpotlightEffect() {
  // Target all cards: Projects, Services, Testimonials, Profile
  const cards = document.querySelectorAll('.group, #profileCard, blockquote, article');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // We use CSS variables to update the position efficiently
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/**
 * Master Init
 */
function init() {
  initNavigation();
  initProfile();
  initProjects();
  initContent();

  // Add Footer Year Dynamic Update
  const footerYear = document.querySelector('footer span');
  if (footerYear && footerYear.innerText.includes('2026')) {
    // Optional: Keep it 2026 or update dynamically
    // footerYear.innerHTML = `&copy; ${new Date().getFullYear()} Sys.All_Rights_Reserved`;
  }

  // Initialize effects after DOM is fully painted
  requestAnimationFrame(() => {
    initSpotlightEffect();
  });
}

// Boot up
document.addEventListener('DOMContentLoaded', init);