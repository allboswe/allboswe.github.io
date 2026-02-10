const root = document.documentElement;
const STORAGE_KEY = 'theme';

function getStoredTheme() {
    return localStorage.getItem(STORAGE_KEY);
}

function applyTheme(theme) {
    const button = document.getElementById('theme-toggle');

    if (theme) {
        root.setAttribute("data-theme", theme);
        localStorage.setItem(STORAGE_KEY, theme);
    } else {
        root.removeAttribute("data-theme");
        localStorage.removeItem(STORAGE_KEY);
    }

    if (button) {
        button.setAttribute("aria-pressed", theme === "dark")
    }
}

function toggleTheme() {
    const current = root.getAttribute("data-theme");

    if (current == "dark") {
        applyTheme("light");
    } else {
        applyTheme("dark")
    }
}

function initThemeToggle() {
    const savedTheme = getStoredTheme();
    applyTheme(savedTheme);
    
    document.addEventListener('click', (event) => {
        const button = event.target.closest('#theme-toggle');

        if (button) {
            toggleTheme();
        }
    });
}

export { initThemeToggle };
