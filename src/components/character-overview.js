export function renderCharacterOverview(character) {
  return `
    <section class="character-section" id="overview">
      <p>${character.overview}</p>
    </section>
  `;
}
