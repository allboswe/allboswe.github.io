export function initCharacterToc() {
  const toc = document.querySelector('.character-toc');
  const toggle = document.querySelector('.character-toc-toggle');

  if (!toc || !toggle) return;

  toggle.addEventListener('click', () => {
    const isCollapsed = toc.classList.toggle('is-collapsed');

    toggle.textContent = isCollapsed ? 'show' : 'hide';
    toggle.setAttribute('aria-expanded', String(!isCollapsed));
  });
}
