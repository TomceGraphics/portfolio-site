export function renderArticles(container, articles) {
  container.innerHTML = articles.map(a => `
    <a href="${a.href}" target="_blank" rel="noreferrer" class="group block rounded-2xl border border-slate-200/70 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 p-5 shadow-subtle hover:shadow-md transition-shadow">
      <h3 class="font-semibold group-hover:text-brand-600">${a.title}</h3>
      <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">${a.source}</p>
    </a>
  `).join('');
}


