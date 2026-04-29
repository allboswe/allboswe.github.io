export function renderCharacterTOC(character) {
  const items = character.sections
    .map(
      (section) =>
        `<li><a href="#${section.id}">${section.title}</a></li>`
    )
    .join('');

  return `
    <nav class="character-toc is-collapsed" aria-label="Table of contents">
      <div class="character-toc-header">
        <h2 class="character-toc-title">
          <span class="toc-icon" aria-hidden="true">
            <svg viewBox="0 0 16 16" width="14" height="14">
              <circle cx="2" cy="3" r="1" fill="currentColor"></circle>
              <line x1="5" y1="3" x2="14" y2="3" stroke="currentColor" stroke-width="1.5"></line>

              <circle cx="2" cy="8" r="1" fill="currentColor"></circle>
              <line x1="5" y1="8" x2="14" y2="8" stroke="currentColor" stroke-width="1.5"></line>

              <circle cx="2" cy="13" r="1" fill="currentColor"></circle>
              <line x1="5" y1="13" x2="14" y2="13" stroke="currentColor" stroke-width="1.5"></line>
            </svg>
          </span>
          Contents
        </h2>
        <button class="character-toc-toggle" type="button" aria-expanded="false">
          show
        </button>
      </div>

      <ol class="character-toc-list">
        ${items}
      </ol>
    </nav>
  `;
}
