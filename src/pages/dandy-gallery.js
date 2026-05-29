import { renderStandardPage } from '../components/layout';
import { renderCharacterHeader } from '../components/character-header';
import { renderCharacterGallery } from '../components/character-gallery';
import { renderCharacterInfobox } from '../components/character-infobox';
import { renderCharacterGalleryLightbox } from '../components/character-gallery-lightbox';
import { dandy } from '../data/characters';

export function renderDandyGalleryPage() {
  return renderStandardPage(`
    <section class="character-page">
      <div class="character-shell">
        <article class="character-article">
          ${renderCharacterHeader(dandy, 'gallery')}
          ${renderCharacterGallery(dandy)}
        </article>
        ${renderCharacterInfobox(dandy)}
      </div>
      ${renderCharacterGalleryLightbox()}
    </section>
  `);
}
