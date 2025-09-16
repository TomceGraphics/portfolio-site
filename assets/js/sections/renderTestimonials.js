export function renderTestimonials(container, testimonials) {
  container.innerHTML = testimonials.map(t => `
    <blockquote class="rounded-2xl border border-slate-200/70 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 p-5 shadow-subtle">
      <p class="text-sm italic">“${t.quote}”</p>
      <footer class="mt-3 text-sm text-slate-600 dark:text-slate-300">— ${t.author}, ${t.role}</footer>
    </blockquote>
  `).join('');
}


