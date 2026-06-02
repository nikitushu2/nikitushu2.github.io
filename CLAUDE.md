# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static single-page portfolio. No build step, no framework, no package manager — plain HTML, CSS, and minimal vanilla JS.

## Development

Open `index.html` directly in a browser, or use a local static server:

```bash
python3 -m http.server 8080
```

## Architecture

- `index.html` — single page; all sections live here
- `css/style.css` — all styles; starts with a box-sizing/margin/padding reset
- `js/main.js` — scroll interaction only (Intersection Observer or CSS scroll-driven animations)
- `assets/images/` — static image assets

## Constraints

- No npm, no bundler, no framework
- External libraries (e.g. GSAP) loaded via CDN `<script>` tags only
- Animations prefer CSS scroll-driven animations (`animation-timeline: scroll()`); JS only when CSS can't handle it

## Project description

This is a static web app with animations to showcase my portfolio. The page is not scrolled vertically but rather horizontally with a scroll bar, changing the pages via proper animation. The design is similar to https://neon.com/ (dark colors and stylish).

Four pages: intro text with personal photo, tech stack and education, project photo and description with links, contact info.
