export function renderServices(container, services) {
  container.innerHTML = services.map(s => `
    <article class="rounded-2xl border border-slate-200/70 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 p-5 shadow-subtle">
      <div class="flex items-start gap-3">
        <span class="iconify text-brand-600" data-icon="${s.icon}" data-width="24" data-height="24"></span>
        <div>
          <h3 class="font-semibold">${s.title}</h3>
          <p class="mt-1 text-sm text-slate-600 dark:text-slate-300">${s.description}</p>
        </div>
      </div>
    </article>
  `).join('');
}


