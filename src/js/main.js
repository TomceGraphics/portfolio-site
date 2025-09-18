import { profile, clientProjects, personalProjects, services, processSteps, testimonials, articles } from './data.js';
import { renderProfileCard } from './components/profileCard.js';
import { renderProjects, attachFilterControls } from './sections/renderProjects.js';
import { renderServices } from './sections/renderServices.js';
import { renderProcess } from './sections/renderProcess.js';
import { renderTestimonials } from './sections/renderTestimonials.js';
import { renderArticles } from './sections/renderArticles.js';
import { initNavbar } from './components/navbar.js';

function initTheme() {
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (saved === 'dark' || (!saved && prefersDark)) root.classList.add('dark');
  const btn = document.getElementById('themeToggle');
  if (btn) {
    btn.addEventListener('click', () => {
      root.classList.toggle('dark');
      localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
    });
  }
}

function initFooterYear() {
  const y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());
}

function initProfile() {
  const card = document.getElementById('profileCard');
  if (card) renderProfileCard(card, profile);
}

function initProjects() {
  const clientContainer = document.getElementById('clientProjects');
  const personalContainer = document.getElementById('personalProjects');
  if (clientContainer) {
    renderProjects(clientContainer, clientProjects);
    attachFilterControls('.filter-btn', clientContainer, clientProjects);
  }
  if (personalContainer) {
    renderProjects(personalContainer, personalProjects);
    attachFilterControls('.filter-btn-personal', personalContainer, personalProjects);
  }
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

function initNewSections() {
  const s = document.getElementById('servicesList');
  if (s) renderServices(s, services);
  const p = document.getElementById('processSteps');
  if (p) renderProcess(p, processSteps);
  const t = document.getElementById('testimonialsList');
  if (t) renderTestimonials(t, testimonials);
  const a = document.getElementById('articlesList');
  if (a) renderArticles(a, articles);
}

function initActiveNav() {
  const links = document.querySelectorAll('a.nav-link');
  const sections = Array.from(links).map(l => document.querySelector(l.getAttribute('href'))).filter(Boolean);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = `#${entry.target.id}`;
      const link = document.querySelector(`a.nav-link[href="${id}"]`);
      if (link) {
        if (entry.isIntersecting) {
          links.forEach(l => l.classList.remove('bg-slate-100','dark:bg-slate-800'));
          link.classList.add('bg-slate-100','dark:bg-slate-800');
        }
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px', threshold: 0.01 });
  sections.forEach(s => observer.observe(s));
}

function init() {
  initNavbar();
  initTheme();
  initFooterYear();
  initProfile();
  initProjects();
  initNewSections();
  initActiveNav();
  initMicroInteractions();
}

document.addEventListener('DOMContentLoaded', init);


