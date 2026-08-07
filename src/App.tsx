import './App.css'
import githubPfp from './assets/github-pfp.png'

const projects = [
  {
    year: '2026',
    title: 'Neon Frame',
    category: 'Portfolio UI',
    description:
      'A focused personal site concept using cinematic panels, confident typography, and subtle manga-inspired motion cues.',
  },
  {
    year: '2025',
    title: 'Episode Log',
    category: 'Web design',
    description:
      'A compact journal layout with episode-card navigation, restrained accent color, and a clear reading hierarchy.',
  },
  {
    year: '2025',
    title: 'Line Study',
    category: 'Visual system',
    description:
      'A monochrome illustration direction exploring character silhouettes, screen tones, and polished UI details.',
  },
]

const services = ['Software Engineering', 'Data Analysis', 'AI Enthusiast', 'Gamer']
const codeRainColumns = Array.from({ length: 18 }, (_, index) => index)

function App() {
  return (
    <main className="site-shell">
      <header className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Max Ceban home">
          <img src={githubPfp} alt="Max Ceban logo" />
        </a>
        <nav>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Software Development / Data Analytics / Problem Solving</p>
          <h1>Max Ceban</h1>
          <p className="intro">
            An aspiring software and data professional passionate about building useful applications, analysing data and continuously learning new technologies.
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

        <div className="hero-art" aria-label="Anime-inspired portfolio panel">
          <div className="panel panel-large">
            <div className="code-rain" aria-hidden="true">
              {codeRainColumns.map((column) => (
                <span key={column} />
              ))}
            </div>
            <span className="speedline one" />
            <span className="speedline two" />
            <span className="speedline three" />
            <div className="banner-man" aria-hidden="true">
              <span className="energy-blade" />
              <span className="man-head">
                <span className="visor" />
                <span className="headset" />
                <span className="man-eye left" />
                <span className="man-eye right" />
                <span className="man-mouth" />
              </span>
              <span className="man-arm left" />
              <span className="man-arm right" />
              <span className="man-body" />
            </div>
            <strong>UI</strong>
          </div>
          <div className="panel panel-small">
            <span>01</span>
            <strong>DESIGN</strong>
          </div>
          <div className="panel panel-strip">
            <span />
            <span />
            <span />
          </div>
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
          <h2>Designing interfaces with character and restraint.</h2>
        </div>
        <div className="about-copy">
          <p>
            This version borrows from anime layouts without turning the site
            into fan art: panel framing, screen-tone texture, sharp angles, and
            a limited palette keep it expressive but still portfolio-ready.
          </p>
          <p>
            The structure stays practical for learning web design: clear
            sections, reusable project cards, responsive composition, and CSS
            illustration pieces you can study or replace over time.
          </p>
        </div>
      </section>

      <section className="section" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected Work</p>
          <h2>Case-study cards with cinematic rhythm and clear hierarchy.</h2>
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
        <a className="stamp" href="mailto:maxceban2019@gmail.com">
          <span>Max Ceban</span>
          <strong>maxceban2019@gmail.com</strong>
        </a>
      </section>
    </main>
  )
}

export default App
