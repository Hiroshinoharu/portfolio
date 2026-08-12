# Max Ceban Portfolio

Personal portfolio website built with React, TypeScript, Vite, and CSS. The site presents software, data, and machine learning projects with an anime/cyber-inspired visual style.

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
