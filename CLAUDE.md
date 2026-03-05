# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Alessio Arzenton. React 19 SPA with Vite, deployed to GitHub Pages via GitHub Actions on push to `main`.

## Commands

- `npm run dev` — Start dev server (Vite HMR)
- `npm run build` — Production build to `dist/`
- `npm run lint` — ESLint (flat config, ESLint 9)
- `npm run preview` — Preview production build locally

No test framework is configured.

## Architecture

**Stack:** React 19 + React Router 6 + Tailwind CSS 4 + Framer Motion + Vite 7. JavaScript only (no TypeScript).

**Routing** (`App.jsx`): Three routes — `/`, `/about`, `/projects`. All pages are lazy-loaded with `React.lazy()` and wrapped in `PageTransition` (Framer Motion fade-in).

**Layout:** `App.jsx` renders a shared layout: `Navbar` + `ParticleBackground` + page content + `Footer`. The `ParticleBackground` is a full-screen canvas animation behind all content.

**Data flow:** No state management library or Context. Hooks handle all state:
- `useTheme` — Dark/light mode toggle, persisted in localStorage
- `useGithubRepos` — Fetches repos from GitHub API with 15-minute localStorage cache
- `usePageTitle` — Sets `document.title` dynamically

**Resume data** is hardcoded in `src/data/resume.js` (experience, education, skills), not fetched from an API.

**Projects page** fetches public repos via GitHub API, filters out forks/private/self-referential repos, extracts tags from `language` + `topics`, and supports multi-tag filtering (OR logic).

## Theming

Dark theme is the default. Colors use CSS custom properties defined in `src/index.css`:
- `:root` — dark theme values (`--bg`, `--surface`, `--border-color`, `--text`, `--muted`)
- `:root.light` — light theme overrides
- Tailwind maps these via `@theme` block: use `bg-bg`, `text-text`, `border-border`, `text-muted`, `bg-surface`
- Accent color: `--color-accent: #646cff`
- Font: Inter (Google Fonts)

## GitHub Pages SPA Routing

`public/404.html` redirects unknown paths back to `index.html` with a query param. `main.jsx` reads this param on load and replaces the URL to restore client-side routing.

## Deployment

Push to `main` triggers `.github/workflows/deploy.yml`: installs deps with `npm ci`, builds, and deploys `dist/` to GitHub Pages. The workflow uses Node 22.

## Config

Site-wide settings (GitHub username, API URL, site title) live in `src/config.js`.
