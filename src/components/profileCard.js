export function renderProfile(container, profileData) {
  if (!container) return;

  container.innerHTML = `
    <div class="flex flex-col h-full rounded-full">
      <!-- Header: Avatar & Info -->
      <div class="flex items-center gap-5 mb-6">
        <div class="relative">
          <div class="absolute -inset-1 rounded-full bg-white dark:bg-slate-800 opacity-75 blur-sm"></div>
          <img src="${profileData.avatar}" alt="${profileData.name}" class="relative h-20 w-20 rounded-full border-2 border-white dark:border-slate-800 object-cover shadow-md">
          <div class="absolute bottom-0 right-0 h-5 w-5 rounded-full bg-green-500 border-2 border-white dark:border-slate-900"></div>
        </div>
        <div>
          <h2 class="text-xl font-bold text-slate-900 dark:text-white">${profileData.name}</h2>
          <div class="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            <span class="iconify" data-icon="ph:map-pin-duotone"></span>
            ${profileData.location}
          </div>
          <div class="flex gap-2 mt-3">
            ${profileData.links.map(link => `
              <a href="${link.href}" target="_blank" class="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:text-brand-600 dark:hover:text-brand-400 hover:border-brand-200 transition-all shadow-sm">
                <span class="iconify block" data-icon="${link.icon}" data-width="18"></span>
              </a>
            `).join('')}
          </div>
        </div>
      </div>

      <hr class="border-slate-200 dark:border-slate-700/60 mb-6">

      <!-- Bio -->
      <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
        ${profileData.bio}
      </p>

      <!-- Capabilities Tags -->
      <div class="mt-auto">
        <p class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Core Stack</p>
        <div class="flex flex-wrap gap-2">
          ${profileData.capabilities.slice(0, 6).map(cap => `
            <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-50 dark:bg-brand-900/10 text-brand-700 dark:text-brand-300 text-xs font-medium border border-brand-100 dark:border-brand-900/20">
              <span class="w-1 h-1 rounded-full bg-brand-500"></span>
              ${cap}
            </span>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}