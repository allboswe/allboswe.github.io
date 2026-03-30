import { renderStandardPage } from '../components/layout';

export function renderHomePage() {
  return renderStandardPage(`
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
  `);
}
