# Max Ceban Portfolio

[![CI](https://github.com/Hiroshinoharu/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/Hiroshinoharu/portfolio/actions/workflows/ci.yml)

Personal portfolio website built with React, TypeScript, Vite, and CSS. The site presents software, data, and machine learning projects with an anime/cyber-inspired visual style.

## NextPlay Case Study

**2026 · Full-stack development & machine learning**

**Goal:** Deliver personalised game recommendations from user interaction data.

**My contribution:** Built the React and Vite frontend and connected Go and FastAPI services around the recommendation workflow. Used PostgreSQL to store interaction data and Keras models to produce personalised recommendations. Containerised the system with Docker, with Kubernetes-oriented deployment considerations.

**Technical approach:** The platform brings together a user interface, Go core services, FastAPI and Keras for ML inference, and PostgreSQL for persistent interaction data.

**Outcome:** Delivered a deployed full-stack recommendation experience, connecting the frontend, backend services, stored data, and ML inference in one application. The project demonstrates practical experience integrating APIs, databases, and machine learning into a user-facing product.

[Open NextPlay](https://nextplay.up.railway.app/) · See the interface screenshot and architecture overview in the portfolio's Featured Project section.

## Tech Stack

- React
- TypeScript
- Vite
- Motion for React
- CSS custom properties
- Inline SVG illustrations

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```text
src/
  App.tsx       Main portfolio content, data arrays, SVG illustrations, and layout
  App.css       Component-level styling, hero art, project cards, stack cards, socials
  index.css     Global theme variables, base styles, and page background
  assets/
    github-pfp-small.png
    github-pfp.png
    max.jpeg
public/
  max-ceban-cv.pdf
  favicon.png
```

## Main Sections

### Hero

The hero introduces the portfolio with:

- headline and intro copy
- call-to-action buttons
- CV download link
- CSS-built anime/cyber banner art
- animated code-rain background
- GitHub profile image used as the logo mark

The hero art is built with regular HTML spans and CSS in `src/App.css`, not an image file.

### About

The about section includes:

- short personal introduction
- real portrait image from `src/assets/max.jpeg`
- framed image styling with a subtle screen-tone overlay

### Work Experience

The dedicated Experience section highlights the Data Analyst internship at Dublin City Council (January–August 2025), including Python pipelines, Power BI dashboards, stakeholder collaboration, and CKAN publishing automation. It includes technology badges and a confidentiality note, with a direct link from desktop and mobile navigation.

### Featured Project

The featured project section highlights NextPlay as the main case study.

It includes:

- short problem and implementation summary
- real NextPlay interface screenshot
- live app call-to-action
- compact architecture flow
- focused technical bullets

### Journey

The journey section is generated from the `journey` array in `src/App.tsx`.

It presents:

- education
- work experience
- leadership
- certifications and continued learning

The Journey section also displays the three Cisco Networking Academy CCNA course badges, with course summaries and topics. Badge images open at full size. These are presented as course badges rather than a claim of CCNA exam certification.

### Tech Stack

The tech stack section is generated from the `skillGroups` array in `src/App.tsx`.

Groups currently include:

- Languages
- Frameworks
- Data & ML
- Tools

Each item uses the shared `tech-chip` style and a small inline SVG badge.

### Projects

Project cards are generated from the `projects` array in `src/App.tsx`.

Current projects:

- NextPlay
- CNN From Scratch
- GameCheck
- MoMA Art Catalogue
- CKAN ETL Pipeline

Each card includes:

- year
- category
- description
- recruiter-friendly highlight bullets
- custom SVG illustration
- stack badges
- external project link
- confidentiality note when a repository cannot be shared

Project poster SVGs are rendered by `ProjectIllustration()` in `src/App.tsx`.

### Contact

The contact section includes:

- short availability copy
- email and CV call-to-action buttons
- social/contact panels for LinkedIn, GitHub, NextPlay, and email
- inline SVG icons for each panel

Social links are controlled by the `socials` array in `src/App.tsx`.

### Navigation and Theme

The header includes:

- section navigation links
- a mobile hamburger menu
- light and dark mode toggle

Theme state is stored in `localStorage` using the `portfolio-theme` key.

### Footer and Sharing

The footer includes a short build credit and back-to-top link.

A single carrot in the footer reveals Mambo, Tokai Teio, Kitasan Black, T.M. Opera O, and Meisho Doto using the supplied character images and automatically plays their voices in that order. Tap any character to interrupt the sequence and replay her voice clip and animation. Closing the shared disclosure stops the sound; reopening restarts from Mambo. Voices do not overlap, animations respect reduced-motion preferences, and the layout stacks on phones.

Voice clip source: [Mambo on Myinstants](https://www.myinstants.com/en/instant/mamboman-bo-shi-ge-ju-matikanetannhauser-9173/), stored locally as `src/assets/mambo.mp3`.

Tokai Teio uses a hopping animation and a [short Hachimi voice clip](https://www.myinstants.com/en/instant/tokai-teio-hachimi-short-11583/), stored as `src/assets/tokai-teio.mp3`. T.M. Opera O uses a theatrical animation and an eight-second excerpt of the [Opera O song clip on Voicemod Tuna](https://tuna.voicemod.net/sound/948d5932-a72d-4622-8b4e-58ee503d2364), stored as `src/assets/tm-opera-o-song.mp3`. Meisho Doto uses a gentle wobble and her [short Doto desu voice clip](https://www.myinstants.com/en/instant/meisho-doto-desuu-93206/), stored as `src/assets/meisho-doto.mp3`. Kitasan Black is centered between the two pairs using [official character artwork](https://umamusume.jp/character/kitasanblack?name=kitasanblack). Her [Harikitte Ikou voice clip](https://www.myinstants.com/en/instant/harikitte-ikou-kitasan-black-35732/) is stored as `src/assets/kitasan-black.mp3` and plays third in the automatic sequence.

Social sharing metadata lives in `index.html`, and the Open Graph preview image is:

- `public/og-image.svg`

### Motion

The site uses Motion for React from the `motion` package.

Beginner-friendly examples live in `src/App.tsx`:

- `motion.main` and `motion.header` for page entrance animation
- shared `reveal` and `stagger` objects for simple reusable variants
- `whileInView` for scroll reveal sections
- `AnimatePresence` for the mobile hamburger menu
- `whileHover` and `whileTap` for small interaction feedback
- `useReducedMotion` to respect reduced-motion accessibility preferences

## Editing Content

Most content is data-driven in `src/App.tsx`.

Update projects:

```ts
const projects = [
  {
    year: '2026',
    title: 'NextPlay',
    category: 'ML recommender',
    description: '...',
    highlights: ['...', '...', '...'],
    stack: ['React', 'Vite', 'Go'],
    projectUrl: 'https://example.com',
    projectLinkLabel: 'View project',
  },
]
```

For confidential projects, omit `projectUrl` and use `projectNote` instead.

Update tech stack:

```ts
const skillGroups = [
  {
    title: 'Languages',
    items: ['Python', 'Go', 'Java'],
  },
]
```

Update social links:

```ts
const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/Hiroshinoharu/',
    className: 'social-github',
    icon: '...',
  },
]
```

## Styling Notes

Global theme colors live in `src/index.css`. Light and dark mode each define their own values:

```css
:root {
  --paper: #f7f4ec;
  --ink: #17151f;
  --muted: #676271;
  --red: #e94b5f;
  --cyan: #45c7d8;
  --soft: #fffaf0;
  --panel: #ffffff;
}
```

Changing these variables updates most of the site palette.

The visual style uses:

- thick ink borders
- red/cyan accents
- cream paper background
- SVG-style project illustrations
- CSS-drawn hero character
- compact tech/social badges
- subtle Motion-powered entrance and scroll animations

## Assets

- `src/assets/github-pfp-small.png` is used for the top-left logo.
- `src/assets/github-pfp.png` is the original larger source image.
- `src/assets/max.jpeg` is used in the About section.
- `src/assets/nextplay-screenshot.jpg` is used in the Featured Project section.
- `src/assets/gamecheck-screenshot.jpg` is used in the GameCheck project card.
- `public/favicon.png` is the browser favicon.
- `public/max-ceban-cv.pdf` is linked by the CV download buttons.
- `public/og-image.svg` is used for social sharing previews.

If replacing either image, keep the same filename or update the import in `src/App.tsx`.

## Validation

Use this command before committing or deploying:

```bash
npm run build
```

This runs the TypeScript build and Vite production build.


## Reading the Code

The source files contain comments explaining each main responsibility. Start with these files in order:

1. `index.html` is the page shell, search/share metadata, and the empty `#root` container.
2. `src/main.tsx` creates the React root and renders `App` inside development `StrictMode` checks.
3. `src/App.tsx` defines portfolio content, reusable components, state, event handlers, and the page markup.
4. `src/index.css` defines light/dark theme variables and global defaults.
5. `src/App.css` styles each page section, draws the hero artwork, defines animations, and adapts layouts to different screen widths.

### React concepts used here

- **Content arrays** (`projects`, `journey`, `skillGroups`, `networkingBadges`) hold the text and links. `.map()` turns each entry into a card. Stable `key` values help React identify items across renders.
- **Props** are component inputs. `CharacterSurprise` receives its character name, image, sound, dimensions, and animation variant. `readonly` marks props that should not be reassigned.
- **State** (`useState`) stores values that affect the displayed interface. Calling its setter asks React to render again, for example when opening the menu or changing the theme.
- **Refs** (`useRef`) retain DOM objects or bookkeeping values without triggering a render. Audio refs point to actual HTML audio elements; the shared ref identifies which one owns playback.
- **Effects** (`useEffect`) synchronize React with browser APIs. The theme effect updates `<html>` and local storage. The scroll effect subscribes to events and removes its listeners during cleanup.
- **JSX** is the HTML-like markup returned by React components. Curly braces embed JavaScript expressions; `className` connects elements to CSS selectors.
- **Conditional rendering** chooses what appears. Project cards render an image when available, otherwise an SVG; confidential projects show a note instead of a public link.
- **Motion variants** define reusable `hidden` and `visible` states. Parent variants stagger child animations. Reduced-motion settings remove movement when requested.

### How the carrot works

The native `details`/`summary` pair supplies keyboard and touch behavior. Its click handler starts Mambo while the click is still an explicit user gesture. One shared sequence audio element changes its source after each `ended` event, playing Mambo, Teio, Kitasan, Opera O, then Doto. The sequence stops when there is no next clip.

The currently playing audio sets the active character. Her dance and sparkles loop while the clip plays and stop when it ends, pauses, or the reveal closes. This prevents a dance from finishing before an image loads or before her turn in the sequence. Each character also has an individual audio element. Tapping her stops the current audio, takes playback ownership, and changes a replay counter. That counter becomes a React `key`, causing the animated image wrapper to remount and restart its CSS animation. Closing the carrot pauses and rewinds the active audio and clears ownership so the sequence cannot continue.

To add another character, import its image/sound, add a `CharacterSurprise` tile, extend the variant type and sequence list, and add an animation plus its reduced-motion override in CSS.

### CSS concepts used here

Custom properties such as `--ink` and `--paper` carry theme colors. Grid handles section columns; flexbox handles wrapping tags and action links. `minmax(0, 1fr)` allows grid children to shrink, `clamp()` scales sizes within limits, and `object-fit: contain` preserves character image proportions. `::before` and `::after` draw decorative shapes. `@keyframes` describes animation poses over time; `@media` applies different rules for viewport widths and reduced-motion preferences.

### Build and configuration files

| File | Purpose |
| --- | --- |
| `package.json` | npm commands, runtime dependencies, and development tooling. This is strict JSON, so explanations live here rather than as invalid inline comments. |
| `package-lock.json` | Automatically generated exact dependency versions; `npm ci` installs from this lockfile. |
| `vite.config.ts` | Enables React and Tailwind processing for development and production builds. |
| `eslint.config.js` | Checks JavaScript/TypeScript and React patterns; ignores generated `dist` files. |
| `tsconfig.json` | Coordinates the application and tooling TypeScript projects. |
| `tsconfig.app.json` | Type-checks browser/React source and Vite asset imports. TypeScript accepts comments in these configuration files. |
| `tsconfig.node.json` | Type-checks the Vite configuration in the Node environment. |
| `.github/workflows/ci.yml` | Runs dependency installation, build, and lint checks for pushes and pull requests. |
| `.gitignore` | Keeps dependencies, generated output, logs, and machine-specific files out of Git. |

`npm run dev` starts the local preview with live updates. `npm run build` type-checks and generates `dist/`. `npm run lint` checks source quality. `npm run preview` serves the built site. React supplies components and hooks, Motion supplies React animations, and Vite bundles imported assets. Additional declared packages are only part of the app's behavior when source code imports or uses them.

SVG files have comments describing their role; path coordinates are vector artwork data. Image, audio, and PDF files are binary assets rather than executable source. `dist/` and `node_modules/` are generated, so their contents should be regenerated rather than maintained by hand.
