import './styles/index.css';
import { initThemeToggle } from './libraries/theme';
import { renderHomePage } from './pages/home';

const app = document.querySelector('#app');

app.innerHTML = renderHomePage();

initThemeToggle();
