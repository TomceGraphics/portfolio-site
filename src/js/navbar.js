export function renderNavbar() {
  // Inject the nav into the header or body
  const nav = document.createElement('nav');

  // Floating "Island" Design - HUD Style
  nav.className = "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-lg rounded-2xl border border-slate-200/60 dark:border-slate-700/60 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-glass dark:shadow-glass-dark p-2 flex items-center justify-between transition-all duration-300";

  nav.innerHTML = `
    <!-- Logo Icon (Mobile/Compact) -->
    <a href="#" class="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-brand-600 dark:text-brand-400 transition-colors">
      <span class="iconify" data-icon="ph:aperture-duotone" data-width="24"></span>
    </a>

    <!-- Links -->
    <div class="flex items-center gap-1">
      <a href="#work" class="px-3 py-2 text-sm font-medium rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">Work</a>
      <a href="#services" class="px-3 py-2 text-sm font-medium rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">Services</a>
      <a href="#process" class="hidden sm:block px-3 py-2 text-sm font-medium rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">Process</a>
      <a href="#articles" class="hidden sm:block px-3 py-2 text-sm font-medium rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">Writing</a>
    </div>

    <!-- Theme Toggle & Contact -->
    <div class="flex items-center gap-2 pl-2 border-l border-slate-200 dark:border-slate-700">
      <button id="themeToggle" class="p-2 rounded-xl text-slate-500 hover:text-brand-500 hover:bg-brand-50 dark:hover:bg-slate-800 transition-all" aria-label="Toggle Dark Mode">
        <span class="iconify block dark:hidden" data-icon="ph:sun-duotone" data-width="20"></span>
        <span class="iconify hidden dark:block" data-icon="ph:moon-duotone" data-width="20"></span>
      </button>
      
      <a href="#contact" class="hidden sm:flex items-center justify-center h-9 px-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold uppercase tracking-wide hover:scale-105 transition-transform">
        Hire Me
      </a>
    </div>
  `;

  document.body.prepend(nav);

  // Initialize Theme Logic
  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;

  // Check local storage or system preference
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }

  themeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    localStorage.theme = html.classList.contains('dark') ? 'dark' : 'light';
  });
}