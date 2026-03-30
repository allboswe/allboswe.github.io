(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const c=document.documentElement,l="theme";function u(){return localStorage.getItem(l)}function d(){const e=c.getAttribute("data-theme");return e==="light"||e==="dark"?e:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function s(e){const o=document.getElementById("theme-toggle");c.setAttribute("data-theme",e),localStorage.setItem(l,e),o&&o.setAttribute("aria-pressed",String(e==="dark"))}function m(){const e=d();s(e==="dark"?"light":"dark")}function g(){const e=u();s(e==="light"||e==="dark"?e:d()),document.addEventListener("click",o=>{o.target.closest("#theme-toggle")&&m()})}function h(){return`
    <header>
      <h1 class="site-title">
        <img src="/favicon.svg" alt="Logo" class="site-logo" />
        <span>Allan Boswell</span>
      </h1>

      <div class="header-actions">
        <button id="theme-toggle" aria-label="Toggle dark mode" aria-pressed="false">
          <svg class="icon icon-moon" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path d="M12 3a9 9 0 1 0 9 9 7 7 0 0 1-9-9z" fill="currentColor"/>
          </svg>
          <svg class="icon icon-sun" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="5" fill="currentColor" />
            <g stroke="currentColor" stroke-width="2">
              <line x1="12" y1="1" x2="12" y2="4" />
              <line x1="12" y1="20" x2="12" y2="23" />
              <line x1="1" y1="12" x2="4" y2="12" />
              <line x1="20" y1="12" x2="23" y2="12" />
              <line x1="4.2" y1="4.2" x2="6.3" y2="6.3" />
              <line x1="17.7" y1="17.7" x2="19.8" y2="19.8" />
              <line x1="17.7" y1="6.3" x2="19.8" y2="4.2" />
              <line x1="4.2" y1="19.8" x2="6.3" y2="17.7" />
            </g>
          </svg>
        </button>

        <button id="menu-toggle" aria-label="Open menu" aria-expanded="false">
          <svg class="icon icon-menu" viewBox="0 0 24 24" aria-hidden="true">
            <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" stroke-width="2" />
            <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" stroke-width="2" />
            <line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" stroke-width="2" />
          </svg>
        </button>
      </div>
    </header>
  `}function p(){return`
    <footer>
      <p>Built with Vite · Hosted on GitHub Pages</p>
      <p><a href="https://github.com/allboswe" aria-label="GitHub profile">GitHub</a></p>
    </footer>
  `}function f(e){return`
    ${h()}
    <main>
      ${e}
    </main>
    ${p()}
  `}function y(){return f(`
    <section id="hero">
      <h2>Lorem ipsum dolor sit amet.</h2>
      <p>Lorem ipsum dolor sit amet.</p>
      <div>
        <button type="button">View My Projects</button>
        <button type="button">Read My Writing</button>
      </div>
    </section>

    <section id="projects">
      <h2>Projects</h2>
      <p class="section-intro">Lorem ipsum dolor sit amet.</p>
      <div class="card-list">
        <article class="card card--project">
          <div class="card-image">
            <img src="https://placehold.co/640x320" alt="Placeholder project image" />
          </div>
          <div class="card-content">
            <h3 class="card-title">Project Title</h3>
            <p class="card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum
              bibendum maximus. Vivamus at viverra tortor, sed eleifend erat.
            </p>
          </div>
          <ul class="card-tags">
            <li class="tag">python</li>
          </ul>
        </article>
      </div>
    </section>

    <section id="stories">
      <h2>Stories</h2>
      <p class="section-intro">Lorem ipsum dolor sit amet.</p>
      <div class="card-list">
        <article class="card card--story">
          <div class="card-image">
            <img src="https://placehold.co/512x800" alt="Placeholder story image" />
          </div>
          <div class="card-content">
            <h3 class="card-title">Ars Arcana</h3>
            <p class="card-description">
              Four adventurers set out on a journey that becomes something more.
            </p>
            <ul class="card-tags">
              <li class="tag">action</li>
              <li class="tag">adventure</li>
              <li class="tag">fantasy</li>
            </ul>
          </div>
        </article>
      </div>
    </section>

    <section id="about">
      <h2>About</h2>
      <p>Lorem ipsum dolor sit amet.</p>
    </section>
  `)}const v=document.querySelector("#app");v.innerHTML=y();g();
