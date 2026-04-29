function renderGalleryTabs(character) {
  const name = `${character.slug}-gallery-tabs`;

  const inputs = character.gallery.tabs
    .map((tab, index) => {
      return `
        <input
          type="radio"
          name="${name}"
          id="${character.slug}-${tab.id}"
          ${index === 0 ? 'checked' : ''}
        />
      `;
    })
    .join('');

  const labels = character.gallery.tabs
    .map((tab) => {
      return `<label for="${character.slug}-${tab.id}">${tab.label}</label>`;
    })
    .join('');

  return { inputs, labels };
}

function renderGalleryPanels(character) {
  return character.gallery.tabs
    .map((tab) => {
      const images = tab.images
        .map(
          (img) => `
            <figure class="gallery-image-card">
              <img
                src="${img.src}"
                srcset="${img.srcset}"
                sizes="${img.sizes}"
                alt="${img.alt}"
                class="gallery-image"
                data-full-image="${img.fullImage}"
                loading="lazy"
                decoding="async"
              />
              <figcaption>${img.caption}</figcaption>
            </figure>
          `
        )
        .join('');

      const panelClass = `gallery-${tab.id.replace('-art', '')}-panel`;

      return `
        <div class="gallery-tab-panel ${panelClass}">
          ${images}
        </div>
      `;
    })
    .join('');
}

export function renderCharacterGallery(character) {
  const { inputs, labels } = renderGalleryTabs(character);
  const panels = renderGalleryPanels(character);

  return `
    <section class="character-section character-gallery-section">
      <div class="gallery-category-header">
        <h2>${character.gallery.category}</h2>
      </div>

      <div class="gallery-tabs">
        ${inputs}

        <div class="gallery-tab-list" aria-label="Gallery categories">
          ${labels}
        </div>

        ${panels}
      </div>
    </section>
  `;
}
