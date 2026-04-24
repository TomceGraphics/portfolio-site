export function initProjectModal() {
  if (document.getElementById('projectModal')) return;

  const modalOverlay = document.createElement('div');
  modalOverlay.id = 'projectModal';
  // Modal overlay is fixed, covers screen, doesn't scroll itself.
  modalOverlay.className = "fixed inset-0 z-50 hidden bg-slate-900/80 backdrop-blur-sm w-full h-full p-4 sm:p-6 md:p-12 items-center justify-center";

  // The modal wrapper has max height (90vh) and handles scroll internally (overflow-hidden wrapper, flex-1 overflow-y-auto body)
  modalOverlay.innerHTML = `
    <div class="relative flex flex-col w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-2xl rounded-2xl md:rounded-3xl overflow-hidden">
      
      <!-- Modal Header (Sticky/Fixed to top) -->
      <div class="flex-shrink-0 flex items-start justify-between border-b border-slate-200 dark:border-slate-800 p-6 sm:p-8 bg-white dark:bg-slate-950 z-10">
        <div class="flex items-center gap-6">
          <div class="flex-shrink-0 w-16 h-16 bg-brand-400 dark:bg-brand-500 flex items-center justify-center text-2xl font-bold text-slate-900 rounded-xl shadow-inner">
            &gt;_
          </div>
          <div>
            <span class="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase mb-2 block">Project Profile</span>
            <h2 id="modalTitle" class="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-slate-900 dark:text-white"></h2>
          </div>
        </div>
        <button id="closeModalBtn" class="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
          <span class="iconify" data-icon="ph:x-bold" data-width="24"></span>
        </button>
      </div>

      <!-- Modal Body (Scrollable container) -->
      <div class="flex-1 overflow-y-auto p-6 sm:p-8 md:p-12">
        <!-- Markdown Content -->
        <div id="modalMarkdown" class="prose prose-slate dark:prose-invert max-w-none 
          prose-headings:font-bold prose-headings:tracking-widest prose-headings:uppercase
          prose-h1:text-xl prose-h2:text-lg prose-h3:text-sm prose-h3:text-brand-600 dark:prose-h3:text-brand-400 
          prose-p:text-slate-600 dark:prose-p:text-slate-400 prose-p:leading-relaxed
          prose-strong:text-slate-900 dark:prose-strong:text-slate-200 
          prose-blockquote:border-l-4 prose-blockquote:border-brand-500 prose-blockquote:bg-slate-50 dark:prose-blockquote:bg-slate-800/30 prose-blockquote:py-3 prose-blockquote:px-6 prose-blockquote:italic prose-blockquote:my-6 prose-blockquote:rounded-r-lg
          prose-ul:list-disc prose-ol:list-decimal prose-li:my-1 prose-li:marker:text-slate-400
          prose-table:w-full prose-table:border-collapse prose-table:my-8 prose-table:text-sm
          prose-th:border prose-th:border-slate-200 dark:prose-th:border-slate-800 prose-th:p-4 prose-th:bg-slate-50 dark:prose-th:bg-slate-900/50 prose-th:text-left prose-th:text-slate-500 prose-th:font-semibold
          prose-td:border prose-td:border-slate-200 dark:prose-td:border-slate-800 prose-td:p-4 prose-td:text-slate-600 dark:prose-td:text-slate-300
          prose-a:text-brand-600 dark:prose-a:text-brand-500 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
          prose-code:text-brand-600 dark:prose-code:text-brand-400 prose-code:px-1.5 prose-code:py-0.5 prose-code:bg-slate-100 dark:prose-code:bg-slate-800 prose-code:rounded prose-code:font-mono prose-code:text-[0.8em] prose-code:font-medium before:prose-code:content-none after:prose-code:content-none
          prose-pre:bg-slate-950 prose-pre:border prose-pre:border-slate-800 prose-pre:text-slate-300 prose-pre:p-5 prose-pre:rounded-xl prose-pre:overflow-x-auto prose-pre:shadow-inner
          prose-img:rounded-xl prose-img:border prose-img:border-slate-200 dark:prose-img:border-slate-800 prose-img:shadow-lg prose-img:w-full prose-img:my-8
          prose-hr:border-slate-200 dark:prose-hr:border-slate-800 prose-hr:my-8
          mb-12 font-mono text-sm">
          <!-- Rendered MD goes here -->
        </div>

        <!-- Metadata & Tech Stack Section -->
        <div class="border-t border-slate-200 dark:border-slate-800 pt-8 mt-8">
          <h3 class="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase mb-6">Metadata</h3>
          <div class="space-y-4 mb-10 font-mono text-sm">
            <div class="flex justify-between items-center border-b border-slate-100 dark:border-slate-800/60 pb-3">
              <span class="text-slate-500">IDENTIFIER</span>
              <span id="modalIdentifier" class="text-slate-900 dark:text-slate-300"></span>
            </div>
            <div class="flex justify-between items-center border-b border-slate-100 dark:border-slate-800/60 pb-3">
              <span class="text-slate-500">VERSION</span>
              <span id="modalVersion" class="text-slate-900 dark:text-slate-300"></span>
            </div>
            <div class="flex justify-between items-center border-b border-slate-100 dark:border-slate-800/60 pb-3">
              <span class="text-slate-500">STATUS</span>
              <span id="modalStatus" class="font-medium text-brand-600 dark:text-brand-400"></span>
            </div>
            <div class="flex justify-between items-center border-b border-slate-100 dark:border-slate-800/60 pb-3">
              <span class="text-slate-500">LOGGED</span>
              <span id="modalDate" class="text-slate-900 dark:text-slate-300"></span>
            </div>
          </div>

          <h3 class="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase mb-4">Tech Stack</h3>
          <div id="modalTags" class="flex flex-wrap gap-2 mb-10">
            <!-- Tags go here -->
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-col gap-3">
            <a id="modalLiveBtn" href="#" target="_blank" class="hidden w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-sm tracking-widest uppercase text-center rounded-xl hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors flex items-center justify-center gap-2">
              <span class="iconify" data-icon="ph:arrow-square-out-bold" data-width="18"></span> View Live Prototype
            </a>
            <a id="modalRepoBtn" href="#" target="_blank" class="hidden w-full py-4 bg-transparent border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-bold text-sm tracking-widest uppercase text-center rounded-xl hover:border-slate-400 dark:hover:border-slate-500 transition-colors flex items-center justify-center gap-2">
              <span class="iconify" data-icon="ph:git-fork-bold" data-width="18"></span> Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modalOverlay);

  const closeModal = () => {
    modalOverlay.classList.add('hidden');
    modalOverlay.classList.remove('flex'); // using flex to center
    document.body.style.overflow = 'auto'; // allow background scroll again
  };

  document.getElementById('closeModalBtn').addEventListener('click', closeModal);

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
}

export async function openProjectModal(project) {
  if (typeof marked === 'undefined') {
    console.error("marked.js is missing! Ensure it is loaded in your HTML.");
    return;
  }

  const modal = document.getElementById('projectModal');
  if (!modal) return;

  // Header Title
  document.getElementById('modalTitle').textContent = project.title;

  // Configure marked custom renderer to automatically resolve image paths safely from /labs/
  const renderer = new marked.Renderer();
  renderer.image = function (href, title, text) {
    let _href, _title, _text;
    if (typeof href === 'object' && href !== null) {
      _href = href.href;
      _title = href.title;
      _text = href.text;
    } else {
      _href = href;
      _title = title;
      _text = text;
    }

    let cleanHref = _href;
    // If the path doesn't have http or a leading slash, prepend root slash so assets/ works globally
    if (cleanHref && typeof cleanHref === 'string' && !cleanHref.startsWith('http') && !cleanHref.startsWith('/') && !cleanHref.startsWith('data:')) {
      cleanHref = '/' + cleanHref;
    }
    return `<img src="${cleanHref}" alt="${_text || ''}" title="${_title || ''}" loading="lazy"/>`;
  };

  // Set options for Marked
  marked.setOptions({
    gfm: true,
    breaks: true,
    renderer: renderer
  });

  const markdownContainer = document.getElementById('modalMarkdown');
  
  // Set Loading State
  markdownContainer.innerHTML = '<p class="text-slate-500 italic animate-pulse">Loading documentation...</p>';

  // Metadata
  document.getElementById('modalIdentifier').textContent = project.identifier || project.title.toLowerCase().replace(/\s+/g, '-');
  document.getElementById('modalVersion').textContent = project.version || 'v1.0.0';
  document.getElementById('modalStatus').textContent = project.status || 'Active';
  document.getElementById('modalDate').textContent = project.date || 'N/A';

  // Tags
  document.getElementById('modalTags').innerHTML = project.tags.map(tag =>
    `<span class="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded text-xs font-mono text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900">${tag}</span>`
  ).join('');

  // Buttons
  const liveBtn = document.getElementById('modalLiveBtn');
  if (project.liveUrl && project.liveUrl !== 'null') {
    liveBtn.href = project.liveUrl;
    liveBtn.classList.remove('hidden');
    liveBtn.classList.add('flex');
  } else {
    liveBtn.classList.add('hidden');
    liveBtn.classList.remove('flex');
  }

  const repoBtn = document.getElementById('modalRepoBtn');
  if (project.repoUrl && project.repoUrl !== 'null') {
    repoBtn.href = project.repoUrl;
    repoBtn.classList.remove('hidden');
    repoBtn.classList.add('flex');
  } else {
    repoBtn.classList.add('hidden');
    repoBtn.classList.remove('flex');
  }

  // Display Modal so user sees the loading state
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';

  // Fetch Markdown file
  try {
    if (project.markdownFile) {
      const response = await fetch(project.markdownFile);
      if (response.ok) {
        const text = await response.text();
        markdownContainer.innerHTML = marked.parse(text);
      } else {
        markdownContainer.innerHTML = `<p class="text-red-500">Failed to load documentation (HTTP ${response.status}).</p>`;
      }
    } else if (project.markdownContent) {
      // Fallback just in case some old objects still use the string
      markdownContainer.innerHTML = marked.parse(project.markdownContent);
    } else {
      markdownContainer.innerHTML = '<p class="text-slate-500">No documentation available.</p>';
    }

    // Process Mermaid Diagrams if available
    if (typeof mermaid !== 'undefined') {
      const mermaidNodes = markdownContainer.querySelectorAll('code.language-mermaid');
      let hasMermaid = false;
      
      mermaidNodes.forEach((node, index) => {
        hasMermaid = true;
        const pre = node.parentElement;
        if (pre && pre.tagName === 'PRE') {
          const div = document.createElement('div');
          div.className = 'mermaid flex justify-center w-full my-8 bg-transparent border-none shadow-none';
          div.textContent = node.textContent;
          pre.replaceWith(div);
        }
      });
      
      if (hasMermaid) {
        // Run mermaid on newly created divs
        try {
          if (mermaid.run) {
            await mermaid.run({ querySelector: '.mermaid' });
          } else {
            mermaid.init(undefined, '.mermaid');
          }
        } catch (e) {
          console.error("Mermaid parsing error:", e);
        }
      }
    }
  } catch (error) {
    markdownContainer.innerHTML = '<p class="text-red-500">Error fetching documentation.</p>';
    console.error('Error fetching markdown:', error);
  }
}
