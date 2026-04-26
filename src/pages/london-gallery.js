import { renderStandardPage } from '../components/layout';

export function renderLondonGalleryPage() {
  return renderStandardPage(`
    <section class="character-page">
      <div class="character-shell">
        <article class="character-article">
          <div class="character-title-block">
            <p class="character-kicker">Pink Guy / Characters</p>
            <h1>London</h1>

            <nav class="character-subnav" aria-label="Character sections">
              <a href="/pink_guy/characters/london">Overview</a>
              <a href="#" class="is-disabled" aria-disabled="true">History</a>
              <a href="/pink_guy/characters/london/gallery" aria-current="page">Gallery</a>
            </nav>
          </div>

          <section class="character-section character-gallery-section">
            <div class="gallery-category-header">
              <h2>Web Novel</h2>
            </div>

            <div class="gallery-tabs">
              <input type="radio" name="london-gallery-tabs" id="london-concept-art" checked />
              <input type="radio" name="london-gallery-tabs" id="london-cover-art" />

              <div class="gallery-tab-list" aria-label="Gallery categories">
                <label for="london-concept-art">Concept Art</label>
                <label for="london-cover-art">Cover Art</label>
              </div>

              <div class="gallery-tab-panel gallery-concept-panel">
                <figure class="gallery-image-card">
                  <img
                    src="/images/london-concept-800.webp"
                    srcset="
                      /images/london-concept-800.webp 800w,
                      /images/london-concept-1280.webp 1280w
                    "
                    sizes="(min-width: 1200px) 400px, 90vw"
                    alt="London Concept Art - Part I"
                    class="gallery-image"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption>London Concept Art (<em>during part one</em>)</figcaption>
                </figure>
              </div>

              <div class="gallery-tab-panel gallery-cover-panel">
                <figure class="gallery-image-card">
                  <img
                    src="/images/london-infobox-800.webp"
                    srcset="
                      /images/london-infobox-800.webp 800w,
                      /images/london-infobox-1200.webp 1200w
                    "
                    sizes="(min-width: 1200px) 400px, 90vw"
                    alt="London Cover Art - Part I"
                    class="gallery-image"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption>London Cover Art (<em>during part one</em>)</figcaption>
                </figure>
              </div>
            </div>
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
  `);
}
