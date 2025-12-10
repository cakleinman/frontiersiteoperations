# Frontier Site Operations

> **Contractor-support logistics for Utah's commercial contractors and government buyers.**

## Project Status

| Phase | Status |
|-------|--------|
| Brand System | ✅ Complete |
| Design System | 🔄 In Progress |
| Content | ⬜ Not Started |
| Development | 🔄 Rebuilding |
| Launch | ⬜ Not Started |

**Current Focus:** Finalizing design system (typography, logo) before page development

See [`docs/fso_website_build.md`](docs/fso_website_build.md) for the full build roadmap.

---

## Brand Colors

### Paint-Anchored Colors (Rust-Oleum Farm & Implement)

All fleet colors are anchored to real Rust-Oleum products for consistency and easy touch-ups.

| Role | Name | Hex | Rust-Oleum # | Usage |
|------|------|-----|--------------|-------|
| **Primary** | Allis Chalmers Orange | `#C13516` | 280156 / 280176 | Branded surfaces, CTAs, accents |
| **Secondary** | Massey Ferguson Gray | `#5A5A5E` | 280157 / 280174 | Structure, headers, nav |
| **Accent** | Low Gloss Black | `#1A1A1A` | 280107 / 280168 | Frames, text, dark sections |

### Digital-Only Colors

| Name | Hex | Usage |
|------|-----|-------|
| Warm White | `#F8F7F5` | Page backgrounds |
| Pure White | `#FFFFFF` | Cards, content areas |
| Text Primary | `#1E1E1E` | Body text |

### Color Rules

✅ **Allowed:**
- White text on Gray, Black, or Orange backgrounds
- Orange text on Black backgrounds
- Orange buttons on Gray or Black backgrounds
- Black text on White backgrounds

⛔ **Forbidden:**
- Orange text on Gray backgrounds (poor contrast)

---

## Documentation

| File | Purpose |
|------|---------|
| [`docs/fso_master_knowledge.json`](docs/fso_master_knowledge.json) | Single source of truth for all company info, services, brand guidelines |
| [`docs/fso_website_build.md`](docs/fso_website_build.md) | Website build roadmap and progress tracker |
| [`docs/FSO-OPUS-PROMPTS.md`](docs/FSO-OPUS-PROMPTS.md) | Multi-agent system prompts |

---

## Company Overview

- **Legal Name:** Frontier Site Operations LLC
- **Location:** Provo, Utah
- **Service Area:** Utah County, Salt Lake County, I-15 corridor
- **Owner:** Christopher Kleinman (100%, Veteran-owned)
- **Status:** Pre-operational (building fleet)

### Services

1. **Equipment Transport** — Rental equipment pickup/delivery, machinery moves
2. **Jobsite Services** — Light towers, generators, fuel cubes
3. **Materials Delivery** — Lumber, hardware, contractor overflow
4. **Waste & Container** — Dumpsters, debris transport

### Certifications

| Certification | Status |
|---------------|--------|
| Veteran-Owned | ✅ Yes (Utah Army National Guard) |
| VOSB | 🔄 In Progress |
| SAM | 🔄 In Progress |
| SASP | 🔄 In Progress |

---

## Tech Stack

- **Site:** Static HTML/CSS/JS
- **Hosting:** Netlify (planned)
- **Forms:** Netlify Forms (planned)
- **Repository:** GitHub

---

## File Structure

```
frontiersiteoperations/
├── docs/
│   ├── fso_master_knowledge.json   # Source of truth
│   ├── fso_website_build.md        # Build tracker
│   └── FSO-OPUS-PROMPTS.md         # Agent prompts
├── src/                            # Website source (rebuilding)
│   ├── index.html
│   ├── services.html
│   ├── about.html
│   ├── contact.html
│   ├── service-area.html
│   ├── styles.css
│   ├── script.js
│   └── images/
├── CNAME
└── README.md
```

---

## Development

### Local Development

```bash
# Clone the repo
git clone https://github.com/cakleinman/frontiersiteoperations.git
cd frontiersiteoperations

# Serve locally (using Python)
python -m http.server 8000

# Or use any local server
npx serve .
```

### Deployment

Pushes to `main` auto-deploy via GitHub Pages / Netlify.

---

## Contributing

This is a private business project. See the knowledge base for brand guidelines before making changes.

---

## License

© 2025 Frontier Site Operations LLC. All rights reserved.
