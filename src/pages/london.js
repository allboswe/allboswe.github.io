import { renderStandardPage } from '../components/layout';

export function renderLondonPage() {
  return renderStandardPage(`
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
              As the archetypal representative of The World, she is a central figure in the series.
            </p>
          </section>

          <section class="character-section">
            <h2>Appearance</h2>
            <p>Work in progress.</p>
          </section>

          <section class="character-section">
            <h2>Personality</h2>
            <p>Work in progress.</p>
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
  `);
}
