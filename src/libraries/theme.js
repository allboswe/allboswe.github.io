const root = document.documentElement;
const STORAGE_KEY = 'theme';

function getStoredTheme() {
  return localStorage.getItem(STORAGE_KEY);
}

function getCurrentTheme() {
  const manualTheme = root.getAttribute('data-theme');

  if (manualTheme === 'light' || manualTheme === 'dark') {
    return manualTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

function applyTheme(theme) {
  const button = document.getElementById('theme-toggle');

  root.setAttribute('data-theme', theme);
  localStorage.setItem(STORAGE_KEY, theme);

  if (button) {
    button.setAttribute('aria-pressed', String(theme === 'dark'));
  }
}

function toggleTheme() {
  const current = getCurrentTheme();
  applyTheme(current === 'dark' ? 'light' : 'dark');
}

function initThemeToggle() {
  const savedTheme = getStoredTheme();

  if (savedTheme === 'light' || savedTheme === 'dark') {
    applyTheme(savedTheme);
  } else {
    applyTheme(getCurrentTheme());
  }

  document.addEventListener('click', (event) => {
    const button = event.target.closest('#theme-toggle');

    if (button) {
      toggleTheme();
    }
  });
}

export { initThemeToggle };
