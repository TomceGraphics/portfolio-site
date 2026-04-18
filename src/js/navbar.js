export function renderNavbar() {
  const nav = document.createElement('nav');

  nav.className =
    "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-fit rounded-2xl border border-slate-200/60 dark:border-slate-700/60 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-glass dark:shadow-glass-dark p-2 flex flex-col transition-all duration-300";

  nav.innerHTML = `
    <!-- Main Row -->
    <div class="flex items-center gap-1">

      <!-- Logo (icon only, always) -->
      <a href="#" aria-label="Home" class="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-brand-600 dark:text-brand-400 transition-colors">
        <span class="iconify" data-icon="lucide:aperture" data-width="22"></span>
      </a>

      <!-- Divider -->
      <span class="w-px h-5 bg-slate-200 dark:bg-slate-700 mx-1"></span>

      <!-- Mobile: icon only | Desktop: text only -->
      <a href="#work" aria-label="Work"
         class="flex items-center px-2 py-2 sm:px-3 text-sm font-medium rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
        <span class="iconify sm:hidden" data-icon="lucide:briefcase" data-width="20"></span>
        <span class="hidden sm:inline">Work</span>
      </a>
      <a href="#services" aria-label="Services"
         class="flex items-center px-2 py-2 sm:px-3 text-sm font-medium rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
        <span class="iconify sm:hidden" data-icon="lucide:sparkles" data-width="20"></span>
        <span class="hidden sm:inline">Services</span>
      </a>
      <a href="#process" aria-label="Process"
         class="flex items-center px-2 py-2 sm:px-3 text-sm font-medium rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
        <span class="iconify sm:hidden" data-icon="lucide:git-branch" data-width="20"></span>
        <span class="hidden sm:inline">Process</span>
      </a>
      <a href="#articles" aria-label="Writing"
         class="flex items-center px-2 py-2 sm:px-3 text-sm font-medium rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
        <span class="iconify sm:hidden" data-icon="lucide:pen-line" data-width="20"></span>
        <span class="hidden sm:inline">Writing</span>
      </a>

      <!-- Divider -->
      <span class="w-px h-5 bg-slate-200 dark:bg-slate-700 mx-1"></span>

      <!-- Theme toggle: desktop only (hidden on mobile, lives in hamburger menu) -->
      <button id="themeToggle" aria-label="Toggle Dark Mode"
              class="hidden sm:flex p-2 rounded-xl text-slate-500 hover:text-brand-500 hover:bg-brand-50 dark:hover:bg-slate-800 transition-all">
        <span class="iconify block dark:hidden" data-icon="lucide:sun" data-width="20"></span>
        <span class="iconify hidden dark:block" data-icon="lucide:moon" data-width="20"></span>
      </button>

      <!-- Hire Me (text only, always) -->
      <a href="#contact"
         class="flex items-center justify-center h-9 px-4 rounded-xl bg-slate-900 dark:bg-white text-slate-50 dark:text-slate-900 text-xs font-bold uppercase tracking-wide whitespace-nowrap hover:scale-105 transition-transform">
        Hire Me
      </a>

      <!-- Hamburger (always visible) -->
      <button id="hamburgerBtn" aria-label="Open menu" aria-expanded="false"
              class="p-2 rounded-xl text-slate-500 hover:text-brand-500 hover:bg-brand-50 dark:hover:bg-slate-800 transition-all">
        <span class="iconify" id="hamburgerIcon" data-icon="lucide:menu" data-width="20"></span>
      </button>
    </div>

    <!-- Accessible Dropdown (icon + full text labels) -->
    <div id="mobileMenu"
         class="overflow-hidden transition-all duration-300 ease-in-out"
         style="max-height: 0; opacity: 0;">
      <div class="mt-2 pt-2 border-t border-slate-200 dark:border-slate-700 flex flex-col gap-1 pb-1 min-w-[160px]">

        <a href="#work" class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
          <span class="iconify" data-icon="lucide:briefcase" data-width="16"></span>Work
        </a>
        <a href="#services" class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
          <span class="iconify" data-icon="lucide:sparkles" data-width="16"></span>Services
        </a>
        <a href="#process" class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
          <span class="iconify" data-icon="lucide:git-branch" data-width="16"></span>Process
        </a>
        <a href="#articles" class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
          <span class="iconify" data-icon="lucide:pen-line" data-width="16"></span>Writing
        </a>
        <a href="#contact" class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
          <span class="iconify" data-icon="lucide:handshake" data-width="16"></span>Hire Me
        </a>

        <!-- Theme toggle row (mobile only) -->
        <div class="flex items-center justify-between px-3 py-2 mt-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer" id="themeRowMobile">
          <span class="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-300">
            <span class="iconify block dark:hidden" data-icon="lucide:sun" data-width="16"></span>
            <span class="iconify hidden dark:block" data-icon="lucide:moon" data-width="16"></span>
            Theme
          </span>
          <button id="themeToggleMobile" aria-label="Toggle Dark Mode" class="p-1 rounded-lg text-slate-500 hover:text-brand-500 transition-all">
            <span class="iconify block dark:hidden" data-icon="lucide:sun" data-width="16"></span>
            <span class="iconify hidden dark:block" data-icon="lucide:moon" data-width="16"></span>
          </button>
        </div>
      </div>
    </div>
  `;

  document.body.prepend(nav);

  // ── Theme logic ──────────────────────────────────────────────
  const html = document.documentElement;

  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }

  const toggleTheme = () => {
    html.classList.toggle('dark');
    localStorage.theme = html.classList.contains('dark') ? 'dark' : 'light';
  };

  document.getElementById('themeToggle').addEventListener('click', toggleTheme);
  document.getElementById('themeToggleMobile').addEventListener('click', toggleTheme);
  document.getElementById('themeRowMobile').addEventListener('click', toggleTheme);

  // ── Hamburger logic ──────────────────────────────────────────
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const hamburgerIcon = document.getElementById('hamburgerIcon');
  const mobileMenu = document.getElementById('mobileMenu');
  let menuOpen = false;

  hamburgerBtn.addEventListener('click', () => {
    menuOpen = !menuOpen;
    hamburgerBtn.setAttribute('aria-expanded', menuOpen);

    if (menuOpen) {
      mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
      mobileMenu.style.opacity = '1';
      hamburgerIcon.setAttribute('data-icon', 'lucide:x');
    } else {
      mobileMenu.style.maxHeight = '0';
      mobileMenu.style.opacity = '0';
      hamburgerIcon.setAttribute('data-icon', 'lucide:menu');
    }

    if (window.Iconify) window.Iconify.scan(hamburgerBtn);
  });

  // Close menu when a dropdown link is clicked
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuOpen = false;
      hamburgerBtn.setAttribute('aria-expanded', 'false');
      mobileMenu.style.maxHeight = '0';
      mobileMenu.style.opacity = '0';
      hamburgerIcon.setAttribute('data-icon', 'lucide:menu');
      if (window.Iconify) window.Iconify.scan(hamburgerBtn);
    });
  });
}