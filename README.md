# Max Ceban Portfolio

Personal portfolio website built with React, TypeScript, Vite, and CSS. The site presents software, data, and machine learning projects with an anime/cyber-inspired visual style.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS import support
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
    github-pfp.png
    max.jpeg
```

## Main Sections

### Hero

The hero introduces the portfolio with:

- headline and intro copy
- call-to-action buttons
- CSS-built anime/cyber banner art
- animated code-rain background
- GitHub profile image used as the logo mark

The hero art is built with regular HTML spans and CSS in `src/App.css`, not an image file.

### About

The about section includes:

- short personal introduction
- real portrait image from `src/assets/max.jpeg`
- framed image styling with a subtle screen-tone overlay

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
- custom SVG illustration
- stack badges

Project poster SVGs are rendered by `ProjectIllustration()` in `src/App.tsx`.

### Contact

The contact section includes:

- short availability copy
- social/contact panels for LinkedIn, GitHub, NextPlay, and email
- inline SVG icons for each panel

Social links are controlled by the `socials` array in `src/App.tsx`.

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
    stack: ['React', 'Vite', 'Go'],
  },
]
```

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

Global theme colors live in `src/index.css`:

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

## Assets

- `src/assets/github-pfp.png` is used for the top-left logo.
- `src/assets/max.jpeg` is used in the About section.

If replacing either image, keep the same filename or update the import in `src/App.tsx`.

## Validation

Use this command before committing or deploying:

```bash
npm run build
```

This runs the TypeScript build and Vite production build.
