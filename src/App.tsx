import { useEffect, useState, type MouseEvent } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import './App.css'
import gameCheckScreenshot from './assets/gamecheck-screenshot.jpg'
import githubPfp from './assets/github-pfp-small.png'
import maxPhoto from './assets/max.jpeg'
import nextPlayScreenshot from './assets/nextplay-screenshot.jpg'

// Main portfolio cards. The UI renders these into the Selected Work section.
const projects = [
  {
    year: '2026',
    title: 'NextPlay',
    category: 'ML recommender',
    description:
      'Distributed full-stack game recommender using Go, FastAPI, PostgreSQL, Keras, Docker, and Kubernetes to deliver personalised recommendations from user interaction data.',
    highlights: [
      'Built a deployed full-stack recommendation experience with a React and Vite frontend.',
      'Connected Go, FastAPI, PostgreSQL, Keras, Docker, and Kubernetes across the platform.',
      'Focused on personalised recommendations from user interaction data.',
    ],
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
    highlights: [
      'Implemented core CNN logic manually in Java instead of relying on a machine learning framework.',
      'Reached 93% image classification accuracy during testing.',
      'Added multithreaded training and a custom GUI for reviewing metrics.',
    ],
    stack: ['Java', 'ML', 'Threads', 'GUI'],
    projectUrl: 'https://github.com/Hiroshinoharu/machineLearningProject',
    projectLinkLabel: 'View on GitHub',
  },
  {
    year: '2024',
    title: 'GameCheck',
    category: 'Web dev group project',
    description:
      'Third year game review website built with Denis Bajgora, helping users search, filter, review, like, favorite, and track games through an account dashboard.',
    highlights: [
      'Implemented game search and filtering by platform and genre.',
      'Designed game detail pages with ratings, screenshots, descriptions, and metadata.',
      'Added account features for login, signup, liked games, favorites, and dashboard management.',
      'Included discovery views for upcoming games and popular 2024 releases.',
    ],
    stack: ['JavaScript', 'EJS', 'CSS'],
    image: gameCheckScreenshot,
    imageAlt: 'GameCheck homepage screenshot',
    projectUrl: 'https://github.com/denisbajgora5/GameCheck',
    projectLinkLabel: 'View on GitHub',
  },
  {
    year: '2026',
    title: 'MoMA Art Catalogue',
    category: 'Full-stack app',
    description:
      'Full-stack artwork catalogue for browsing, searching, filtering, paginating, adding, editing, and deleting MoMA artwork records stored in MongoDB.',
    highlights: [
      'Built a React and Vite frontend for browsing large artwork records.',
      'Created an Express and MongoDB backend with server-side search, filters, and pagination.',
      'Added full record management with create, edit, and delete flows.',
    ],
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
    highlights: [
      'Automated dataset cleaning and preparation with Python ETL scripts.',
      'Integrated CKAN API uploads into a repeatable publishing workflow.',
      'Supported reporting work with Power BI-ready outputs.',
    ],
    stack: ['Python', 'ETL', 'CKAN API', 'Power BI'],
    projectNote: 'Repository unavailable due to confidentiality.',
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

const journey = [
  {
    period: '2021 - 2026',
    type: 'Education',
    title: 'BSc (Hons) Computer Science (Infrastructure)',
    place: 'Technological University Dublin',
    detail: 'First Class Honours with coursework in algorithms, operating systems, databases, software engineering, and networking.',
  },
  {
    period: 'Jan 2025 - Aug 2025',
    type: 'Work Experience',
    title: 'Data Analyst Intern',
    place: 'Dublin City Council',
    detail: 'Built Python data pipelines, delivered 10+ Power BI dashboards, worked with 20+ stakeholders, and automated data scraping and publishing workflows.',
  },
  {
    period: '2023 - 2026',
    type: 'Leadership',
    title: 'Class Representative',
    place: 'TU Dublin Students Union',
    detail: 'Represented 50+ students, raised course concerns, supported timetable coordination, and improved student-lecturer communication.',
  },
  {
    period: 'Certifications',
    type: 'Learning',
    title: 'Cloud, Networking, and Linux',
    place: 'AWS / Cisco / NDG',
    detail: 'Completed AWS Cloud Practitioner Essentials, Cisco CCNA 1-3 coursework, and NDG Linux Essentials.',
  },
]

const techIconText: Record<string, string> = {
  React: 'Re',
  Vite: 'V',
  JavaScript: 'JS',
  EJS: 'EJS',
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
  Auth: 'AU',
  Dashboard: 'DB',
  CSS: 'CSS',
  ETL: 'ETL',
  'CKAN API': 'CK',
  'Power BI': 'BI',
}

// Lightweight SVG poster art for each project card, selected by project index.
function ProjectIllustration({ index }: { readonly index: number }) {
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

const navLinks = [
  { href: '#top', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#featured', label: 'Featured' },
  { href: '#journey', label: 'Journey' },
  { href: '#stack', label: 'Stack' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
]

const nextPlayFlow = [
  { label: 'React + Vite', detail: 'User interface' },
  { label: 'Go API', detail: 'Core services' },
  { label: 'FastAPI + Keras', detail: 'ML inference' },
  { label: 'PostgreSQL', detail: 'Interaction data' },
]

const reveal = {
  hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState(navLinks[0].href)
  const reduceMotion = useReducedMotion()
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const storedTheme = window.localStorage.getItem('portfolio-theme')

    if (storedTheme === 'light' || storedTheme === 'dark') {
      return storedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace('#', ''))

    const updateScrollState = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0
      const activationLine = window.innerHeight * 0.32
      const currentSection = sectionIds.reduce((current, sectionId) => {
        const section = document.getElementById(sectionId)

        if (!section) {
          return current
        }

        return section.getBoundingClientRect().top <= activationLine ? `#${sectionId}` : current
      }, navLinks[0].href)

      setScrollProgress(Math.min(Math.max(progress, 0), 1))
      setActiveSection(currentSection)
    }

    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })
    window.addEventListener('resize', updateScrollState)
    window.addEventListener('hashchange', updateScrollState)

    return () => {
      window.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', updateScrollState)
      window.removeEventListener('hashchange', updateScrollState)
    }
  }, [])

  const nextTheme = theme === 'light' ? 'dark' : 'light'
  const revealTransition = reduceMotion ? { duration: 0 } : { duration: 0.45, ease: 'easeOut' as const }
  const handleMobileNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    const target = document.getElementById(href.replace('#', ''))

    if (!target) {
      return
    }

    event.preventDefault()
    setIsMenuOpen(false)
    setActiveSection(href)
    window.history.pushState(null, '', href)

    window.setTimeout(() => {
      target.scrollIntoView({
        behavior: reduceMotion ? 'auto' : 'smooth',
        block: 'start',
      })
    }, 0)
  }

  return (
    <motion.main
      className="site-shell"
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={reduceMotion ? undefined : { opacity: 1 }}
      transition={{ duration: 0.35 }}
    >
      <div className="scroll-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${scrollProgress})` }} />
      </div>
      <motion.header
        className="topbar"
        aria-label="Primary navigation"
        initial={reduceMotion ? false : { opacity: 0, y: -14 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={revealTransition}
      >
        <motion.a
          className="brand"
          href="#top"
          aria-label="Max Ceban home"
          whileHover={reduceMotion ? undefined : { y: -2 }}
          whileTap={reduceMotion ? undefined : { scale: 0.96 }}
        >
          <img src={githubPfp} alt="Max Ceban logo" />
        </motion.a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-controls="primary-nav"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span aria-hidden="true" />
        </button>
        <nav className="desktop-nav" aria-label="Desktop navigation">
          {navLinks.map((link) => (
            <a
              className={activeSection === link.href ? 'is-active' : undefined}
              href={link.href}
              key={link.href}
              aria-current={activeSection === link.href ? 'location' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <AnimatePresence initial={false}>
          {isMenuOpen ? (
            <motion.nav
              id="primary-nav"
              className="mobile-nav is-open"
              aria-label="Mobile navigation"
              initial={reduceMotion ? false : { opacity: 0, height: 0, y: -8 }}
              animate={reduceMotion ? { opacity: 1, height: 'auto' } : { opacity: 1, height: 'auto', y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, height: 0, y: -8 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
            >
              {navLinks.map((link) => (
                <motion.a
                  className={activeSection === link.href ? 'is-active' : undefined}
                  href={link.href}
                  key={link.href}
                  aria-current={activeSection === link.href ? 'location' : undefined}
                  onClick={(event) => handleMobileNavClick(event, link.href)}
                  whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.nav>
          ) : null}
        </AnimatePresence>
        <button
          className="theme-toggle"
          type="button"
          aria-label={`Switch to ${nextTheme} mode`}
          aria-pressed={theme === 'dark'}
          onClick={() => setTheme(nextTheme)}
        >
          <span aria-hidden="true">{theme === 'light' ? 'DRK' : 'LIT'}</span>
          {theme === 'light' ? 'Dark' : 'Light'}
        </button>
      </motion.header>

      <section className="hero" id="top">
        <motion.div
          className="hero-copy"
          variants={stagger}
          initial={reduceMotion ? false : 'hidden'}
          animate="visible"
        >
          <motion.p className="eyebrow" variants={reveal} transition={revealTransition}>Software Development / Data Analytics / Problem Solving</motion.p>
          <motion.h1 variants={reveal} transition={revealTransition}>Max Ceban</motion.h1>
          <motion.p className="role-title" variants={reveal} transition={revealTransition}>Software Developer & Data Analyst</motion.p>
          <motion.p className="intro" variants={reveal} transition={revealTransition}>
            Computer Science graduate building full-stack applications, data pipelines, and practical tools that turn technical ideas into useful products.
          </motion.p>
          <motion.div className="hero-actions" variants={reveal} transition={revealTransition}>
            <a className="button primary" href="#work">
              View work
            </a>
            <a className="button" href="/max-ceban-cv.pdf" target="_blank" rel="noreferrer">
              Download CV
            </a>
            <a className="button" href="#contact">
              Say hello
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-art"
          aria-label="Anime-inspired portfolio panel"
          initial={reduceMotion ? false : { opacity: 0, x: 38, rotate: 1 }}
          animate={reduceMotion ? undefined : { opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.55, delay: 0.18, ease: 'easeOut' }}
        >
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
        </motion.div>
      </section>

      <section className="marquee" aria-label="Services">
        {services.map((service) => (
          <motion.span
            key={service}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={revealTransition}
          >
            {service}
          </motion.span>
        ))}
      </section>

      <motion.section
        className="section split"
        id="about"
        initial={reduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div>
          <motion.p className="eyebrow" variants={reveal} transition={revealTransition}>Hello</motion.p>
          <motion.h2 variants={reveal} transition={revealTransition}>Building software, exploring data, and solving problems</motion.h2>
        </div>
        <motion.div className="about-panel" variants={reveal} transition={revealTransition}>
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
        </motion.div>
      </motion.section>

      <motion.section
        className="section featured-project"
        id="featured"
        initial={reduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.16 }}
        variants={stagger}
      >
        <motion.div className="section-heading" variants={reveal} transition={revealTransition}>
          <p className="eyebrow">Featured Project</p>
          <h2>NextPlay connects full-stack engineering with machine learning recommendations.</h2>
        </motion.div>

        <motion.div className="featured-grid" variants={reveal} transition={revealTransition}>
          <article className="featured-copy">
            <div className="featured-meta">
              <span>Live app</span>
              <span>2026</span>
            </div>
            <h3>Personalised game recommendations</h3>
            <p>
              NextPlay is the strongest showcase project on this portfolio: a deployed recommender system that combines a React interface, backend services, persistent data, and machine learning inference.
            </p>
            <ul className="featured-list">
              <li>Built the frontend experience with React and Vite.</li>
              <li>Connected Go and FastAPI services around recommendation workflows.</li>
              <li>Used PostgreSQL interaction data and Keras models for personalised outputs.</li>
              <li>Containerised the system with Docker and Kubernetes-oriented deployment thinking.</li>
            </ul>
            <div className="featured-actions">
              <a className="button primary" href="https://nextplay.up.railway.app/" target="_blank" rel="noreferrer">
                Open NextPlay
              </a>
              <a className="button" href="#work">
                View all work
              </a>
            </div>
          </article>

          <div className="featured-media" aria-label="NextPlay app screenshot and architecture overview">
            <figure className="nextplay-preview">
              <img src={nextPlayScreenshot} alt="NextPlay game recommendation homepage screenshot" />
              <figcaption>Live NextPlay interface</figcaption>
            </figure>

            <div className="architecture-card" aria-label="NextPlay architecture overview">
              <div className="architecture-screen">
                {nextPlayFlow.map((step, index) => (
                  <motion.div
                    className="architecture-node"
                    key={step.label}
                    variants={reveal}
                    transition={{ ...revealTransition, delay: reduceMotion ? 0 : index * 0.04 }}
                  >
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <strong>{step.label}</strong>
                    <small>{step.detail}</small>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        className="section journey-section"
        id="journey"
        initial={reduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.16 }}
        variants={stagger}
      >
        <div className="section-heading">
          <motion.p className="eyebrow" variants={reveal} transition={revealTransition}>Journey</motion.p>
          <motion.h2 variants={reveal} transition={revealTransition}>Education, experience, leadership, and continued learning.</motion.h2>
        </div>

        <div className="journey-tree">
          {journey.map((item) => (
            <motion.article className="journey-node" key={`${item.period}-${item.title}`} variants={reveal} transition={revealTransition}>
              <div className="journey-marker" aria-hidden="true" />
              <div className="journey-card">
                <div className="journey-meta">
                  <span>{item.period}</span>
                  <span>{item.type}</span>
                </div>
                <h3>{item.title}</h3>
                <strong>{item.place}</strong>
                <p>{item.detail}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="section stack-section"
        id="stack"
        initial={reduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.16 }}
        variants={stagger}
      >
        <div className="section-heading">
          <motion.p className="eyebrow" variants={reveal} transition={revealTransition}>Tech Stack</motion.p>
          <motion.h2 variants={reveal} transition={revealTransition}>Languages, frameworks, data tools, and deployment experience.</motion.h2>
        </div>

        <div className="stack-grid">
          {skillGroups.map((group) => (
            <motion.article className="stack-card" key={group.title} variants={reveal} transition={revealTransition}>
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
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="section"
        id="work"
        initial={reduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={stagger}
      >
        <div className="section-heading">
          <motion.p className="eyebrow" variants={reveal} transition={revealTransition}>Selected Work</motion.p>
          <motion.h2 variants={reveal} transition={revealTransition}>Software, machine learning, and data automation projects.</motion.h2>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.title}
              variants={reveal}
              transition={revealTransition}
              whileHover={reduceMotion ? undefined : { y: -6 }}
            >
              <div className={`project-poster poster-${index + 1}`}>
                {'image' in project ? (
                  <img className="project-screenshot" src={project.image} alt={project.imageAlt} />
                ) : (
                  <ProjectIllustration index={index} />
                )}
                <span>{project.year}</span>
              </div>
              <div className="project-meta">
                <span>{project.category}</span>
                <span>{project.year}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="project-highlights" aria-label={`${project.title} highlights`}>
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
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
              {'projectUrl' in project ? (
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
              ) : (
                <p className="project-note">{project.projectNote}</p>
              )}
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="section contact"
        id="contact"
        initial={reduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        variants={stagger}
      >
        <motion.div variants={reveal} transition={revealTransition}>
          <p className="eyebrow">Contact</p>
          <h2>Open to software, data, and graduate technology opportunities.</h2>
          <p className="contact-copy">
            I'm open to graduate software, junior developer, and data analyst roles. Reach out if you want to discuss a role, collaborate on a project, or see more detail about NextPlay, my data work, or my machine learning projects.
          </p>
          <div className="contact-actions">
            <a className="button primary" href="mailto:maxceban2019@gmail.com">
              Email me
            </a>
            <a className="button" href="/max-ceban-cv.pdf" target="_blank" rel="noreferrer">
              Download CV
            </a>
          </div>
        </motion.div>
        <div className="social-panel" aria-label="Social links">
          {socials.map((social) => (
            <motion.a
              className={`social-card ${social.className}`}
              href={social.href}
              key={social.label}
              target={social.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={social.href.startsWith('mailto:') ? undefined : 'noreferrer'}
              variants={reveal}
              transition={revealTransition}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
            >
              <svg
                className="social-icon"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d={social.icon} />
              </svg>
              <span>{social.label}</span>
            </motion.a>
          ))}
        </div>
      </motion.section>

      <footer className="site-footer">
        <p>Max Ceban © 2026</p>
        <p>Built with React, Vite, TypeScript, and Motion.</p>
        <a href="#top">Back to top</a>
      </footer>
    </motion.main>
  )
}

export default App
