export function renderSiteHeader() {
  return `
    <header>
      <h1 class="site-title">
        <img src="/favicon.svg" alt="Logo" class="site-logo" />
        <span>Allan Boswell</span>
      </h1>

      <div class="header-actions">
        <button id="theme-toggle" aria-label="Toggle dark mode" aria-pressed="false">
          <svg class="icon icon-moon" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path d="M12 3a9 9 0 1 0 9 9 7 7 0 0 1-9-9z" fill="currentColor"/>
          </svg>
          <svg class="icon icon-sun" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="5" fill="currentColor" />
            <g stroke="currentColor" stroke-width="2">
              <line x1="12" y1="1" x2="12" y2="4" />
              <line x1="12" y1="20" x2="12" y2="23" />
              <line x1="1" y1="12" x2="4" y2="12" />
              <line x1="20" y1="12" x2="23" y2="12" />
              <line x1="4.2" y1="4.2" x2="6.3" y2="6.3" />
              <line x1="17.7" y1="17.7" x2="19.8" y2="19.8" />
              <line x1="17.7" y1="6.3" x2="19.8" y2="4.2" />
              <line x1="4.2" y1="19.8" x2="6.3" y2="17.7" />
            </g>
          </svg>
        </button>

        <button id="menu-toggle" aria-label="Open menu" aria-expanded="false">
          <svg class="icon icon-menu" viewBox="0 0 24 24" aria-hidden="true">
            <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" stroke-width="2" />
            <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" stroke-width="2" />
            <line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" stroke-width="2" />
          </svg>
        </button>
      </div>
    </header>
  `;
}

export function renderSiteFooter() {
  return `
    <footer>
      <p>Built with Vite · Hosted on GitHub Pages</p>
      <p><a href="https://github.com/allboswe" aria-label="GitHub profile">GitHub</a></p>
    </footer>
  `;
}

export function renderStandardPage(content) {
  return `
    ${renderSiteHeader()}
    <main>
      ${content}
    </main>
    ${renderSiteFooter()}
  `;
}
