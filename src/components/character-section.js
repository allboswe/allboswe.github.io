function renderSection(section) {
  return `
    <section class="character-section" id="${section.id}">
      <h2>${section.title}</h2>
      ${section.content}
    </section>
  `;
}

export function renderCharacterSection(character) {
  return character.sections.map(renderSection).join('');
}
