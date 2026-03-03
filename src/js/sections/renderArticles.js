export function renderArticles(container, articles) {
  container.innerHTML = articles.map(a => `
    <a href="${a.href}" target="_blank" rel="noreferrer" class="group flex items-center justify-between rounded-2xl border border-slate-200/60 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 p-6 shadow-sm backdrop-blur-md transition-all hover:bg-white/80 dark:hover:bg-slate-800/80 hover:shadow-md">
      <div class="pr-4">
        <h3 class="font-bold text-slate-900 dark:text-white transition-colors group-hover:text-brand-600 dark:group-hover:text-brand-400 line-clamp-2">${a.title}</h3>
        <div class="mt-2 flex items-center gap-2 font-mono text-xs text-slate-500 dark:text-slate-400">
          <span class="iconify" data-icon="ph:article-duotone"></span>
          ${a.source}
        </div>
      </div>
      <div class="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 group-hover:bg-brand-100 dark:group-hover:bg-brand-900/30 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-all">
        <span class="iconify transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" data-icon="ph:arrow-up-right-bold"></span>
      </div>
    </a>
  `).join('');
}