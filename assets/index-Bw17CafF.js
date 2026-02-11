(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const s=document.documentElement,a="theme";function d(){return localStorage.getItem(a)}function l(i){const r=document.getElementById("theme-toggle");i?(s.setAttribute("data-theme",i),localStorage.setItem(a,i)):(s.removeAttribute("data-theme"),localStorage.removeItem(a)),r&&r.setAttribute("aria-pressed",i==="dark")}function u(){s.getAttribute("data-theme")=="dark"?l("light"):l("dark")}function m(){const i=d();l(i),document.addEventListener("click",r=>{r.target.closest("#theme-toggle")&&u()})}document.querySelector("#app").innerHTML=`
  <header>
    <h1>Allan Boswell</h1>

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
          </svg
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

  <main>
    <section id="hero">
      <h2>Lorem ipsum dolor sit amet.</h2>
      <p>Lorem ipsum dolor sit amet.</p>
      <div>
        <button>View My Projects</button>
        <button>Read My Writing</button>
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
            <p class="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum bibendum maximus. Vivamus at viverra tortor, sed eleifend erat.</p>
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
            <h3 class="card-title">Story Title</h3>
            <p class="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla feugiat metus, a hendrerit tellus viverra in. Mauris tempus tortor sit amet sagittis ullamcorper. Aenean. </p>
            <ul class="card-tags">
              <li class="tag">adventure</li>
            </ul>
          </div>
        </article>
      </div>
    </section>

    <section id="about">
      <h2>About</h2>
      <p>Lorem ipsum dolor sit amet.</p>
    </section>
  </main>

  <footer>
    <p>Built with Vite · Hosted on GitHub Pages</p>
    <p><a href="#" aria-label="GitHub profile">GitHub</a></p>
  </footer>
`;m();
