export function renderCharacterHeader(character, currentPage) {
  return `
    <div class="character-title-block">
      <p class="character-kicker">${character.series} / ${character.category}</p>
      <h1>${character.name}</h1>

      <nav class="character-subnav" aria-label="Character sections">
        <a href="/pink-guy/characters/${character.slug}/" ${
          currentPage === 'overview' ? 'aria-current="page"' : ''
        }>Overview</a>

        <a href="#" class="is-disabled" aria-disabled="true">History</a>

        <a href="/pink-guy/characters/${character.slug}/gallery/" ${
          currentPage === 'gallery' ? 'aria-current="page"' : ''
        }>Gallery</a>
      </nav>
    </div>
  `;
}
