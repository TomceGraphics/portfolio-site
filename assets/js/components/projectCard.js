export function createProjectCard(project) {
  const statusChips = [
    project.openSource ? '<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-200 border border-emerald-100/70 dark:border-emerald-800"><span class="iconify" data-icon="mdi:source-branch"></span>OS</span>' : '',
    project.live ? '<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] bg-accent-50 text-accent-700 dark:bg-accent-900/30 dark:text-accent-200 border border-accent-100/70 dark:border-accent-800"><span class="iconify" data-icon="mdi:lightning-bolt"></span>Live</span>' : ''
  ].filter(Boolean).join('');

  const actions = `
    <div class="mt-3 flex items-center gap-2">
      ${project.repoUrl ? `<a href="${project.repoUrl}" target="_blank" rel="noreferrer" class="inline-flex items-center gap-1 text-sm text-slate-600 hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400 transition-colors"><span class=\"iconify\" data-icon=\"mdi:github\"></span>Repo</a>` : ''}
      ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" rel="noreferrer" class="inline-flex items-center gap-1 text-sm text-slate-600 hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400 transition-colors"><span class=\"iconify\" data-icon=\"mdi:external-link\"></span>Live</a>` : ''}
    </div>
  `;

  const tagChips = project.tags.map(t => `<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700">${t}</span>`).join('');

  const clickable = Boolean(project.caseStudyPath);
  const isPersonal = project.type === 'personal';
  const cardPadding = isPersonal ? 'p-3' : 'p-4';
  const titleClass = isPersonal ? 'text-sm font-semibold leading-snug' : 'font-semibold leading-tight';
  const borderClass = isPersonal ? 'border-slate-200/60 dark:border-slate-800/80' : 'border-slate-200/70 dark:border-slate-800';
  const bgClass = isPersonal ? 'bg-white/50 dark:bg-slate-900/50' : 'bg-white/60 dark:bg-slate-900/60';
  const hoverClass = isPersonal ? 'hover:shadow-md' : 'hover:shadow-lg';
  const transformHover = isPersonal ? '' : 'hover:-translate-y-0.5';
  const imageAspect = isPersonal ? 'aspect-[4/3]' : 'aspect-[16/9]';

  const imageBlock = project.cover
    ? `<img src="${project.cover}" alt="${project.title} cover" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"/>`
    : `<div class="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center">
         <span class="iconify text-slate-400" data-icon="ph:image-duotone" data-width="32" data-height="32"></span>
       </div>`;

  const personalActions = (isPersonal && (project.repoUrl || project.liveUrl)) ? `
    <div class="mt-3 flex items-center gap-2">
      ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" rel="noreferrer" class="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-brand-600 text-white hover:bg-brand-700 text-xs transition-colors"><span class=\"iconify\" data-icon=\"mdi:external-link\"></span>Live</a>` : ''}
      ${project.repoUrl ? `<a href="${project.repoUrl}" target="_blank" rel="noreferrer" class="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md border border-slate-300/70 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900 text-xs transition-colors"><span class=\"iconify\" data-icon=\"mdi:github\"></span>Repo</a>` : ''}
    </div>
  ` : '';

  const html = `
    <article class="group overflow-hidden rounded-2xl border ${borderClass} ${bgClass} shadow-subtle ${hoverClass} transition-[box-shadow,transform] ${clickable ? `cursor-pointer ${transformHover}` : ''}">
      <div class="${imageAspect} overflow-hidden">
        ${imageBlock}
      </div>
      <div class="${cardPadding}">
        <div class="flex items-center justify-between gap-2">
          <h3 class="${titleClass}">${project.title}</h3>
          <div class="flex items-center gap-1">${statusChips}</div>
        </div>
        <p class="mt-1 ${isPersonal ? 'text-xs' : 'text-sm'} text-slate-600 dark:text-slate-300">${project.description}</p>
        <div class="mt-2 ${isPersonal ? 'gap-1.5' : 'gap-2'} flex flex-wrap">${tagChips}</div>
        ${isPersonal ? personalActions : actions}
      </div>
    </article>
  `;

  const wrapper = document.createElement('div');
  wrapper.innerHTML = html.trim();
  const card = wrapper.firstElementChild;

  if (clickable) {
    card.addEventListener('click', (e) => {
      const target = e.target;
      if (target.closest('a')) return; // allow inner links
      const path = encodeURI(project.caseStudyPath);
      window.location.assign(path);
    });
  }

  return card;
}


