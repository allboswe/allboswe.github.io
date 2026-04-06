import { renderStandardPage } from '../components/layout';

export function renderHomePage() {
  return renderStandardPage(`
    <section id="hero">
      <h2>Hello.</h2>
      <p>Lorem ipsum dolor sit amet.</p>
      <div>
        <button type="button">View Projects</button>
        <button type="button">Read Manga</button>
      </div>
    </section>

    <section id="projects">
      <h2>Projects</h2>
      <p class="section-intro">Lorem ipsum dolor sit amet.</p>
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

    <section id="manga">
      <h2>Manga</h2>
      <p class="section-intro">Lorem ipsum dolor sit amet.</p>
      <div class="card-list">
        <article class="card">
          <div class="card-image">
            <img src="https://placehold.co/640x320" alt="Placeholder story image" />
          </div>
          <div class="card-content">
            <h3 class="card-title">Title</h3>
            <p class="card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum
              bibendum maximus. Vivamus at viverra tortor, sed eleifend erat.
            </p>
          </div>
          <ul class="card-tags">
            <li class="tag">action</li>
          </ul>
        </article>
      </div>
    </section>
  `);
}
