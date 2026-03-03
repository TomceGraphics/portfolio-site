export function createProjectCard(project) {
  const card = document.createElement('article');

  // Base classes for the card shell
  card.className = "group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl hover:border-brand-500/30 dark:hover:border-brand-500/30 transition-all duration-300";

  // Logic to determine primary action (Case Study vs Live Link)
  const hasCaseStudy = project.caseStudyPath && project.caseStudyPath !== 'null';
  const hasLive = project.liveUrl && project.liveUrl !== 'null';
  const hasRepo = project.repoUrl && project.repoUrl !== 'null';

  // Image handling (fallback if cover is missing)
  const imageSrc = project.cover || 'https://placehold.co/600x400/1e293b/ffffff?text=No+Image';

  card.innerHTML = `
    <!-- Image Section with Overlay -->
    <div class="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
      <img src="${imageSrc}" alt="${project.title}" loading="lazy" 
        class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      >
      <!-- Type Badge -->
      <div class="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-700 text-xs font-mono font-medium uppercase tracking-wider text-slate-600 dark:text-slate-300 shadow-sm">
        ${project.type === 'client' ? 'Client Work' : 'R&D / Personal'}
      </div>
      
      <!-- Quick Actions Overlay (decorative labels only) -->
      <div class="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 px-4 pointer-events-none">
        ${hasCaseStudy ? `
          <span class="px-5 py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/25 text-white font-semibold text-sm flex items-center gap-2 shadow-sm">
            <span class="iconify" data-icon="ph:book-open-duotone" data-width="18"></span>
            Read Case Study
          </span>
        ` : ''}
        ${hasLive && !hasCaseStudy ? `
          <span class="px-5 py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/25 text-white font-semibold text-sm flex items-center gap-2 shadow-sm">
            <span class="iconify" data-icon="ph:arrow-square-out-duotone" data-width="18"></span>
            Visit Site
          </span>
        ` : ''}
        ${!hasCaseStudy && !hasLive && hasRepo ? `
          <span class="px-5 py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/25 text-white font-semibold text-sm flex items-center gap-2 shadow-sm">
            <span class="iconify" data-icon="ph:github-logo-duotone" data-width="18"></span>
            Open Repo
          </span>
        ` : ''}
      </div>
    </div>

    <!-- Content Section -->
    <div class="flex flex-col flex-grow p-6 sm:p-8 border-t border-slate-100 dark:border-slate-800">
      <div class="flex items-start justify-between gap-4 mb-3">
        <h3 class="text-xl font-bold text-slate-900 dark:text-white leading-tight group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
          ${project.title}
        </h3>
        <div class="flex gap-2 text-slate-400">
           ${hasRepo ? `<a href="${project.repoUrl}" target="_blank" class="repo-link relative z-10 hover:text-brand-500 transition-colors" title="View Code"><span class="iconify" data-icon="ph:github-logo-duotone" data-width="20"></span></a>` : ''}
           ${project.openSource ? `<span class="text-brand-500" title="Open Source"><span class="iconify" data-icon="ph:git-fork-duotone" data-width="20"></span></span>` : ''}
        </div>
      </div>

      <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
        ${project.description}
      </p>

      <div class="mt-auto">
        <div class="flex flex-wrap gap-2">
          ${project.tags.slice(0, 4).map(tag => `
            <span class="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[10px] sm:text-xs font-mono text-slate-600 dark:text-slate-300">
              ${tag}
            </span>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  // Determine primary navigation URL (case study > live > repo)
  const primaryUrl = hasCaseStudy ? project.caseStudyPath : (hasLive ? project.liveUrl : (hasRepo ? project.repoUrl : null));
  const openInNewTab = !hasCaseStudy; // case study stays in-tab; everything else opens a new tab

  if (primaryUrl) {
    card.style.cursor = 'pointer';
    card.addEventListener('click', (e) => {
      // Allow repo link to handle itself
      if (e.target.closest('.repo-link')) return;
      if (openInNewTab) {
        window.open(primaryUrl, '_blank', 'noopener,noreferrer');
      } else {
        window.location.href = primaryUrl;
      }
    });
  }

  return card;
}