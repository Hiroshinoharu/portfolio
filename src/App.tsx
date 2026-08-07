import './App.css'

const projects = [
  {
    year: '2026',
    title: 'Signal Studio',
    category: 'Brand system',
    description:
      'A visual identity for a small creative studio, built around expressive lettering, repeatable marks, and warm editorial layouts.',
  },
  {
    year: '2025',
    title: 'Patch Notes',
    category: 'Web design',
    description:
      'A compact landing page concept for a product journal with tight typography, modular sections, and hand-drawn interface details.',
  },
  {
    year: '2025',
    title: 'Tiny Archive',
    category: 'Illustration',
    description:
      'A set of poster-style illustrations exploring desktop objects, personal collections, and monochrome line work.',
  },
]

const services = ['Web Design', 'Visual Identity', 'Illustration', 'Frontend UI']

function App() {
  return (
    <main className="site-shell">
      <header className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Max Ceban home">
          MC
        </a>
        <nav>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Portfolio / Web Design / Illustration</p>
          <h1>Max Ceban</h1>
          <p className="intro">
            A playful portfolio concept for learning layout, type, and visual
            direction through crisp interface design and hand-drawn studio
            energy.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">
              View work
            </a>
            <a className="button" href="#contact">
              Say hello
            </a>
          </div>
        </div>

        <div className="hero-art" aria-label="Illustrated desk scene">
          <div className="sunburst" />
          <div className="monitor">
            <span />
            <strong>PORT</strong>
          </div>
          <div className="tablet">
            <span />
            <span />
            <span />
          </div>
          <div className="character">
            <div className="head">
              <span className="ear left" />
              <span className="ear right" />
              <span className="eye left" />
              <span className="eye right" />
              <span className="nose" />
              <span className="mouth" />
            </div>
            <div className="body" />
          </div>
          <div className="plant">
            <span />
            <span />
            <span />
          </div>
          <div className="cable" />
        </div>
      </section>

      <section className="marquee" aria-label="Services">
        {services.map((service) => (
          <span key={service}>{service}</span>
        ))}
      </section>

      <section className="section split" id="about">
        <div>
          <p className="eyebrow">Hello</p>
          <h2>Designing sites with a sketchbook mindset.</h2>
        </div>
        <div className="about-copy">
          <p>
            This page is shaped by retro portfolio covers, bold display type,
            cream paper, red ink, and black-and-white illustration. It keeps the
            structure practical: a clear intro, selected work, an about note,
            and a contact area.
          </p>
          <p>
            Use it as a learning base by swapping the project copy, changing the
            palette variables, or simplifying the CSS illustration piece by
            piece.
          </p>
        </div>
      </section>

      <section className="section" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected Work</p>
          <h2>Projects with character, rhythm, and clear hierarchy.</h2>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className={`project-poster poster-${index + 1}`}>
                <span>{project.year}</span>
              </div>
              <div className="project-meta">
                <span>{project.category}</span>
                <span>{project.year}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Available for portfolio feedback, visual systems, and UI builds.</h2>
        </div>
        <a className="stamp" href="mailto:hello@maxceban.dev">
          <span>Max Ceban</span>
          <strong>hello@maxceban.dev</strong>
        </a>
      </section>
    </main>
  )
}

export default App
