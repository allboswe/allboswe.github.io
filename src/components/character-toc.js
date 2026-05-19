export function renderCharacterTOC(character) {
  const items = character.sections
    .map((section) => {
      let subItems = '';

      if (section.id === 'powers') {
        const parser = new DOMParser();
        const doc = parser.parseFromString(section.content, 'text/html');

        const h3s = [...doc.querySelectorAll('h3')];

        subItems = `
          <ol>
            ${h3s
              .map((h3) => {
                const id = h3.textContent
                  .toLowerCase()
                  .replace(/\s+/g, '-');

                return `
                  <li>
                    <a href="#${id}">
                      ${h3.textContent}
                    </a>
                  </li>
                `;
              })
              .join('')}
          </ol>
        `;
      }

      return `
        <li>
          <a href="#${section.id}">
            ${section.title}
          </a>

          ${subItems}
        </li>
      `;
    })
    .join('');

  return `
    <nav class="character-toc" aria-label="Table of contents">
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

        <button
          class="character-toc-toggle"
          type="button"
          aria-expanded="true"
        >
          hide
        </button>
      </div>

      <ol class="character-toc-list">
        ${items}
      </ol>
    </nav>
  `;
}
