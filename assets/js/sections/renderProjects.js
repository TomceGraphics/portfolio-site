import { createProjectCard } from '../components/projectCard.js';

export function renderProjects(container, projects) {
  container.innerHTML = '';
  const fragment = document.createDocumentFragment();
  projects.forEach(p => fragment.appendChild(createProjectCard(p)));
  container.appendChild(fragment);
}

export function attachFilterControls(buttonsSelector, container, allProjects) {
  const buttons = document.querySelectorAll(buttonsSelector);
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active', 'bg-slate-100', 'dark:bg-slate-800'));
      btn.classList.add('active', 'bg-slate-100', 'dark:bg-slate-800');

      const filter = btn.getAttribute('data-filter');
      let filtered = allProjects;
      if (filter === 'live' || filter === 'live-personal') {
        filtered = allProjects.filter(p => p.live);
      } else if (filter === 'opensource' || filter === 'opensource-personal') {
        filtered = allProjects.filter(p => p.openSource);
      } else if (filter === 'all' || filter === 'all-personal') {
        filtered = allProjects;
      }
      renderProjects(container, filtered);
    });
  });
}


