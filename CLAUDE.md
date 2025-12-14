# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Frontier Site Operations is a static website for a contractor-support logistics company in Utah. The site is built with vanilla HTML, CSS, and JavaScript—no build tools or frameworks.

## Development Commands

```bash
# Serve locally with Python
python -m http.server 8000

# Or with Node.js
npx serve .
```

Open `http://localhost:8000` in your browser. No build step required—edit files and refresh.

## Architecture

### File Structure
- `index.html`, `services.html`, `about.html`, `contact.html`, `service-area.html` — Page templates
- `styles.css` — All styling with CSS variables for the design system
- `script.js` — Mobile menu, scroll effects, form validation, scroll animations
- `images/` — SVG logo and graphics
- `docs/` — Project documentation and knowledge base

### Key Documentation Files
- `docs/fso_master_knowledge.json` — **Single source of truth** for company info, services, and brand guidelines. Reference this before generating any content.
- `docs/fso_website_build.md` — Build roadmap and task tracker

### CSS Variables (design tokens)
Defined in `:root` in `styles.css`:
- `--brand-orange: #C13516` — Primary brand color (Allis Chalmers Orange)
- `--brand-orange-dark: #A12D13` — Hover states
- `--charcoal: #2D3748` — Primary text and headers
- `--font-display: 'Archivo'` — Headings
- `--font-mono: 'Space Mono'` — Monospace accents

### Brand Color Rules
From the knowledge base, the official paint-anchored brand colors are:
- **Primary:** Allis Chalmers Orange `#C13516` (fleet/physical branding)
- **Secondary:** Massey Ferguson Gray `#5A5A5E`
- **Accent:** Low Gloss Black `#1A1A1A`

## Important Constraints

1. **No fabricated information** — All company claims must exist in `fso_master_knowledge.json`
2. **Contact info** — Phone `(805) 434-7063` is live; email `info@frontiersiteops.com` is placeholder
3. **Pre-operational status** — The company is building its fleet; avoid claims about existing equipment or completed jobs
4. **Contact form** — Uses Netlify Forms (`data-netlify="true"`) for submission

## Deployment

The site is designed for GitHub Pages or Netlify:
- Push to `main` triggers auto-deploy
- `CNAME` file contains the custom domain configuration
