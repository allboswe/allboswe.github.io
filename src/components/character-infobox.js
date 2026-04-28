function renderInfoboxRow(row) {
  if (row.spoiler) {
    return `
      <div>
        <dt>${row.label}</dt>
        <dd>
          <button class="spoiler-reveal" type="button" data-spoiler-text="${row.revealedValue}">
            ${row.buttonText}
          </button>
        </dd>
      </div>
    `;
  }

  const className = row.className ? ` class="${row.className}"` : '';

  return `
    <div>
      <dt>${row.label}</dt>
      <dd${className}>${row.value}</dd>
    </div>
  `;
}

function renderInfoboxGroup(group) {
  return `
    <dl class="character-facts">
      <div class="character-facts-section">
        <dt>${group.heading}</dt>
      </div>

      ${group.rows.map(renderInfoboxRow).join('')}
    </dl>
  `;
}

export function renderCharacterInfobox(character) {
  const { image, groups } = character.infobox;

  return `
    <aside class="character-infobox" aria-label="${character.name} infobox">
      <div class="character-infobox-card">
        <div class="character-infobox-header">
          <h2>${character.name}</h2>
        </div>

        <figure class="character-infobox-figure">
          <div class="character-infobox-image-frame">
            <img
              src="${image.src}"
              srcset="${image.srcset}"
              sizes="${image.sizes}"
              alt="${image.alt}"
              class="character-infobox-image"
              loading="lazy"
              decoding="async"
            />
          </div>
        </figure>

        ${groups.map(renderInfoboxGroup).join('')}
      </div>
    </aside>
  `;
}
