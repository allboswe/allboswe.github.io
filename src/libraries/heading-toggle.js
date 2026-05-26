export function initHeadingToggle() {
  const toggles = document.querySelectorAll('.heading-toggle');

  toggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const block = toggle.closest('.heading-block');
      if (!block) return;

      const isCollapsed = block.classList.toggle('is-collapsed');

      toggle.setAttribute('aria-expanded', String(!isCollapsed));
    });
  });
}
