(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();function y(){document.querySelectorAll(".spoiler-reveal").forEach(a=>{a.addEventListener("click",()=>{const n=a.dataset.spoilerText;n&&(a.textContent=n,a.disabled=!0,a.classList.add("is-revealed"))})})}const v=document.documentElement,f="theme";function w(){return localStorage.getItem(f)}function g(){const e=v.getAttribute("data-theme");return e==="light"||e==="dark"?e:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function d(e){const a=document.getElementById("theme-toggle");v.setAttribute("data-theme",e),localStorage.setItem(f,e),a&&a.setAttribute("aria-pressed",String(e==="dark"))}function x(){const e=g();d(e==="dark"?"light":"dark")}function k(){const e=w();d(e==="light"||e==="dark"?e:g()),document.addEventListener("click",a=>{a.target.closest("#theme-toggle")&&x()})}function L(){return`
    <header>
      <h1 class="site-title">
        <a href="/" class="site-title-link">
          <img src="/favicon.svg" alt="Logo" class="site-logo" />
          <span>Allan Boswell</span>
        </a>
      </h1>

      <div class="header-actions">
        <button id="theme-toggle" aria-label="Toggle dark mode" aria-pressed="false">
          <svg class="icon icon-moon" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path d="M12 3a9 9 0 1 0 9 9 7 7 0 0 1-9-9z" fill="currentColor" />
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

        <button
          id="menu-toggle"
          aria-label="Open menu"
          aria-expanded="false"
          aria-controls="menu"
        >
          <svg class="icon icon-menu" viewBox="0 0 24 24" aria-hidden="true">
            <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" stroke-width="2" />
            <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" stroke-width="2" />
            <line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" stroke-width="2" />
          </svg>
        </button>
      </div>

      <div id="menu" class="menu" aria-hidden="true">
        <div class="menu-backdrop"></div>

        <div class="menu-panel">
          <button id="menu-close" class="menu-close" aria-label="Close menu">
            <svg class="icon icon-close" viewBox="0 0 24 24" aria-hidden="true">
              <line x1="5" y1="5" x2="19" y2="19" stroke="currentColor" stroke-width="2" />
              <line x1="19" y1="5" x2="5" y2="19" stroke="currentColor" stroke-width="2" />
            </svg>
          </button>

          <nav class="menu-nav" aria-label="Navigation">
            <a href="/" class="menu-link">Home</a>
            <a href="/" class="menu-link">Projects</a>
            <a href="/" class="menu-link">Web Novels</a>
          </nav>
        </div>
      </div>
    </header>
  `}function S(){return`
    <footer>
      <div class="footer-inner">
        <p class="footer-copy">
          &copy; 2023-2026 Allan Boswell. All rights reserved.
        </p>

        <div class="footer-links">
          <a href="https://github.com/allboswe" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg viewBox="0 0 496 496" class="footer-icon" fill="currentColor">
              <path d="M165.9 389.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2 .6-2-1.3-4.3-4.3-5.2-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 0C106.1 0 0 105.3 0 244c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5 21.3 0 42.8 2.9 62.8 8.5 0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 449.8 496 354.9 496 244 496 105.3 383.5 0 244.8 0z" />
            </svg>
          </a>

          <a href="https://reddit.com/user/allboswe" target="_blank" rel="noopener noreferrer" aria-label="Reddit">
            <svg viewBox="0 0 171 171" class="footer-icon" aria-hidden="true">
              <circle cx="85.5" cy="85.5" r="85.5" class="reddit-bg" />
              <path class="reddit-mark" d="M142.5 85.5c0-6.9-5.6-12.5-12.5-12.5-3.4 0-6.4 1.3-8.6 3.5-8.5-6.1-20.3-10.1-33.3-10.6l5.7-26.7 18.5 3.9c.2 4.7 4.1 8.5 8.9 8.5 4.9 0 8.9-4 8.9-8.9s-4-8.9-8.9-8.9c-3.5 0-6.5 2-7.9 5L92.6 34.4c-.6-.1-1.2 0-1.7.3s-.8.8-1 1.4l-6.3 29.8c-13.3.4-25.2 4.3-33.8 10.6-2.2-2.1-5.3-3.5-8.6-3.5-6.9 0-12.5 5.6-12.5 12.5 0 5.1 3 9.4 7.4 11.4-.2 1.2-.3 2.5-.3 3.8 0 19.2 22.3 34.7 49.9 34.7 27.6 0 49.9-15.5 49.9-34.7 0-1.3-.1-2.5-.3-3.7 4.1-2 7.2-6.4 7.2-11.5zM57 94.4c0-4.9 4-8.9 8.9-8.9s8.9 4 8.9 8.9-4 8.9-8.9 8.9-8.9-4-8.9-8.9zm49.7 23.5c-6.1 6.1-17.7 6.5-21.1 6.5-3.4 0-15.1-.5-21.1-6.5-.9-.9-.9-2.4 0-3.3.9-.9 2.4-.9 3.3 0 3.8 3.8 12 5.2 17.9 5.2 5.9 0 14-1.4 17.9-5.2.9-.9 2.4-.9 3.3 0 .7 1 .7 2.4-.2 3.3zm-1.6-14.6c-4.9 0-8.9-4-8.9-8.9s4-8.9 8.9-8.9 8.9 4 8.9 8.9-4 8.9-8.9 8.9z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  `}function b(e){return`
    ${L()}
    <main>
      ${e}
    </main>
    ${S()}
  `}function A(){return b(`
    <section id="hero">
      <h2>Hello world.</h2>
      <p>I build software and write stories.</p>
      <div>
        <button type="button">View Projects</button>
        <button type="button">Read Web Novels</button>
      </div>
    </section>

    <section id="projects">
      <h2>Projects</h2>
      <p class="section-intro">Stuff I've built.</p>
      <div class="card-list">
        <article class="card">
          <div class="card-image">
            <img src="https://placehold.co/640x320" alt="Placeholder project image" />
          </div>
          <div class="card-content">
            <h3 class="card-title">Title</h3>
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

    <section id="web-novels">
      <h2>Web Novels</h2>
      <p class="section-intro">Stuff I've written.</p>
      <div class="card-list">
        <article class="card">
          <div class="card-image">
            <img src="https://placehold.co/640x320" alt="Placeholder story image" />
          </div>
          <div class="card-content">
            <h3 class="card-title">Pink Guy</h3>
            <p class="card-description">
              A story about a foolish guy in pink and a world that doesn't play fair.
              Once it starts, there's no clean way out.
            </p>
          </div>
          <ul class="card-tags">
            <li class="tag">action</li>
            <li class="tag">dark fantasy</li>
            <li class="tag">supernatural</li>
          </ul>
        </article>
      </div>
    </section>
  `)}function P(){return b(`
    <section class="character-page">
      <div class="character-shell">
        <article class="character-article">
          <div class="character-title-block">
            <p class="character-kicker">Pink Guy / Characters</p>
            <h1>London</h1>

            <nav class="character-subnav" aria-label="Character sections">
              <a href="/pink_guy/characters/london" aria-current="page">Overview</a>
              <a href="/pink_guy/characters/london/history">History</a>
              <a href="/pink_guy/characters/london/gallery">Gallery</a>
            </nav>
          </div>

          <section class="character-section" id="overview">
            <p>
              <strong>London</strong> (ロンドン <em>Rondon</em>) serves as an Administrator in the Bureau of Arcane Affairs, a global organization responsible for overseeing arcane phenomena.
            </p>
          </section>

          <section class="character-section">
            <h2>Appearance</h2>
            <p>
              London is a woman with light, neutral-toned skin and an average build.
              She has straight, shoulder-length pastel brown hair, cut in a blunt bob with even bangs that rest just above her eyebrows.
              Her eyes are a pale, desaturated brown, with small unfilled pupils encircled by a single thin ring.
            </p>
            <br />
            <p>
              She wears a black two-piece business suit consisting of a fitted blazer with notch lapels and a high-waisted, knee-length pencil skirt.
              Underneath, she wears a white blouse with long sleeves and buttoned cuffs.
              The blouse features a ribbon tie at the collar, secured with a small round fastener, with the ends falling down the front.
              She pairs this with plain black closed-toe flats and does not wear any visible accessories.
            </p>
          </section>

          <section class="character-section">
            <h2>Personality</h2>
            <p>
              London is composed and rarely shows outward reactions.
              It can be difficult to tell what she is thinking, as she tends to observe more than she speaks, and when she does, she is usually brief and direct.
              Her behavior comes across as distant, though she does not act that way intentionally.
            </p>
            <br />
            <p>
              In formal settings, she is highly capable and maintains a steady, professional demeanor.
              She handles negotiations and discussions without hesitation, even in high-pressure situations.
              She regularly meets with officials and world leaders through her work in the Bureau of Arcane Affairs and is known for remaining calm regardless of the circumstances.
            </p>
            <br />
            <p>
              Otherwise, she can be socially inept.
              She may misread tone or respond in ways that seem blunt or out of place.
            </p>
          </section>
        </article>

        <aside class="character-infobox" aria-label="London infobox">
          <div class="character-infobox-card">
            <div class="character-infobox-header">
              <h2>London</h2>
            </div>

            <figure class="character-infobox-figure">
              <div class="character-infobox-image-frame">
                <img
                  src="/images/london-infobox-1200.webp"
                  srcset="/images/london-infobox-800.webp 800w,
                          /images/london-infobox-1200.webp 1200w"
                  sizes="(min-width: 1200px) 320px, 90vw"
                  alt="London"
                  class="character-infobox-image"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </figure>

            <dl class="character-facts">
              <div class="character-facts-section">
                <dt>Name</dt>
              </div>

              <div>
                <dt>Alias(es)</dt>
                <dd>Administrator</dd>
              </div>
              <div>
                <dt>Kana</dt>
                <dd>ロンドン</dd>
              </div>
              <div>
                <dt>Romaji</dt>
                <dd>Rondon</dd>
              </div>
            </dl>

            <dl class="character-facts">
              <div class="character-facts-section">
                <dt>Biological Information</dt>
              </div>

              <div>
                <dt>Age</dt>
                <dd>Unknown</dd>
              </div>
              <div>
                <dt>Birthday</dt>
                <dd>April 23</dd>
              </div>
              <div>
                <dt>Birthplace</dt>
                <dd>United Kingdom</dd>
              </div>
              <div>
                <dt>Gender</dt>
                <dd>Female</dd>
              </div>
              <div>
                <dt>Height</dt>
                <dd>168 cm (5'6")</dd>
              </div>
              <div>
                <dt>Species</dt>
                <dd>Human</dd>
              </div>
              <div>
                <dt>Weight</dt>
                <dd>59 kg (130 lb)</dd>
              </div>
            </dl>

            <dl class="character-facts">
              <div class="character-facts-section">
                <dt>Personal Information</dt>
              </div>

              <div>
                <dt>Status</dt>
                <dd>
                  <button class="spoiler-reveal" type="button" data-spoiler-text="Alive">
                    Reveal Status
                  </button>
                </dd>
              </div>
            </dl>

            <dl class="character-facts">
              <div class="character-facts-section">
                <dt>First Appearance</dt>
              </div>

              <div>
                <dt>Web Novel</dt>
                <dd>TBA</dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>
    </section>
  `)}const u=document.querySelector("#app"),h=sessionStorage.getItem("redirectPath");h&&(sessionStorage.removeItem("redirectPath"),window.history.replaceState(null,"",h));const T=window.location.pathname.replace(/\/$/,"")||"/";T==="/pink_guy/characters/london"?u.innerHTML=P():u.innerHTML=A();k();y();const r=document.querySelector("#menu-toggle"),s=document.querySelector("#menu"),p=document.querySelector("#menu-close"),m=document.querySelector(".menu-backdrop");function B(){!s||!r||(s.classList.add("is-open"),s.setAttribute("aria-hidden","false"),r.setAttribute("aria-expanded","true"),document.body.classList.add("menu-open"))}function c(){!s||!r||(s.classList.remove("is-open"),s.setAttribute("aria-hidden","true"),r.setAttribute("aria-expanded","false"),document.body.classList.remove("menu-open"))}r&&s&&p&&m&&(r.addEventListener("click",B),p.addEventListener("click",c),m.addEventListener("click",c),document.addEventListener("keydown",e=>{e.key==="Escape"&&s.classList.contains("is-open")&&c()}));
