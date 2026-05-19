import { renderStandardPage } from '../components/layout';

export function renderHomePage() {
  return renderStandardPage(`
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
  `);
}
