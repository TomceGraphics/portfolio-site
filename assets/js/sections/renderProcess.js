export function renderProcess(container, steps) {
  container.innerHTML = steps.map(s => `
    <li class="rounded-2xl border border-slate-200/70 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 p-5 shadow-subtle">
      <div class="inline-flex items-center justify-center h-8 w-8 rounded-full bg-brand-600 text-white text-sm font-semibold">${s.step}</div>
      <h3 class="mt-3 font-semibold">${s.title}</h3>
      <p class="mt-1 text-sm text-slate-600 dark:text-slate-300">${s.description}</p>
    </li>
  `).join('');
}


