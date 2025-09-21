import { profile, clientProjects, personalProjects, services, processSteps, testimonials, articles } from './data.js';
import { renderProfileCard } from './components/profileCard.js';
import { renderProjects, attachFilterControls } from './sections/renderProjects.js';
import { renderServices } from './sections/renderServices.js';
import { renderProcess } from './sections/renderProcess.js';
import { renderTestimonials } from './sections/renderTestimonials.js';
import { renderArticles } from './sections/renderArticles.js';
import { initNavbar } from './components/navbar.js';

function initFooterYear() {
  const y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());
}

function initProfile() {
  const card = document.getElementById('profileCard');
  if (card) renderProfileCard(card, profile);
}

function initProjects() {
  const clientProjectsEl = document.getElementById('clientProjects');
  const personalProjectsEl = document.getElementById('personalProjects');
  
  if (clientProjectsEl) {
    renderProjects(clientProjectsEl, clientProjects);
    attachFilterControls('.filter-btn', clientProjectsEl, clientProjects);
  }
  
  if (personalProjectsEl) {
    renderProjects(personalProjectsEl, personalProjects);
    attachFilterControls('.filter-btn-personal', personalProjectsEl, personalProjects);
  }
}

function initNewSections() {
  const servicesEl = document.getElementById('servicesList');
  const processEl = document.getElementById('processSteps');
  const testimonialsEl = document.getElementById('testimonialsList');
  const articlesEl = document.getElementById('articlesList');
  
  if (servicesEl) renderServices(servicesEl, services);
  if (processEl) renderProcess(processEl, processSteps);
  if (testimonialsEl) renderTestimonials(testimonialsEl, testimonials);
  if (articlesEl) renderArticles(articlesEl, articles);
}

function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  function updateActiveNav() {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-brand-600', 'dark:text-brand-400');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('text-brand-600', 'dark:text-brand-400');
      }
    });
  }
  
  window.addEventListener('scroll', updateActiveNav);
  updateActiveNav();
}

function initMicroInteractions() {
  document.addEventListener('mousemove', (e) => {
    const headers = document.querySelectorAll('h2');
    headers.forEach(h => {
      const rect = h.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      const dist = Math.sqrt(dx * dx + dy * dy);
      const intensity = Math.max(0, 1 - Math.min(dist / 300, 1));
      h.style.textShadow = `0 1px 0 rgba(0,0,0,${0.04 * intensity})`;
    });
  });
}

function init() {
  initNavbar();
  initProfile();
  initProjects();
  initNewSections();
  initActiveNav();
  initFooterYear();
  initMicroInteractions();
}

document.addEventListener('DOMContentLoaded', init);
