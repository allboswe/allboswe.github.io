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
              <a href="#" class="is-disabled" aria-disabled="true">History</a>
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
  `);
}
