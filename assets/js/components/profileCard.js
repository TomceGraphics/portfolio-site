export function renderProfileCard(container, profile) {
  container.innerHTML = `
    <div class="flex items-start gap-4">
      <img src="${profile.avatar}" alt="${profile.name} avatar" class="h-16 w-16 rounded-xl ring-2 ring-brand-200 dark:ring-brand-800 object-cover" />
      <div>
        <h1 class="text-2xl font-semibold tracking-tight">${profile.name}</h1>
        <p class="text-brand-600 dark:text-brand-400 font-medium">${profile.role}</p>
      </div>
    </div>
    <p class="mt-4 text-slate-600 dark:text-slate-300">${profile.bio}</p>
    <div class="mt-4 flex flex-wrap gap-3">
      ${profile.links.map(link => `
        <a href="${link.href}" class="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-slate-300/70 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
          <span class="iconify" data-icon="${link.icon}"></span>
          <span class="text-sm">${link.label}</span>
        </a>
      `).join('')}
    </div>
    <div class="mt-5 flex flex-wrap gap-2">
      ${profile.capabilities.map(cap => `
        <span class=\"inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-brand-200 border border-brand-100/70 dark:border-brand-800 text-xs\">
          <span class=\"iconify\" data-icon=\"ph:check-circle-duotone\"></span>
          ${cap}
        </span>
      `).join('')}
    </div>
  `;
}


