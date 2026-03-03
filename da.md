Navbar.js
```
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
```

ProfuleCard.js
```
export function renderProfileCard(container, profile) {
  container.innerHTML = `
    <div class="flex items-start gap-4">
      <img src="/assets/img/profilePic.png" alt="${profile.name} avatar" class="h-16 w-16 rounded-xl ring-2 ring-brand-200 dark:ring-brand-800 object-cover" />
      <div>
        <h1 class="text-2xl font-semibold tracking-tight">${profile.name}</h1>
        <p class="text-brand-600 dark:text-brand-400 font-medium">${profile.role}</p>
      </div>
    </div>
    <p class="mt-4 text-slate-600 dark:text-slate-300">${profile.bio}</p>
    <div class="mt-4 flex flex-wrap gap-3">
      ${profile.links.map(link => `
        <a href="${link.href}" class="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-slate-300/70 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
          <span class="iconify" data-icon="${link.icon}"></span>
          <span class="text-sm">${link.label}</span>
        </a>
      `).join('')}
    </div>
    <div class="mt-5 flex flex-wrap gap-2">
      ${profile.capabilities.map(cap => `
        <span class=\"inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-brand-200 border border-brand-100/70 dark:border-brand-800 text-xs\">
          <span class=\"iconify\" data-icon=\"ph:check-circle-duotone\"></span>
          ${cap}
        </span>
      `).join('')}
    </div>
  `;
}
```
projectCard.js
```
export function createProjectCard(project) {
  const statusChips = [
    project.openSource ? '<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-200 border border-emerald-100/70 dark:border-emerald-800"><span class="iconify" data-icon="mdi:source-branch"></span>OS</span>' : '',
    project.live ? '<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] bg-accent-50 text-accent-700 dark:bg-accent-900/30 dark:text-accent-200 border border-accent-100/70 dark:border-accent-800"><span class="iconify" data-icon="mdi:lightning-bolt"></span>Live</span>' : ''
  ].filter(Boolean).join('');

  const hasRepoUrl = typeof project.repoUrl === 'string' && project.repoUrl.trim().length > 0;
  const hasLiveUrl = project.live === true && typeof project.liveUrl === 'string' && project.liveUrl.trim().length > 0;

  const actions = (hasRepoUrl || hasLiveUrl) ? `
    <div class="mt-3 flex items-center gap-2">
      ${hasRepoUrl ? `<a href="${project.repoUrl}" target="_blank" rel="noreferrer" class="inline-flex items-center gap-1 text-sm text-slate-600 hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400 transition-colors"><span class=\"iconify\" data-icon=\"mdi:github\"></span>Repo</a>` : ''}
      ${hasLiveUrl ? `<a href="${project.liveUrl}" target="_blank" rel="noreferrer" class="inline-flex items-center gap-1 text-sm text-slate-600 hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400 transition-colors"><span class=\"iconify\" data-icon=\"mdi:external-link\"></span>Live</a>` : ''}
    </div>
  ` : '';

  const tagChips = project.tags.map(t => `<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700">${t}</span>`).join('');

  const clickable = Boolean(project.caseStudyPath);
  const isPersonal = project.type === 'personal';
  const cardPadding = isPersonal ? 'p-3' : 'p-4';
  const titleClass = isPersonal ? 'text-sm font-semibold leading-snug' : 'font-semibold leading-tight';
  const borderClass = isPersonal ? 'border-slate-200/60 dark:border-slate-800/80' : 'border-slate-200/70 dark:border-slate-800';
  const bgClass = isPersonal ? 'bg-white/50 dark:bg-slate-900/50' : 'bg-white/60 dark:bg-slate-900/60';
  const hoverClass = isPersonal ? 'hover:shadow-md' : 'hover:shadow-lg';
  const transformHover = isPersonal ? '' : 'hover:-translate-y-0.5';
  const imageAspect = isPersonal ? 'aspect-[4/3]' : 'aspect-[16/9]';

  const imageBlock = project.cover
    ? `<img src="${project.cover}" alt="${project.title} cover" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"/>`
    : `<div class="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center">
         <span class="iconify text-slate-400" data-icon="ph:image-duotone" data-width="32" data-height="32"></span>
       </div>`;

  const personalActions = (isPersonal && (hasRepoUrl || hasLiveUrl)) ? `
    <div class="mt-3 flex items-center gap-2">
      ${hasLiveUrl ? `<a href="${project.liveUrl}" target="_blank" rel="noreferrer" class="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-brand-600 text-white hover:bg-brand-700 text-xs transition-colors"><span class=\"iconify\" data-icon=\"mdi:external-link\"></span>Live</a>` : ''}
      ${hasRepoUrl ? `<a href="${project.repoUrl}" target="_blank" rel="noreferrer" class="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md border border-slate-300/70 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900 text-xs transition-colors"><span class=\"iconify\" data-icon=\"mdi:github\"></span>Repo</a>` : ''}
    </div>
  ` : '';

  const html = `
    <article class="group overflow-hidden rounded-2xl border ${borderClass} ${bgClass} shadow-subtle ${hoverClass} transition-[box-shadow,transform] ${clickable ? `cursor-pointer ${transformHover}` : ''}">
      <div class="${imageAspect} overflow-hidden">
        ${imageBlock}
      </div>
      <div class="${cardPadding}">
        <div class="flex items-center justify-between gap-2">
          <h3 class="${titleClass}">${project.title}</h3>
          <div class="flex items-center gap-1">${statusChips}</div>
        </div>
        <p class="mt-1 ${isPersonal ? 'text-xs' : 'text-sm'} text-slate-600 dark:text-slate-300">${project.description}</p>
        <div class="mt-2 ${isPersonal ? 'gap-1.5' : 'gap-2'} flex flex-wrap">${tagChips}</div>
        ${isPersonal ? personalActions : actions}
      </div>
    </article>
  `;

  const wrapper = document.createElement('div');
  wrapper.innerHTML = html.trim();
  const card = wrapper.firstElementChild;

  if (clickable) {
    card.addEventListener('click', (e) => {
      const target = e.target;
      if (target.closest('a')) return; // allow inner links
      const path = encodeURI(project.caseStudyPath);
      window.location.assign(path);
    });
  }

  return card;
}
```