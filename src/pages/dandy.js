import { renderStandardPage } from '../components/layout';
import { renderCharacterTOC } from '../components/character-toc';
import { renderCharacterHeader } from '../components/character-header';
import { renderCharacterInfobox } from '../components/character-infobox';
import { renderCharacterSection } from '../components/character-section';
import { renderCharacterOverview } from '../components/character-overview';
import { dandy } from '../data/characters';

export function renderDandyPage() {
  return renderStandardPage(`
    <section class="character-page">
      <div class="character-shell">
        <article class="character-article">
          ${renderCharacterHeader(dandy, 'overview')}
          ${renderCharacterOverview(dandy)}
          ${renderCharacterTOC(dandy)}
          ${renderCharacterSection(dandy)}
          </article>
        ${renderCharacterInfobox(dandy)}
      </div>
    </section>
  `);
}
