export function initNavbar() {
    // Create header element
    const header = document.createElement('header');
    header.className = 'backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/90 dark:bg-slate-950/80 sticky top-0 z-30 border-b border-slate-200/60 dark:border-slate-800';
    
    // Create header content
    header.innerHTML = `
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="iconify text-brand-600" data-icon="ph:sparkle-duotone" data-width="24" data-height="24"></span>
          <span class="font-semibold tracking-tight text-sm sm:text-base">From Zero → First Prototype</span>
        </div>
        
        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-3">
          <a href="#hero" class="nav-link text-sm text-slate-600 hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400 px-2 py-1 rounded-md">Home</a>
          <a href="#work" class="nav-link text-sm text-slate-600 hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400 px-2 py-1 rounded-md">Work</a>
          <a href="#services" class="nav-link text-sm text-slate-600 hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400 px-2 py-1 rounded-md">Services</a>
          <a href="#process" class="nav-link text-sm text-slate-600 hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400 px-2 py-1 rounded-md">Process</a>
          <a href="#testimonials" class="nav-link text-sm text-slate-600 hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400 px-2 py-1 rounded-md">Testimonials</a>
          <a href="#articles" class="nav-link text-sm text-slate-600 hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400 px-2 py-1 rounded-md">Articles</a>
          <button id="themeToggle" class="lg:inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-slate-300/70 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
            <span class="iconify theme-icon" data-icon="ph:moon-stars-duotone"></span>
            <span class="text-sm">Theme</span>
          </button>
          <a href="#contact" class="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-brand-600 text-white hover:bg-brand-700 transition-colors shadow-subtle">
            <span class="iconify" data-icon="ph:paper-plane-right-duotone"></span>
            <span class="text-sm">Contact</span>
          </a>
        </nav>
        
        <!-- Mobile Menu Button -->
        <div class="flex lg:hidden items-center gap-3">
          <a href="#contact" class="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-brand-600 text-white hover:bg-brand-700 transition-colors shadow-subtle text-sm">
            <span class="iconify" data-icon="ph:paper-plane-right-duotone"></span>
            <span>Contact</span>
          </a>
          <button id="mobileMenuButton" class="p-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" aria-label="Toggle menu">
            <span class="iconify menu-icon" data-icon="ph:list" data-width="24" data-height="24"></span>
          </button>
        </div>
      </div>
      
      <!-- Mobile Menu -->
      <div id="mobileMenu" class="lg:hidden hidden absolute top-16 left-0 right-0 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 shadow-lg z-20">
        <div class="px-4 py-3 space-y-2">
          <a href="#hero" class="block px-3 py-2 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800">Home</a>
          <a href="#work" class="block px-3 py-2 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800">Work</a>
          <a href="#services" class="block px-3 py-2 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800">Services</a>
          <a href="#process" class="block px-3 py-2 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800">Process</a>
          <a href="#testimonials" class="block px-3 py-2 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800">Testimonials</a>
          <a href="#articles" class="block px-3 py-2 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800">Articles</a>
          <button id="mobileThemeToggle" class="w-full text-left px-3 py-2 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2">
            <span class="iconify theme-icon" data-icon="ph:moon-stars-duotone"></span>
            <span>Toggle Theme</span>
          </button>
        </div>
      </div>
    `;

    // Insert header at the beginning of the body
    document.body.insertBefore(header, document.body.firstChild);
    
    // Initialize theme toggle
    initThemeToggle();
    
    // Initialize mobile menu
    initMobileMenu();
  }
  
  function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const mobileThemeToggle = document.getElementById('mobileThemeToggle');
    const themeIcons = document.querySelectorAll('.theme-icon');
    
    // Check for saved theme preference or use system preference
    const updateTheme = (isDark) => {
      if (isDark) {
        document.documentElement.classList.add('dark');
        themeIcons.forEach(icon => icon.setAttribute('data-icon', 'ph:sun-duotone'));
      } else {
        document.documentElement.classList.remove('dark');
        themeIcons.forEach(icon => icon.setAttribute('data-icon', 'ph:moon-stars-duotone'));
      }
    };
    
    // Initial theme setup
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      updateTheme(true);
    } else {
      updateTheme(false);
    }
    
    // Toggle theme function
    const toggleTheme = () => {
      const isDark = !document.documentElement.classList.contains('dark');
      localStorage.theme = isDark ? 'dark' : 'light';
      updateTheme(isDark);
    };
    
    // Add event listeners
    if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
    if (mobileThemeToggle) mobileThemeToggle.addEventListener('click', toggleTheme);
    
    // Watch for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (!('theme' in localStorage)) {
        updateTheme(e.matches);
      }
    });
  }
  
  function initMobileMenu() {
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.querySelector('.menu-icon');
    
    if (!mobileMenuButton || !mobileMenu) return;
    
    // Toggle mobile menu
    mobileMenuButton.addEventListener('click', () => {
      const isExpanded = mobileMenu.classList.toggle('hidden');
      menuIcon.setAttribute('data-icon', isExpanded ? 'ph:list' : 'ph:x');
      mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
        mobileMenu.classList.add('hidden');
        menuIcon.setAttribute('data-icon', 'ph:list');
        mobileMenuButton.setAttribute('aria-expanded', 'false');
      }
    });
    
    // Close menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIcon.setAttribute('data-icon', 'ph:list');
        mobileMenuButton.setAttribute('aria-expanded', 'false');
      });
    });
  }