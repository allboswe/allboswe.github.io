import { renderStandardPage } from '../components/layout';
import { renderCharacterHeader } from '../components/character-header';
import { renderCharacterGallery } from '../components/character-gallery';
import { renderCharacterInfobox } from '../components/character-infobox';
import { renderCharacterGalleryLightbox } from '../components/character-gallery-lightbox';
import { london } from '../data/characters';

export function renderLondonGalleryPage() {
  return renderStandardPage(`
    <section class="character-page">
      <div class="character-shell">
        <article class="character-article">
          ${renderCharacterHeader(london, 'gallery')}
          ${renderCharacterGallery(london)}
        </article>
        ${renderCharacterInfobox(london)}
      </div>
      ${renderCharacterGalleryLightbox()}
    </section>
  `);
}
