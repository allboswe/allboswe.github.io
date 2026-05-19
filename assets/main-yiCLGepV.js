(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();function B(){const e=document.querySelector(".gallery-lightbox"),a=document.querySelector(".gallery-lightbox-image"),n=document.querySelector(".gallery-lightbox-close"),r=document.querySelectorAll(".gallery-image");if(!e||!a||!n||r.length===0)return;function t(s){const u=s.dataset.fullImage||s.src;a.src=u,a.alt=s.alt,e.classList.add("is-open"),e.setAttribute("aria-hidden","false")}function i(){e.classList.remove("is-open"),e.setAttribute("aria-hidden","true"),a.src="",a.alt=""}r.forEach(s=>{s.addEventListener("click",()=>{t(s)})}),n.addEventListener("click",i),e.addEventListener("click",s=>{s.target===e&&i()}),document.addEventListener("keydown",s=>{s.key==="Escape"&&i()})}function T(){document.querySelectorAll(".spoiler-reveal").forEach(a=>{a.addEventListener("click",()=>{const n=a.dataset.spoilerText;n&&(a.textContent=n,a.disabled=!0,a.classList.add("is-revealed"))})})}const w=document.documentElement,x="theme";function z(){return localStorage.getItem(x)}function k(){const e=w.getAttribute("data-theme");return e==="light"||e==="dark"?e:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function b(e){const a=document.getElementById("theme-toggle");w.setAttribute("data-theme",e),localStorage.setItem(x,e),a&&a.setAttribute("aria-pressed",String(e==="dark"))}function I(){const e=k();b(e==="dark"?"light":"dark")}function H(){const e=z();b(e==="light"||e==="dark"?e:k()),document.addEventListener("click",a=>{a.target.closest("#theme-toggle")&&I()})}function j(){const e=document.querySelector(".character-toc"),a=document.querySelector(".character-toc-toggle");!e||!a||a.addEventListener("click",()=>{const n=e.classList.toggle("is-collapsed");a.textContent=n?"show":"hide",a.setAttribute("aria-expanded",String(!n))})}function D(){return`
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

    <div class="site-notice" role="status">
      <span class="site-notice-emoji" aria-hidden="true">🚧</span>
      <span>Hang in there, baby! (This website is still a work in progress.)</span>
    </div>
  `}function E(){return`
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
  `}function h(e){return`
    ${D()}
    <main>
      ${e}
    </main>
    ${E()}
  `}function $(){return h(`
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
            <h3 class="card-title">Yap</h3>
            <p class="card-description">
              A Chatango bot designed for conversation handling, room moderation, and utility automation.
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
            <li class="tag">action fantasy</li>
            <li class="tag">comedy</li>
            <li class="tag">thriller/horror</li>
          </ul>
        </article>
      </div>
    </section>
  `)}function A(e){return`
    <nav class="character-toc" aria-label="Table of contents">
      <div class="character-toc-header">
        <h2 class="character-toc-title">
          <span class="toc-icon" aria-hidden="true">
            <svg viewBox="0 0 16 16" width="14" height="14">
              <circle cx="2" cy="3" r="1" fill="currentColor"></circle>
              <line x1="5" y1="3" x2="14" y2="3" stroke="currentColor" stroke-width="1.5"></line>

              <circle cx="2" cy="8" r="1" fill="currentColor"></circle>
              <line x1="5" y1="8" x2="14" y2="8" stroke="currentColor" stroke-width="1.5"></line>

              <circle cx="2" cy="13" r="1" fill="currentColor"></circle>
              <line x1="5" y1="13" x2="14" y2="13" stroke="currentColor" stroke-width="1.5"></line>
            </svg>
          </span>
          Contents
        </h2>

        <button
          class="character-toc-toggle"
          type="button"
          aria-expanded="true"
        >
          hide
        </button>
      </div>

      <ol class="character-toc-list">
        ${e.sections.map(n=>{let r="";return n.id==="powers"&&(r=`
          <ol>
            ${[...new DOMParser().parseFromString(n.content,"text/html").querySelectorAll("h3")].map(u=>`
                  <li>
                    <a href="#${u.textContent.toLowerCase().replace(/\s+/g,"-")}">
                      ${u.textContent}
                    </a>
                  </li>
                `).join("")}
          </ol>
        `),`
        <li>
          <a href="#${n.id}">
            ${n.title}
          </a>

          ${r}
        </li>
      `}).join("")}
      </ol>
    </nav>
  `}function p(e,a){return`
    <div class="character-title-block">
      <p class="character-kicker">${e.series} / ${e.category}</p>
      <h1>${e.name}</h1>

      <nav class="character-subnav" aria-label="Character sections">
        <a href="/pink-guy/characters/${e.slug}/" ${a==="overview"?'aria-current="page"':""}>Overview</a>

        <a href="#" class="is-disabled" aria-disabled="true">History</a>

        <a href="/pink-guy/characters/${e.slug}/gallery/" ${a==="gallery"?'aria-current="page"':""}>Gallery</a>
      </nav>
    </div>
  `}function N(e){if(e.spoiler)return`
      <div>
        <dt>${e.label}</dt>
        <dd>
          <button class="spoiler-reveal" type="button" data-spoiler-text="${e.revealedValue}">
            ${e.buttonText}
          </button>
        </dd>
      </div>
    `;const a=e.className?` class="${e.className}"`:"";return`
    <div>
      <dt>${e.label}</dt>
      <dd${a}>${e.value}</dd>
    </div>
  `}function G(e){return`
    <dl class="character-facts">
      <div class="character-facts-section">
        <dt>${e.heading}</dt>
      </div>

      ${e.rows.map(N).join("")}
    </dl>
  `}function g(e){const{image:a,groups:n}=e.infobox;return`
    <aside class="character-infobox" aria-label="${e.name} infobox">
      <div class="character-infobox-card">
        <div class="character-infobox-header">
          <h2>${e.name}</h2>
        </div>

        <figure class="character-infobox-figure">
          <div class="character-infobox-image-frame">
            <img
              src="${a.src}"
              srcset="${a.srcset}"
              sizes="${a.sizes}"
              alt="${a.alt}"
              class="character-infobox-image"
              loading="lazy"
              decoding="async"
            />
          </div>
        </figure>

        ${n.map(G).join("")}
      </div>
    </aside>
  `}function q(e){return`
    <section class="character-section" id="${e.id}">
      <h2>${e.title}</h2>
      ${e.content}
    </section>
  `}function C(e){return e.sections.map(q).join("")}function S(e){return`
    <section class="character-section" id="overview">
      <p>${e.overview}</p>
    </section>
  `}const o={slug:"dandy-valentine",name:"Dandy Valentine",series:"Pink Guy",category:"Characters",overview:`
    <strong>Dandy Valentine</strong> (バレンタイン・ダンディ <em>Barentain Dandi</em>) is the protagonist of the <em>Pink Guy</em> series. He frequently becomes involved in situations he does not fully understand.
  `,sections:[{id:"appearance",title:"Appearance",content:`
        <p>
          Dandy Valentine is a young man with light skin, a lean build, pale blond hair, and dull grey-blue eyes that often appear half-open.
          A small adhesive bandage sits across the bridge of his nose, and one of his upper front teeth is missing, leaving a slight gap when he smiles or speaks.
          He usually wears a faded pastel pink hoodie with the hood pulled up, along with torn dark blue jeans and worn sneakers.
          After coming into contact with an arcane phenomenon, he develops a long wolf tail, claw-like fingernails, large wolf ears, and small fangs.
          He later begins wearing a pastel pink blazer over a white dress shirt and black tie, paired with black trousers and black dress shoes.
        </p>
      `},{id:"personality",title:"Personality",content:`
        <p>
          Dandy Valentine is foul-mouthed, impulsive, and emotionally direct, often speaking or acting without thinking ahead.
          After spending several years homeless, he focuses mainly on immediate comfort and simple pleasures, which causes him to come across as immature, selfish, or overly interested in women and relationships.
          He frequently talks about wanting an ordinary life and pursuing the <em>American Dream</em>, especially having a stable job, attending college, owning a home, getting married, and raising a family.
          He also becomes attached to people quickly and shows strong loyalty toward those he grows close to.
          Frustration with his situation often leads to reckless decisions.
        </p>
      `},{id:"powers",title:"Powers",content:`
        <p>
          Dandy Valentine possesses arcane phenomena tied to adaptation and instinct.
          His primary power develops through exposure to and understanding of other arcane phenomena, allowing him to interpret imperfect variations used by those he encounters.
          He also has a set of bestial subpowers, which only appear after suffering fatal injuries.
          Unlike most characters, his survival is closely tied to his own will to continue living.
        </p>
        <h3 id="archetypal-drift">Archetypal Drift</h3>
        <p>
          <strong>Archetypal Drift</strong> allows him to interpret imperfect variations of other arcane phenomena through prolonged exposure and personal understanding.
          These interpretations are shaped by his own perception of the phenomenon and may develop differently from their original forms.
          He is only capable of interpreting a single phenomenon from another individual, and the process itself is unreliable even when performed intentionally.
        </p>
        <h3 id="subpowers">Subpowers</h3>
        <p>
          Like other arcane phenomena, he exhibits the common abilities typically associated with them.
          He also has a unique set of abilities tied to his bestial transformation, which only appear after suffering fatal injuries in his human state.
        </p>
        <h4>Bestial Convergence</h4>
        <p>
          <strong>Bestial Convergence</strong> is a passive ability that causes him to gradually develop permanent bestial traits.
          These changes become more pronounced over time and are accompanied by shifts in behavior, instinctive response, and physical structure.
        </p>
        <h4>Bestial Weaponization</h4>
        <p>
          <strong>Bestial Weaponization</strong> is an active ability that allows him to utilize his transformed physical traits as weapons.
          Features such as his elongated fingernails, fangs, and tail can be used offensively or defensively, often in ways that resemble instinctive animal behavior.
        </p>
      `}],infobox:{image:{src:"/images/dandy-infobox-(human)-1200.webp",srcset:`
        /images/dandy-infobox-(human)-800.webp 800w,
        /images/dandy-infobox-(human)-1200.webp 1200w
      `,sizes:"(min-width: 1200px) 320px, 90vw",alt:"Dandy Valentine standing with his hands in the pocket of a pastel pink hoodie."},groups:[{heading:"Name",rows:[{label:"Alias",value:"Pink Guy"},{label:"Kana",value:"バレンタイン・ダンディ"},{label:"Romaji",value:"Barentain Dandi"}]},{heading:"Biological Information",rows:[{label:"Age",value:"21"},{label:"Birthday",value:"February 14"},{label:"Birthplace",value:"New York, United States"},{label:"Blood Type",value:"B+"},{label:"Gender",value:"Male"},{label:"Height",value:`180 cm (5'11")`},{label:"Species",value:"Hybrid"},{label:"Weight",value:"73 kg (160 lb)"}]},{heading:"Personal Information",rows:[{label:"Dislikes",value:"Cats"},{label:"Education",value:`
              <span>Midwood High School</span>
              <span class="education-context">(dropped out)</span>
            `,className:"education"},{label:"Habits",value:"Daydreaming"},{label:"Hobbies",value:"Sleeping"},{label:"Likes",value:"Food, Women"},{label:"Personality",value:"ESFP"},{label:"Status",spoiler:!0,buttonText:"Reveal Status",revealedValue:"Alive"}]},{heading:"Phenomena Information",rows:[{label:"Arcana",spoiler:!0,buttonText:"Reveal Arcana",revealedValue:"The Fool"},{label:"Power",value:"Archetypal Drift"},{label:"Subpower",value:"Bestial"},{label:"Weapon",value:"—"}]},{heading:"Professional Information",rows:[{label:"Affiliation",value:`
              <span>Bureau of Arcane Affairs</span>
              <span class="affiliation-context">Operations Specialist</span>
            `,className:"affiliation"},{label:"Jurisdiction",value:"United States"}]},{heading:"First Appearance",rows:[{label:"Web Novel",value:"TBA"}]}]},gallery:{category:"Web Novel",tabs:[{id:"concept-art",label:"Concept Art",images:[{src:"/images/dandy-concept-(human)-800.webp",srcset:`
              /images/dandy-concept-(human)-800.webp 800w,
              /images/dandy-concept-(human)-1280.webp 1280w
            `,sizes:"(min-width: 1200px) 400px, 90vw",alt:"A character reference sheet of Dandy Valentine wearing a pastel pink hoodie, torn jeans, and carrying a baseball bat.",fullImage:"/images/dandy-concept-(human)-1280.webp",caption:"Concept Art 1"},{src:"/images/dandy-concept-(hybrid)-800.webp",srcset:`
              /images/dandy-concept-(hybrid)-800.webp 800w,
              /images/dandy-concept-(hybrid)-1280.webp 1280w
            `,sizes:"(min-width: 1200px) 400px, 90vw",alt:"A character reference sheet of Dandy Valentine in his hybrid form, wearing a pastel pink blazer with wolf ears, a tail, and sharp fangs.",fullImage:"/images/dandy-concept-(hybrid)-1280.webp",caption:"Concept Art 2"},{src:"/images/dandy-concept-sheet-(human)-800.webp",srcset:`
              /images/dandy-concept-sheet-(human)-800.webp 800w,
              /images/dandy-concept-sheet-(human)-1280.webp 1280w
            `,sizes:"(min-width: 1200px) 400px, 90vw",alt:"A character reference sheet of Dandy Valentine wearing a pastel pink hoodie, torn jeans, and carrying a baseball bat including three facial expressions shown on the side such as neutral, excited, and smiling.",fullImage:"/images/dandy-concept-sheet-(human)-1280.webp",caption:"Character Sheet 1"},{src:"/images/dandy-concept-sheet-(hybrid)-800.webp",srcset:`
              /images/dandy-concept-sheet-(hybrid)-800.webp 800w,
              /images/dandy-concept-sheet-(hybrid)-1280.webp 1280w
            `,sizes:"(min-width: 1200px) 400px, 90vw",alt:"A character reference sheet of Dandy Valentine in his hybrid form, wearing a pastel pink blazer with wolf ears, a tail, and sharp fangs including three facial expressions shown on the side such as neutral, serious, and smiling.",fullImage:"/images/dandy-concept-sheet-(hybrid)-1280.webp",caption:"Character Sheet 2"}]},{id:"cover-art",label:"Cover Art",images:[{src:"/images/dandy-infobox-(human)-800.webp",srcset:`
              /images/dandy-infobox-(human)-800.webp 800w,
              /images/dandy-infobox-(human)-1200.webp 1200w
            `,sizes:"(min-width: 1200px) 400px, 90vw",alt:"Dandy Valentine standing with his hands in the pocket of a pastel pink hoodie.",fullImage:"/images/dandy-infobox-(human)-1200.webp",caption:"Cover Art 1"},{src:"https://placehold.co/800x1000",srcset:`
              https://placehold.co/800x1000 800w,
              https://placehold.co/1200x1500 1200w
            `,sizes:"(min-width: 1200px) 400px, 90vw",alt:"None",fullImage:"https://placehold.co/1200x1500",caption:"Cover Art 2"}]}]}},l={slug:"london",name:"London",series:"Pink Guy",category:"Characters",overview:`
    <strong>London</strong> (ロンドン <em>Rondon</em>) is a major character from the <em>Pink Guy</em> series. She is the Administrator in the Bureau of Arcane Affairs, an international organization responsible for overseeing arcane phenomena.
  `,sections:[{id:"appearance",title:"Appearance",content:`
        <p>
          London is a woman with light skin and a slender build.
          She has straight pastel-brown hair cut into a shoulder-length bob with even bangs that rest just above her eyes.
          Her pale eyes contain concentric rings within the irises, and she is usually seen with a neutral expression and upright posture.
          She wears a black business suit consisting of a fitted blazer and a high-waisted knee-length skirt over a white blouse tied at the collar, along with plain black flats.
        </p>
      `},{id:"personality",title:"Personality",content:`
        <p>
          London is reserved and difficult to read, rarely showing strong emotion even in dangerous or high-pressure situations.
          She speaks in a soft and direct manner and usually appears confident in her decisions.
          Although polite and approachable, she keeps emotional distance from the people around her and rarely reveals what she is thinking or feeling.
          She seldom raises her voice or changes her expression during conversations and usually prefers persuasion over direct force or intimidation.
        </p>
      `}],infobox:{image:{src:"/images/london-infobox-1200.webp",srcset:`
        /images/london-infobox-800.webp 800w,
        /images/london-infobox-1200.webp 1200w
      `,sizes:"(min-width: 1200px) 320px, 90vw",alt:"London standing in front of a city skyline while wearing a white blouse and dark skirt."},groups:[{heading:"Name",rows:[{label:"Alias",value:"—"},{label:"Kana",value:"ロンドン"},{label:"Romaji",value:"Rondon"}]},{heading:"Biological Information",rows:[{label:"Age",value:"Unknown"},{label:"Birthday",value:"April 23"},{label:"Birthplace",value:"United Kingdom"},{label:"Blood Type",value:"AB+"},{label:"Gender",value:"Female"},{label:"Height",value:`168 cm (5'6")`},{label:"Species",value:"Hybrid"},{label:"Weight",value:"59 kg (130 lb)"}]},{heading:"Personal Information",rows:[{label:"Dislikes",value:"Tea"},{label:"Education",value:`
              <span>University of Oxford</span>
              <span class="education-context">PPE, DPhil in Politics</span>
            `,className:"education"},{label:"Habits",value:"Smoking"},{label:"Hobbies",value:"French Tarot, Reading"},{label:"Likes",value:"Coffee, Classic Rock"},{label:"Personality",value:"INTJ"},{label:"Status",spoiler:!0,buttonText:"Reveal Status",revealedValue:"Alive"}]},{heading:"Phenomena Information",rows:[{label:"Arcana",spoiler:!0,buttonText:"Reveal Arcana",revealedValue:"The World"},{label:"Power",value:"Absolute Authority"},{label:"Subpower",value:"—"},{label:"Weapon",value:"—"}]},{heading:"Professional Information",rows:[{label:"Affiliation",value:`
              <span>Bureau of Arcane Affairs</span>
              <span class="affiliation-context">Administrator</span>
            `,className:"affiliation"},{label:"Jurisdiction",value:"Global"}]},{heading:"First Appearance",rows:[{label:"Web Novel",value:"TBA"}]}]},gallery:{category:"Web Novel",tabs:[{id:"concept-art",label:"Concept Art",images:[{src:"/images/london-concept-800.webp",srcset:`
              /images/london-concept-800.webp 800w,
              /images/london-concept-1280.webp 1280w
            `,sizes:"(min-width: 1200px) 400px, 90vw",alt:"A character reference sheet of London wearing a black business suit with a shoulder-length bob haircut.",fullImage:"/images/london-concept-1280.webp",caption:"Concept Art 1"},{src:"/images/london-concept-sheet-800.webp",srcset:`
              /images/london-concept-sheet-800.webp 800w,
              /images/london-concept-sheet-1280.webp 1280w
            `,sizes:"(min-width: 1200px) 400px, 90vw",alt:"A character reference sheet of London wearing a black business suit with a shoulder-length bob haircut including three facial expressions shown on the side such as neutral, smiling, and tilted.",fullImage:"/images/london-concept-sheet-1280.webp",caption:"Character Sheet 1"}]},{id:"cover-art",label:"Cover Art",images:[{src:"/images/london-infobox-800.webp",srcset:`
              /images/london-infobox-800.webp 800w,
              /images/london-infobox-1200.webp 1200w
            `,sizes:"(min-width: 1200px) 400px, 90vw",alt:"London standing in front of a city skyline while wearing a white blouse and dark skirt.",fullImage:"/images/london-infobox-1200.webp",caption:"Cover Art 1"}]}]}};function V(){return h(`
    <section class="character-page">
      <div class="character-shell">
        <article class="character-article">
          ${p(o,"overview")}
          ${S(o)}
          ${A(o)}
          ${C(o)}
          </article>
        ${g(o)}
      </div>
    </section>
  `)}function M(e){const a=`${e.slug}-gallery-tabs`,n=e.gallery.tabs.map((t,i)=>`
        <input
          type="radio"
          name="${a}"
          id="${e.slug}-${t.id}"
          ${i===0?"checked":""}
        />
      `).join(""),r=e.gallery.tabs.map(t=>`<label for="${e.slug}-${t.id}">${t.label}</label>`).join("");return{inputs:n,labels:r}}function O(e){return e.gallery.tabs.map(a=>{const n=a.images.map(t=>`
            <figure class="gallery-image-card">
              <img
                src="${t.src}"
                srcset="${t.srcset}"
                sizes="${t.sizes}"
                alt="${t.alt}"
                class="gallery-image"
                data-full-image="${t.fullImage}"
                loading="lazy"
                decoding="async"
              />
              <figcaption>${t.caption}</figcaption>
            </figure>
          `).join("");return`
        <div class="gallery-tab-panel ${`gallery-${a.id.replace("-art","")}-panel`}">
          ${n}
        </div>
      `}).join("")}function L(e){const{inputs:a,labels:n}=M(e),r=O(e);return`
    <section class="character-section character-gallery-section">
      <div class="gallery-category-header">
        <h2>${e.gallery.category}</h2>
      </div>

      <div class="gallery-tabs">
        ${a}

        <div class="gallery-tab-list" aria-label="Gallery categories">
          ${n}
        </div>

        ${r}
      </div>
    </section>
  `}function P(){return`
    <div class="gallery-lightbox" aria-hidden="true">
      <button class="gallery-lightbox-close" type="button" aria-label="Close image preview">
        <svg class="icon" viewBox="0 0 24 24">
          <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>

      <img src="" alt="" class="gallery-lightbox-image" />
    </div>
  `}function W(){return h(`
    <section class="character-page">
      <div class="character-shell">
        <article class="character-article">
          ${p(o,"gallery")}
          ${L(o)}
        </article>
        ${g(o)}
      </div>
      ${P()}
    </section>
  `)}function R(){return h(`
    <section class="character-page">
      <div class="character-shell">
        <article class="character-article">
          ${p(l,"overview")}
          ${S(l)}
          ${A(l)}
          ${C(l)}
          </article>
        ${g(l)}
      </div>
    </section>
  `)}function F(){return h(`
    <section class="character-page">
      <div class="character-shell">
        <article class="character-article">
          ${p(l,"gallery")}
          ${L(l)}
        </article>
        ${g(l)}
      </div>
      ${P()}
    </section>
  `)}const f=document.querySelector("#app"),U={home:$,dandy:V,london:R,"dandy-gallery":W,"london-gallery":F},K=f?.dataset.page||"home",J=U[K]||$;f&&(f.innerHTML=J());H();j();T();B();const d=document.querySelector("#menu-toggle"),c=document.querySelector("#menu"),v=document.querySelector("#menu-close"),y=document.querySelector(".menu-backdrop");function Y(){!c||!d||(c.classList.add("is-open"),c.setAttribute("aria-hidden","false"),d.setAttribute("aria-expanded","true"),document.body.classList.add("menu-open"))}function m(){!c||!d||(c.classList.remove("is-open"),c.setAttribute("aria-hidden","true"),d.setAttribute("aria-expanded","false"),document.body.classList.remove("menu-open"))}d&&c&&v&&y&&(d.addEventListener("click",Y),v.addEventListener("click",m),y.addEventListener("click",m),document.addEventListener("keydown",e=>{e.key==="Escape"&&c.classList.contains("is-open")&&m()}));
