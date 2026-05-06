# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static personal portfolio website for Felipe Simoes, deployed on GitHub Pages. No build process, no package manager, no test framework — just HTML, CSS, and vanilla JavaScript served directly.

## Deployment

Push to `main` branch. GitHub Pages auto-deploys from repo root to `https://fdsimoes-git.github.io`.

## Local Preview

No build step. Either open `index.html` directly, or serve from the repo root with `python3 -m http.server 8000` to exercise relative paths and CDN scripts as they behave in production.

## Architecture

Single-page site with three source files:

- **index.html** — all content in semantic sections (hero, about, experience, education, skills, projects, publications, contact). Sections are numbered 01-07 (hero unnumbered). All textual content (bio, job timeline, publication list, project cards) is hard-coded here — there is no CMS or data file, so content updates are HTML edits.
- **styles.css** — dark theme using CSS custom properties (design tokens in `:root`). Responsive breakpoints at 1024px (tablet), 768px (mobile), 480px (small mobile). Gold accent color `#c9a96e`.
- **script.js** — handles mobile nav toggle, smooth scroll, navbar scroll effect, active nav link tracking, IntersectionObserver-based scroll-reveal animations, EmailJS contact form submission with validation, toast notifications, and scroll-to-top button.

## External Dependencies (CDN)

- Google Fonts: Syne (display), DM Sans (body)
- Font Awesome 6.5 (icons)
- EmailJS SDK (contact form — service `service_f7ihtqq`, template `template_ilr0pil`)
- Umami Analytics (privacy-focused tracking)

## Key Patterns

- CSS animations use two systems: `animate-in` class with `@keyframes fadeInUp` for hero entrance, and `reveal`/`reveal-stagger` classes triggered by IntersectionObserver for scroll-triggered elements.
- The contact form is handled entirely client-side via EmailJS — no backend. The EmailJS public key is initialized inline in `script.js` and the recipient address is hard-coded in the `emailjs.send` call.
- All images (profile photo, project screenshots) are in the repo root as PNGs/JPEG. They are unoptimized originals (multiple are 3–6 MB) — be mindful when adding new ones.
- The favicon is an external SVG file (`favicon.svg`) using the same gold accent (`#c9a96e`) as the site.
