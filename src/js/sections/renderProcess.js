export function renderProcess(container, steps) {
  container.innerHTML = steps.map((s, index) => `
    <li class="relative pt-8 sm:pt-0 pl-10 sm:pl-0">
      <!-- Horizontal connecting line for Desktop -->
      ${index !== steps.length - 1 ? `<div class="hidden lg:block absolute top-6 left-12 w-[calc(100%-1rem)] h-[2px] bg-gradient-to-r from-brand-500/50 to-transparent"></div>` : ''}
      
      <!-- Vertical connecting line for Mobile -->
      ${index !== steps.length - 1 ? `<div class="block sm:hidden absolute top-12 left-[1.15rem] w-[2px] h-[calc(100%+1rem)] bg-gradient-to-b from-brand-500/50 to-transparent"></div>` : ''}

      <div class="absolute left-0 top-6 sm:static sm:mb-6 z-10 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500 text-white font-mono text-sm font-bold shadow-[0_0_15px_rgba(242,171,1,0.4)]">
        0${s.step}
      </div>
      <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">${s.title}</h3>
      <p class="text-sm leading-relaxed text-slate-600 dark:text-slate-400">${s.description}</p>
    </li>
  `).join('');
}