import { createProjectCard } from '../../components/projectCard.js';

export function renderProjects(container, projects) {
  container.innerHTML = '';
  const fragment = document.createDocumentFragment();
  projects.forEach(p => fragment.appendChild(createProjectCard(p)));
  container.appendChild(fragment);
}

export function attachFilterControls(buttonsSelector, container, allProjects) {
  const buttons = document.querySelectorAll(buttonsSelector);

  // The active state classes for our new segmented control
  const activeClasses = ['bg-white', 'dark:bg-slate-700', 'text-slate-900', 'dark:text-white', 'shadow-sm'];
  const inactiveClasses = ['text-slate-600', 'dark:text-slate-400', 'hover:text-slate-900', 'dark:hover:text-white'];

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Reset all buttons
      buttons.forEach(b => {
        b.classList.remove('active', ...activeClasses);
        b.classList.add(...inactiveClasses);
      });

      // Set active button
      btn.classList.remove(...inactiveClasses);
      btn.classList.add('active', ...activeClasses);

      const filter = btn.getAttribute('data-filter');
      let filtered = allProjects;

      if (filter === 'live' || filter === 'live-personal') {
        filtered = allProjects.filter(p => p.live);
      } else if (filter === 'opensource' || filter === 'opensource-personal') {
        filtered = allProjects.filter(p => p.openSource);
      }

      // Assumes renderProjects exists exactly as you provided
      renderProjects(container, filtered);
    });
  });
}


