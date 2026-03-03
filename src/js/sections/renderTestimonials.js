export function renderTestimonials(container, testimonials) {
  container.innerHTML = testimonials.map(t => `
    <blockquote class="group relative rounded-3xl border border-slate-200/60 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 p-8 shadow-glass dark:shadow-glass-dark backdrop-blur-xl transition-all hover:-translate-y-1 hover:bg-white/60 dark:hover:bg-slate-800/60">
      <span class="iconify absolute top-6 right-6 text-slate-200 dark:text-slate-800 transition-colors group-hover:text-brand-100 dark:group-hover:text-brand-900/30" data-icon="ph:quotes-duotone" data-width="48"></span>
      <p class="relative z-10 text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300 italic">"${t.quote}"</p>
      <footer class="mt-8 flex items-center gap-4">
        <div class="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 text-white font-bold text-lg shadow-inner">
          ${t.author.charAt(0)}
        </div>
        <div>
          <div class="font-bold text-slate-900 dark:text-white">${t.author}</div>
          <div class="font-mono text-xs text-brand-600 dark:text-brand-400 mt-0.5">${t.role}</div>
        </div>
      </footer>
    </blockquote>
  `).join('');
}