import './App.css'
import githubPfp from './assets/github-pfp.png'
import maxPhoto from './assets/max.jpeg'

// Main portfolio cards. The UI renders these into the Selected Work section.
const projects = [
  {
    year: '2026',
    title: 'NextPlay',
    category: 'ML recommender',
    description:
      'Distributed full-stack game recommender using Go, FastAPI, PostgreSQL, Keras, Docker, and Kubernetes to deliver personalised recommendations from user interaction data.',
    stack: ['React', 'Vite', 'Go', 'FastAPI', 'PostgreSQL', 'Keras', 'Docker', 'Kubernetes'],
    projectUrl: 'https://nextplay.up.railway.app/',
    projectLinkLabel: 'Open NextPlay',
  },
  {
    year: '2024',
    title: 'CNN From Scratch',
    category: 'Java / ML',
    description:
      'Built a convolutional neural network from scratch in Java, reaching 93% image classification accuracy with multithreaded training and a custom metrics GUI.',
    stack: ['Java', 'ML', 'Threads', 'GUI'],
    projectUrl: 'https://github.com/Hiroshinoharu//machineLearningProject',
    projectLinkLabel: 'View on GitHub',
  },
  {
    year: '2026',
    title: 'MoMA Art Catalogue',
    category: 'Full-stack app',
    description:
      'Full-stack artwork catalogue for browsing, searching, filtering, paginating, adding, editing, and deleting MoMA artwork records stored in MongoDB.',
    stack: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Mongoose'],
    projectUrl: 'https://github.com/Hiroshinoharu/MOMA',
    projectLinkLabel: 'View on GitHub',
  },
  {
    year: '2025',
    title: 'CKAN ETL Pipeline',
    category: 'Data automation',
    description:
      'Python ETL and web-scraping automation for dataset cleaning, CKAN API uploads, and scheduled publishing through a Windows service.',
    stack: ['Python', 'ETL', 'CKAN API', 'Power BI'],
    projectUrl: 'https://github.com/Hiroshinoharu/',
    projectLinkLabel: 'View on GitHub',
  },
]

const services = ['Software Engineering', 'Data Analysis', 'AI Enthusiast', 'Problem Solver']
const codeRainColumns = Array.from({ length: 18 }, (_, index) => index)

// CV-derived skills used by the Tech Stack section.
const skillGroups = [
  {
    title: 'Languages',
    items: ['Python', 'Go', 'Java', 'TypeScript', 'C', 'SQL'],
  },
  {
    title: 'Frameworks',
    items: ['React', 'Vite', 'FastAPI', 'Fiber', 'PyQt6', 'Express'],
  },
  {
    title: 'Data & ML',
    items: ['Machine Learning', 'Data Pipelines', 'Keras', 'Power BI'],
  },
  {
    title: 'Tools',
    items: ['Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB', 'Git', 'REST APIs'],
  },
]

const techIconText: Record<string, string> = {
  React: 'Re',
  Vite: 'V',
  TypeScript: 'TS',
  C: 'C',
  SQL: 'SQL',
  'Node.js': 'N',
  Express: 'Ex',
  MongoDB: 'Mo',
  Mongoose: 'Mg',
  Go: 'Go',
  FastAPI: 'API',
  PostgreSQL: 'PG',
  Keras: 'K',
  Docker: 'D',
  Kubernetes: 'K8',
  Java: 'J',
  ML: 'ML',
  Threads: 'TH',
  GUI: 'UI',
  Python: 'Py',
  Fiber: 'Fi',
  PyQt6: 'Qt',
  'Machine Learning': 'ML',
  'Data Pipelines': 'DP',
  Git: 'Git',
  'REST APIs': 'API',
  ETL: 'ETL',
  'CKAN API': 'CK',
  'Power BI': 'BI',
}

// Lightweight SVG poster art for each project card, selected by project index.
function ProjectIllustration({ index }: { index: number }) {
  if (index === 0) {
    return (
      <svg className="project-illustration" viewBox="0 0 320 210" aria-hidden="true">
        <rect className="svg-panel" x="32" y="44" width="104" height="84" rx="12" />
        <rect className="svg-panel cyan" x="184" y="42" width="104" height="84" rx="12" />
        <path className="svg-line" d="M136 86c34-34 48 34 48 0" />
        <path className="svg-line thick" d="M72 144h176" />
        <circle className="svg-fill red" cx="84" cy="82" r="12" />
        <circle className="svg-fill" cx="232" cy="82" r="12" />
        <path className="svg-line" d="M88 144l24 24 44-52 42 38 34-28" />
      </svg>
    )
  }

  if (index === 1) {
    return (
      <svg className="project-illustration" viewBox="0 0 320 210" aria-hidden="true">
        <g className="network-lines">
          <path d="M78 70l74 34 88-42M78 140l74-36 88 44M152 104l88 44M152 104l88-42" />
        </g>
        {[78, 152, 240].map((x, i) => (
          <g key={x}>
            <circle className={i === 1 ? 'svg-fill red' : 'svg-fill'} cx={x} cy={i === 1 ? 104 : 70} r="18" />
            <circle className="svg-panel" cx={x} cy={i === 1 ? 104 : 140} r="18" />
          </g>
        ))}
        <rect className="svg-panel cyan" x="116" y="152" width="88" height="28" rx="6" />
      </svg>
    )
  }

  if (index === 2) {
    return (
      <svg className="project-illustration" viewBox="0 0 320 210" aria-hidden="true">
        <rect className="svg-panel" x="42" y="40" width="104" height="124" />
        <rect className="svg-panel cyan" x="174" y="54" width="104" height="92" />
        <path className="svg-line" d="M62 62h64M62 82h48M62 126h64M194 78h62M194 98h42" />
        <rect className="svg-fill red" x="72" y="98" width="44" height="18" />
        <path className="svg-line thick" d="M58 174h206" />
        <circle className="svg-fill" cx="226" cy="126" r="14" />
      </svg>
    )
  }

  return (
    <svg className="project-illustration" viewBox="0 0 320 210" aria-hidden="true">
      <rect className="svg-panel" x="34" y="72" width="70" height="54" rx="8" />
      <rect className="svg-panel cyan" x="126" y="48" width="70" height="54" rx="8" />
      <rect className="svg-panel" x="218" y="96" width="70" height="54" rx="8" />
      <path className="svg-line thick" d="M104 98h22M196 76c38 0 18 46 22 46" />
      <path className="svg-line" d="M58 142h208M70 154h84M178 154h70" />
      <circle className="svg-fill red" cx="70" cy="98" r="10" />
      <circle className="svg-fill" cx="162" cy="75" r="10" />
      <circle className="svg-fill red" cx="254" cy="123" r="10" />
    </svg>
  )
}

// Contact and social panels. Icons are inline SVG path data.
const socials = [
  {
    label: 'LinkedIn',
    href: 'http://www.linkedin.com/in/max-ceban',
    className: 'social-linkedin',
    icon: 'M6 10h5v16H6V10Zm2.5-7a2.9 2.9 0 1 1 0 5.8A2.9 2.9 0 0 1 8.5 3ZM14 10h4.8v2.2h.1c.7-1.3 2.3-2.7 4.8-2.7 5.1 0 6.1 3.4 6.1 7.8V26h-5v-7.7c0-1.8 0-4.2-2.6-4.2s-3 2-3 4.1V26H14V10Z',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Hiroshinoharu/',
    className: 'social-github',
    icon: 'M16 3C8.8 3 3 8.8 3 16c0 5.7 3.7 10.6 8.8 12.3.6.1.8-.3.8-.6v-2.2c-3.6.8-4.4-1.5-4.4-1.5-.6-1.5-1.4-1.9-1.4-1.9-1.2-.8.1-.8.1-.8 1.3.1 2 1.4 2 1.4 1.1 2 3 1.4 3.7 1.1.1-.8.4-1.4.8-1.7-2.9-.3-5.9-1.4-5.9-6.4 0-1.4.5-2.6 1.4-3.5-.1-.3-.6-1.7.1-3.5 0 0 1.1-.4 3.6 1.3 1-.3 2.2-.4 3.3-.4s2.3.1 3.3.4c2.5-1.7 3.6-1.3 3.6-1.3.7 1.8.2 3.2.1 3.5.9.9 1.4 2.1 1.4 3.5 0 5-3 6.1-5.9 6.4.5.4.9 1.2.9 2.5v3.6c0 .3.2.7.9.6A13 13 0 0 0 29 16C29 8.8 23.2 3 16 3Z',
  },
  {
    label: 'NextPlay',
    href: 'https://nextplay.up.railway.app/',
    className: 'social-nextplay',
    icon: 'M8 8h16a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4h-3l-2.5 3h-5L11 21H8a4 4 0 0 1-4-4v-5a4 4 0 0 1 4-4Zm2 4v2H8v2h2v2h2v-2h2v-2h-2v-2h-2Zm11 .5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm4 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z',
  },
  {
    label: 'Email',
    href: 'mailto:maxceban2019@gmail.com',
    className: 'social-email',
    icon: 'M5 8h22v16H5V8Zm2.4 2 8.6 6.4 8.6-6.4H7.4ZM7 22h18v-9.2l-9 6.7-9-6.7V22Z',
  },
]

function App() {
  return (
    <main className="site-shell">
      <header className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Max Ceban home">
          <img src={githubPfp} alt="Max Ceban logo" />
        </a>
        <nav>
          <a href="#work">Work</a>
          <a href="#stack">Stack</a>
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
          <h2>Building software, exploring data, and solving problems</h2>
        </div>
        <div className="about-panel">
          <figure className="about-photo">
            <img src={maxPhoto} alt="Portrait of Max Ceban" />
          </figure>
          <div className="about-copy">
            <p>
              I'm a Computer Science graduate with an interest in software development, data analytics and building practical solutions with technology.
            </p>
            <p>
              I enjoy working across the development process, from analysing data and automating workflows to building applications and integrating APIs. I'm always looking for opportunities to expand my skills and take on new technical challenges.
            </p>
          </div>
        </div>
      </section>

      <section className="section stack-section" id="stack">
        <div className="section-heading">
          <p className="eyebrow">Tech Stack</p>
          <h2>Languages, frameworks, data tools, and deployment experience.</h2>
        </div>

        <div className="stack-grid">
          {skillGroups.map((group) => (
            <article className="stack-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="stack-list">
                {group.items.map((tech) => (
                  <span className="tech-chip" key={tech}>
                    <svg className="tech-icon" viewBox="0 0 32 32" aria-hidden="true">
                      <circle className="tech-icon-bg" cx="16" cy="16" r="13" />
                      <text x="16" y="19" textAnchor="middle">
                        {techIconText[tech] ?? tech.slice(0, 2)}
                      </text>
                    </svg>
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected Work</p>
          <h2>Software, machine learning, and data automation projects.</h2>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className={`project-poster poster-${index + 1}`}>
                <ProjectIllustration index={index} />
                <span>{project.year}</span>
              </div>
              <div className="project-meta">
                <span>{project.category}</span>
                <span>{project.year}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack" aria-label={`${project.title} tech stack`}>
                {project.stack.map((tech) => (
                  <span className="tech-chip" key={tech}>
                    <svg className="tech-icon" viewBox="0 0 32 32" aria-hidden="true">
                      <circle className="tech-icon-bg" cx="16" cy="16" r="13" />
                      <text x="16" y="19" textAnchor="middle">
                        {techIconText[tech] ?? tech.slice(0, 2)}
                      </text>
                    </svg>
                    {tech}
                  </span>
                ))}
              </div>
              <a
                className="project-link"
                href={project.projectUrl}
                target="_blank"
                rel="noreferrer"
              >
                <svg className="project-link-icon" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M16 3C8.8 3 3 8.8 3 16c0 5.7 3.7 10.6 8.8 12.3.6.1.8-.3.8-.6v-2.2c-3.6.8-4.4-1.5-4.4-1.5-.6-1.5-1.4-1.9-1.4-1.9-1.2-.8.1-.8.1-.8 1.3.1 2 1.4 2 1.4 1.1 2 3 1.4 3.7 1.1.1-.8.4-1.4.8-1.7-2.9-.3-5.9-1.4-5.9-6.4 0-1.4.5-2.6 1.4-3.5-.1-.3-.6-1.7.1-3.5 0 0 1.1-.4 3.6 1.3 1-.3 2.2-.4 3.3-.4s2.3.1 3.3.4c2.5-1.7 3.6-1.3 3.6-1.3.7 1.8.2 3.2.1 3.5.9.9 1.4 2.1 1.4 3.5 0 5-3 6.1-5.9 6.4.5.4.9 1.2.9 2.5v3.6c0 .3.2.7.9.6A13 13 0 0 0 29 16C29 8.8 23.2 3 16 3Z" />
                </svg>
                {project.projectLinkLabel}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Open to software, data, and graduate technology opportunities.</h2>
          <p className="contact-copy">
            Reach out if you want to discuss a role, collaborate on a project, or see more detail about NextPlay, my data work, or my machine learning projects.
          </p>
        </div>
        <div className="social-panel" aria-label="Social links">
          {socials.map((social) => (
            <a
              className={`social-card ${social.className}`}
              href={social.href}
              key={social.label}
              target={social.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={social.href.startsWith('mailto:') ? undefined : 'noreferrer'}
            >
              <svg
                className="social-icon"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d={social.icon} />
              </svg>
              <span>{social.label}</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
