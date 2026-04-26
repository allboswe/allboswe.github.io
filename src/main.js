import './styles/index.css';
import { initGalleryLightbox } from './libraries/gallery-lightbox';
import { initSpoilerToggle } from './libraries/spoilers';
import { initThemeToggle } from './libraries/theme';
import { renderHomePage } from './pages/home';
import { renderLondonPage } from './pages/london';
import { renderLondonGalleryPage } from './pages/london-gallery';

const app = document.querySelector('#app');
const redirectPath = sessionStorage.getItem('redirectPath');

if (redirectPath) {
  sessionStorage.removeItem('redirectPath');
  window.history.replaceState(null, '', redirectPath);
}

const path = window.location.pathname.replace(/\/$/, '') || '/';

if (path === '/pink_guy/characters/london') {
  app.innerHTML = renderLondonPage();
} else if (path === '/pink_guy/characters/london/gallery') {
  app.innerHTML = renderLondonGalleryPage();
} else {
  app.innerHTML = renderHomePage();
}

initThemeToggle();
initSpoilerToggle();
initGalleryLightbox();

/* Menu Logic */

const menuToggle = document.querySelector('#menu-toggle');
const menu = document.querySelector('#menu');
const menuClose = document.querySelector('#menu-close');
const menuBackdrop = document.querySelector('.menu-backdrop');

function openMenu() {
  if (!menu || !menuToggle) return;

  menu.classList.add('is-open');
  menu.setAttribute('aria-hidden', 'false');
  menuToggle.setAttribute('aria-expanded', 'true');
  document.body.classList.add('menu-open');
}

function closeMenu() {
  if (!menu || !menuToggle) return;

  menu.classList.remove('is-open');
  menu.setAttribute('aria-hidden', 'true');
  menuToggle.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
}

if (menuToggle && menu && menuClose && menuBackdrop) {
  menuToggle.addEventListener('click', openMenu);
  menuClose.addEventListener('click', closeMenu);
  menuBackdrop.addEventListener('click', closeMenu);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.classList.contains('is-open')) {
      closeMenu();
    }
  });
}
