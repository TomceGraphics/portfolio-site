export function renderServices(container, services) {
  container.innerHTML = services.map(s => `
    <article class="group relative flex flex-col rounded-3xl border border-slate-200/60 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 p-8 shadow-glass dark:shadow-glass-dark backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-glass-hover dark:hover:shadow-glass-dark-hover hover:bg-white/80 dark:hover:bg-slate-800/80">
      <div class="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 ring-1 ring-brand-500/20 group-hover:scale-110 transition-transform duration-300">
        <span class="iconify" data-icon="${s.icon}" data-width="28" data-height="28"></span>
      </div>
      <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">${s.title}</h3>
      <p class="text-sm leading-relaxed text-slate-600 dark:text-slate-400 flex-grow">${s.description}</p>
    </article>
  `).join('');
}