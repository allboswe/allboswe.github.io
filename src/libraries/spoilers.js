export function initSpoilerToggle() {
  const spoilerButtons = document.querySelectorAll('.spoiler-reveal');

  spoilerButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const spoilerText = button.dataset.spoilerText;

      if (!spoilerText) return;

      button.textContent = spoilerText;
      button.disabled = true;
      button.classList.add('is-revealed');
    });
  });
}
