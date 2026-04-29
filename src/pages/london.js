import { renderStandardPage } from '../components/layout';
import { renderCharacterTOC } from '../components/character-toc';
import { renderCharacterHeader } from '../components/character-header';
import { renderCharacterInfobox } from '../components/character-infobox';
import { renderCharacterSection } from '../components/character-section';
import { renderCharacterOverview } from '../components/character-overview';
import { london } from '../data/characters';

export function renderLondonPage() {
  return renderStandardPage(`
    <section class="character-page">
      <div class="character-shell">
        <article class="character-article">
          ${renderCharacterHeader(london, 'overview')}
          ${renderCharacterOverview(london)}
          ${renderCharacterTOC(london)}
          ${renderCharacterSection(london)}
          </article>
        ${renderCharacterInfobox(london)}
      </div>
    </section>
  `);
}
