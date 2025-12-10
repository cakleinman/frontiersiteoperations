# FSO Website Build Tracker

> **Last Updated:** 2025-12-09  
> **Current Phase:** Pre-Build (Design System)  
> **Knowledge Base Version:** 1.1.0

---

## Build Status

### Completed
- [x] Brand color system defined
- [x] Three-paint fleet colors selected (Rust-Oleum anchored)
- [x] Color interaction rules established
- [x] Knowledge base updated with brand decisions

### In Progress
- [ ] Typography selection
- [ ] Logo design direction

### Up Next
- [ ] Homepage wireframe
- [ ] Component library / design system
- [ ] Site build

### Blocked
- Domain not yet purchased
- Business email not set up
- Business phone not set up

---

## Build Roadmap

### Phase 0: Infrastructure Setup
*Get the foundations in place before design/dev work*

| Task | Status | Dependencies | Notes |
|------|--------|--------------|-------|
| 0.1 Purchase domain | ⬜ Not started | — | Recommend: `frontiersiteops.com` or similar |
| 0.2 Create Netlify account | ⬜ Not started | — | Free tier is sufficient |
| 0.3 Connect domain to Netlify | ⬜ Not started | 0.1, 0.2 | Configure DNS, enable HTTPS |
| 0.4 Set up business email | ⬜ Not started | 0.1 | Options: Google Workspace, Zoho, or Cloudflare Email |
| 0.5 Create GitHub repo | ⬜ Not started | — | `fso-website` repository |
| 0.6 Connect GitHub to Netlify | ⬜ Not started | 0.2, 0.5 | Auto-deploy on push to main |
| 0.7 Decide on tech stack | ⬜ Not started | — | See Tech Stack Decision below |

**Tech Stack Decision (0.7):**
Options to consider:
- **Option A: Static HTML/CSS/JS** — Simplest, fastest, no build step, easy to maintain
- **Option B: Astro** — Static site generator, component-based, great performance
- **Option C: Next.js (static export)** — React-based, more complex but scalable
- **Recommendation:** Option A or B for a business site of this size

---

### Phase 1: Design System
*Complete visual foundation before building pages*

| Task | Status | Dependencies | Notes |
|------|--------|--------------|-------|
| 1.1 Finalize typography | ⬜ Not started | — | Select heading + body fonts |
| 1.2 Create type scale | ⬜ Not started | 1.1 | H1-H6, body, small, caption sizes |
| 1.3 Define spacing system | ⬜ Not started | — | 4px or 8px base grid |
| 1.4 Logo design direction | ⬜ Not started | — | Decide approach (wordmark, icon, combo) |
| 1.5 Create logo | ⬜ Not started | 1.4 | SVG format, multiple sizes |
| 1.6 Create favicon set | ⬜ Not started | 1.5 | favicon.ico, apple-touch-icon, og-image |
| 1.7 Button styles | ⬜ Not started | 1.1 | Primary, secondary, outline, sizes, states |
| 1.8 Form input styles | ⬜ Not started | 1.1 | Text, textarea, select, checkbox, radio |
| 1.9 Card component | ⬜ Not started | 1.1 | Service cards, info cards |
| 1.10 Section patterns | ⬜ Not started | Colors | Hero, CTA, feature sections |
| 1.11 Create CSS variables file | ⬜ Not started | 1.1-1.10 | All design tokens in one place |
| 1.12 Document design system | ⬜ Not started | 1.1-1.11 | Style guide page or reference doc |

**Deliverable:** Complete design system with reusable components

---

### Phase 2: Content Preparation
*Write and approve all copy before building pages*

| Task | Status | Dependencies | Notes |
|------|--------|--------------|-------|
| 2.1 Select tagline | ⬜ Not started | — | Choose from three options or create new |
| 2.2 Write homepage copy | ⬜ Not started | 2.1 | Hero, services overview, trust signals, CTA |
| 2.3 Write Equipment Transport page | ⬜ Not started | — | Full service description |
| 2.4 Write Jobsite Services page | ⬜ Not started | — | Full service description |
| 2.5 Write Materials Delivery page | ⬜ Not started | — | Full service description |
| 2.6 Write Waste & Container page | ⬜ Not started | — | Full service description |
| 2.7 Write Government page | ⬜ Not started | — | Certifications, capabilities, compliance |
| 2.8 Write About page | ⬜ Not started | — | Company story, veteran ownership |
| 2.9 Write Contact page copy | ⬜ Not started | — | Form intro, expectations, service area |
| 2.10 Create meta descriptions | ⬜ Not started | 2.2-2.9 | SEO descriptions for each page |
| 2.11 Review all copy for claims | ⬜ Not started | 2.2-2.9 | Verify against "What We Cannot Claim" |
| 2.12 Final copy approval | ⬜ Not started | 2.11 | Owner sign-off |

**Deliverable:** Approved copy for all pages in a content document

---

### Phase 3: Wireframes & Layout
*Plan page structure before coding*

| Task | Status | Dependencies | Notes |
|------|--------|--------------|-------|
| 3.1 Homepage wireframe | ⬜ Not started | 2.2 | Desktop + mobile layouts |
| 3.2 Services landing wireframe | ⬜ Not started | — | Overview page linking to subpages |
| 3.3 Service subpage template | ⬜ Not started | 2.3-2.6 | Reusable layout for all 4 services |
| 3.4 Government page wireframe | ⬜ Not started | 2.7 | Certification badges, capabilities |
| 3.5 About page wireframe | ⬜ Not started | 2.8 | Story sections, values |
| 3.6 Contact page wireframe | ⬜ Not started | 2.9 | Form layout, service area map? |
| 3.7 Header/nav design | ⬜ Not started | 1.5 | Desktop + mobile nav patterns |
| 3.8 Footer design | ⬜ Not started | — | Links, contact info, legal |
| 3.9 Wireframe approval | ⬜ Not started | 3.1-3.8 | Owner sign-off |

**Deliverable:** Approved wireframes for all pages

---

### Phase 4: Development - Foundation
*Set up project and build core structure*

| Task | Status | Dependencies | Notes |
|------|--------|--------------|-------|
| 4.1 Initialize project | ⬜ Not started | 0.5, 0.7 | Based on chosen tech stack |
| 4.2 Set up folder structure | ⬜ Not started | 4.1 | pages/, components/, assets/, styles/ |
| 4.3 Create base HTML template | ⬜ Not started | 4.1 | Head, meta, body structure |
| 4.4 Implement CSS reset/normalize | ⬜ Not started | 4.1 | Clean browser defaults |
| 4.5 Add CSS variables | ⬜ Not started | 1.11 | Colors, fonts, spacing tokens |
| 4.6 Build header component | ⬜ Not started | 3.7, 1.5 | Logo, nav, mobile menu |
| 4.7 Build footer component | ⬜ Not started | 3.8 | Links, contact, copyright |
| 4.8 Build button components | ⬜ Not started | 1.7 | All button variants |
| 4.9 Build form components | ⬜ Not started | 1.8 | Input, textarea, submit |
| 4.10 Build section components | ⬜ Not started | 1.10 | Hero, CTA, feature sections |
| 4.11 Build card components | ⬜ Not started | 1.9 | Service cards, info cards |
| 4.12 Test component library | ⬜ Not started | 4.6-4.11 | Verify all components work |

**Deliverable:** Working component library, ready for page assembly

---

### Phase 5: Development - Pages
*Build out all pages using components and content*

| Task | Status | Dependencies | Notes |
|------|--------|--------------|-------|
| 5.1 Build Homepage | ⬜ Not started | 4.12, 2.2, 3.1 | Hero, services, trust, CTA |
| 5.2 Build Services landing | ⬜ Not started | 4.12, 3.2 | Overview with service cards |
| 5.3 Build Equipment Transport | ⬜ Not started | 4.12, 2.3, 3.3 | Full service page |
| 5.4 Build Jobsite Services | ⬜ Not started | 4.12, 2.4, 3.3 | Full service page |
| 5.5 Build Materials Delivery | ⬜ Not started | 4.12, 2.5, 3.3 | Full service page |
| 5.6 Build Waste & Container | ⬜ Not started | 4.12, 2.6, 3.3 | Full service page |
| 5.7 Build Government page | ⬜ Not started | 4.12, 2.7, 3.4 | Certs, capabilities |
| 5.8 Build About page | ⬜ Not started | 4.12, 2.8, 3.5 | Story, values |
| 5.9 Build Contact page | ⬜ Not started | 4.12, 2.9, 3.6 | Quote request form |
| 5.10 Set up form handling | ⬜ Not started | 5.9 | Netlify Forms or Formspree |
| 5.11 Create 404 page | ⬜ Not started | 4.12 | Custom error page |
| 5.12 Internal link audit | ⬜ Not started | 5.1-5.11 | Verify all links work |

**Deliverable:** All pages built and linked

---

### Phase 6: Polish & Optimization
*Refine, test, and optimize before launch*

| Task | Status | Dependencies | Notes |
|------|--------|--------------|-------|
| 6.1 Mobile responsiveness QA | ⬜ Not started | 5.1-5.11 | Test all breakpoints |
| 6.2 Cross-browser testing | ⬜ Not started | 5.1-5.11 | Chrome, Safari, Firefox, Edge |
| 6.3 Accessibility audit | ⬜ Not started | 5.1-5.11 | WCAG 2.1 AA compliance |
| 6.4 Performance optimization | ⬜ Not started | 5.1-5.11 | Image compression, lazy loading |
| 6.5 Run Lighthouse audit | ⬜ Not started | 6.1-6.4 | Target 90+ all categories |
| 6.6 Add meta tags & OG images | ⬜ Not started | 2.10, 1.6 | SEO and social sharing |
| 6.7 Set up Google Analytics | ⬜ Not started | — | Or Plausible/Fathom for privacy |
| 6.8 Create sitemap.xml | ⬜ Not started | 5.1-5.11 | For search engines |
| 6.9 Create robots.txt | ⬜ Not started | — | Search engine directives |
| 6.10 Final content review | ⬜ Not started | All | Typos, accuracy, claims |
| 6.11 Owner walkthrough | ⬜ Not started | 6.1-6.10 | Full site review |

**Deliverable:** Polished, optimized site ready for launch

---

### Phase 7: Launch
*Go live and verify everything works*

| Task | Status | Dependencies | Notes |
|------|--------|--------------|-------|
| 7.1 Final backup of repo | ⬜ Not started | All | Tag release in Git |
| 7.2 Deploy to production | ⬜ Not started | 6.11 | Push to main, Netlify deploys |
| 7.3 Verify DNS/SSL | ⬜ Not started | 7.2 | HTTPS working, redirects correct |
| 7.4 Test contact form (production) | ⬜ Not started | 7.2 | Submit test, verify delivery |
| 7.5 Test all pages (production) | ⬜ Not started | 7.2 | Full site walkthrough |
| 7.6 Submit to Google Search Console | ⬜ Not started | 7.2, 6.8 | Index the site |
| 7.7 Update Google Sites placeholder | ⬜ Not started | 7.2 | Redirect or replace old site |
| 7.8 Announce launch | ⬜ Not started | 7.5 | Update knowledge base, notify stakeholders |

**Deliverable:** Live website at production domain

---

### Phase 8: Post-Launch
*Ongoing maintenance and iteration*

| Task | Status | Dependencies | Notes |
|------|--------|--------------|-------|
| 8.1 Monitor analytics | ⬜ Not started | 7.8 | Weekly check-ins initially |
| 8.2 Monitor form submissions | ⬜ Not started | 7.8 | Ensure leads are captured |
| 8.3 Fix any bugs | ⬜ Not started | 7.8 | As discovered |
| 8.4 Update certifications when complete | ⬜ Not started | — | VOSB, SAM, SASP badges |
| 8.5 Add testimonials | ⬜ Not started | — | When available |
| 8.6 Add project photos | ⬜ Not started | — | When available |
| 8.7 Update knowledge base | ⬜ Not started | 7.8 | Mark website as live |

**Deliverable:** Maintained, evolving website

---

### Phase Summary

| Phase | Name | Tasks | Est. Time |
|-------|------|-------|-----------|
| 0 | Infrastructure Setup | 7 | 1-2 hours |
| 1 | Design System | 12 | 2-4 sessions |
| 2 | Content Preparation | 12 | 2-3 sessions |
| 3 | Wireframes & Layout | 9 | 1-2 sessions |
| 4 | Development - Foundation | 12 | 2-3 sessions |
| 5 | Development - Pages | 12 | 3-4 sessions |
| 6 | Polish & Optimization | 11 | 1-2 sessions |
| 7 | Launch | 8 | 1 session |
| 8 | Post-Launch | 7 | Ongoing |
| | **TOTAL** | **90 tasks** | **~15-20 sessions** |

---

## Current Focus

**Active Phase:** Phase 0 & 1 (parallel)
**Current Task:** 0.7 (Tech Stack Decision) and 1.1 (Typography)
**Blocking Issues:** Domain purchase needed for 0.1-0.4

---

## Brand Colors (Approved)

### Paint-Anchored Colors (Rust-Oleum Farm & Implement)

| Role | Name | Hex | Rust-Oleum Codes | Fleet Usage |
|------|------|-----|------------------|-------------|
| **Primary** | Allis Chalmers Orange | `#C13516` | 280156 (qt), 280176 (gal), 280135 (spray) | Branded surfaces, trailer boxes, dump beds, equipment housings |
| **Secondary** | Massey Ferguson Gray | `#5A5A5E` | 280157 (qt), 280174 (gal), 280133 (spray) | Truck cabs, body panels, structural frames |
| **Accent** | Low Gloss Black | `#1A1A1A` | 280107 (qt), 280168 (gal), 280125 (spray) | Wheels, undercarriage, trim, frames, tongues |

### Digital-Only Colors

| Name | Hex | Usage |
|------|-----|-------|
| Warm White | `#F8F7F5` | Page backgrounds |
| Pure White | `#FFFFFF` | Cards, content areas |
| Text Primary | `#1E1E1E` | Body text on light backgrounds |

### Color Interaction Rules

**Allowed:**
- Orange text on Black background ✓
- White text on Gray background ✓
- White text on Black background ✓
- White text on Orange background ✓
- Orange buttons on Gray background ✓
- Orange buttons on Black background ✓
- Black text on White background ✓

**Forbidden:**
- ⛔ Orange text on Gray background (values too similar, poor readability)

**Key Rule:** Orange is for OBJECTS (buttons, shapes, painted surfaces), not text on mid-tones.

### Proportions
- Black: 35%
- Gray: 30%
- White: 25%
- Orange: 10% (used sparingly for maximum impact)

---

## Typography (Pending)

**Status:** Not defined

**Requirements:**
- Clean, readable, professional
- Works for both commercial and government audiences
- Good web performance

**Considerations:**
- Headings: TBD
- Body: TBD

---

## Logo (Pending)

**Status:** Not created

**Direction Notes:**
- Should work with three-color system
- Needs to read well at small sizes (truck door, business card)
- Avoid over-militarization

---

## Site Architecture

### Planned Pages

| Page | Purpose | Audience Split |
|------|---------|----------------|
| **Homepage** | Primary landing, dual audience appeal | 70% commercial / 30% government |
| **Services** | Detail all four core service areas | — |
| → Equipment Transport | Subpage | — |
| → Jobsite Services | Subpage | — |
| → Materials Delivery | Subpage | — |
| → Waste & Container Services | Subpage | — |
| **Government Contracting** | Dedicated section for government buyers | 100% government |
| **About** | Company story, veteran ownership, values | 50/50 |
| **Contact / Quote** | Quote requests and contact form | — |

### Technical Requirements
- Mobile-responsive
- Fast loading (under 3 seconds)
- HTTPS/SSL
- Section 508 / WCAG 2.1 AA accessibility
- SEO optimized

### Hosting
- Planned: Netlify (free tier)

---

## Content Reference

### Company Facts (for copy)
- **Legal Name:** Frontier Site Operations LLC
- **Location:** Provo, Utah
- **Service Area:** Utah County (primary), Salt Lake County (secondary), I-15 corridor from Provo to Sandy
- **Owner:** Christopher Kleinman (100%)
- **Veteran Status:** Active Utah Army National Guard member
- **Registered:** December 3, 2025

### Services (4 Core)

**1. Equipment Transport**
- Pick up and deliver rental equipment
- Move customer-owned equipment between yards and jobsites
- Same-day and urgent hauls
- Examples: Lifts, skid steers, generators, compressors, light towers

**2. Jobsite Services**
- Deliver, position, maintain, and retrieve owned equipment
- Light towers, generators, fuel cubes, portable site gear
- On-site logistical tasks

**3. Materials Delivery**
- Pick up and deliver building materials from suppliers
- Contractor overflow hauling
- Examples: Lumber, forms, hardware, palletized goods

**4. Waste & Container Services**
- Dumpster delivery and retrieval
- Debris transport to approved disposal sites

### Certifications Status (for trust badges)

| Certification | Status | Can Claim |
|---------------|--------|-----------|
| Veteran-Owned | ✓ True | Yes |
| VOSB | In Progress | "Working toward" only |
| SAM | In Progress | "Working toward" only |
| SASP | In Progress | "Working toward" only |

### What We CAN Claim
- Veteran-owned (owner is active Utah Army National Guard member)
- 100% owned by Christopher Kleinman
- Utah-based (Provo)
- Serving Utah County and I-15 corridor
- Focused on contractor support logistics
- Working toward VOSB certification
- Working toward SAM registration
- Working toward SASP enrollment

### What We CANNOT Claim
- Years of experience (company is new)
- Specific number of projects completed (none yet)
- Specific number of customers served (none yet)
- VOSB certified (in progress)
- SAM registered (in progress)
- Any specific past performance
- Remote access capability (Phase 2)
- Currently operational (pre-operational)

---

## Target Audiences

### Commercial Contractors
**Pain Points:**
- Need equipment fast
- Don't have time to pick up materials themselves
- Lack trucks or staff for hauling
- Need reliable same-day service
- Want simple, no-hassle logistics

**Tone:** Fast, reliable, no hassle, cost-effective

**Keywords:** Fast turnaround, competitive pricing, reliable service, flexible, easy to work with

### Government Buyers
**Pain Points:**
- Need compliant vendors
- Require proper certifications
- Value past performance records
- Need clear capabilities statements
- Prefer veteran-owned businesses for set-asides

**Tone:** Compliant, certified, proven, ready

**Keywords:** Compliant with FAR, past performance, verified certifications, capabilities statement, small business, registered

---

## Brand Voice

### Personality
- Professional but approachable
- Confident but not arrogant
- Experienced but still flexible
- Veteran-owned pride without preachiness

### Tone
Warm, direct, reliable

### Commercial Examples
- "We get it done fast and right"
- "No hassle, just results"
- "Your project, our logistics"

### Government Examples
- "Compliant, certified, and ready"
- "Proven performance for federal contracts"
- "VOSB-certified logistics partner"

### Tagline Options
1. "Logistics that moves with you"
2. "Your project. Our logistics."
3. "Contractor logistics with military precision"

### Writing Rules
- Conversational but professional
- Second person ("you") for engagement
- Short paragraphs (2-3 sentences)
- Active voice, present tense
- Specific, concrete language

### Avoid
- Buzzwords: synergy, leveraging, solutions, cutting-edge
- Passive voice
- Vague claims: industry-leading, world-class, best-in-class
- Excessive length
- Military clichés unless authentic

---

## Value Propositions

**Universal:** Military precision meets commercial flexibility

**For Commercial:** Fast, reliable equipment logistics without the hassle

**For Government:** VOSB-certified, compliant partner with proven performance

---

## Competitive Advantages (for messaging)

1. **SASP Equipment Sourcing** — Lower costs than competitors through federal surplus access
2. **VOSB Status** (pending) — Access to set-aside contracts
3. **Dual Market Capability** — Serves both commercial and government
4. **Quick Response** — Same-day and urgent capability
5. **Remote Access** (Phase 2) — Difficult-access locations *[NOT YET AVAILABLE]*

---

## Design Decisions Log

| Date | Decision | Status | Notes |
|------|----------|--------|-------|
| 2025-12-09 | Three-paint fleet color system | ✅ Approved | Orange/Gray/Black, Rust-Oleum anchored |
| 2025-12-09 | No orange text on gray backgrounds | ✅ Approved | Use white text instead |
| 2025-12-09 | Navy as secondary color | ❌ Rejected | Poor contrast with orange |

---

## Session Notes

### 2025-12-09
- Created knowledge base v1.0.0
- Developed brand color system
- Tested color interactions, identified orange-on-gray problem
- Switched from navy to Massey Ferguson Gray
- Established three-paint fleet system
- Updated knowledge base to v1.1.0
- Created this build tracker

---

## Next Session Agenda

### Priority Tasks
- [ ] **0.7** Decide on tech stack (HTML vs Astro vs Next.js)
- [ ] **1.1** Finalize typography (heading + body fonts)
- [ ] **0.1** Discuss domain purchase (frontiersiteops.com?)

### If Time Permits
- [ ] **1.4** Logo design direction
- [ ] **2.1** Select tagline from options

### Owner Action Items (Before Next Session)
- [ ] Purchase domain
- [ ] Create Netlify account
- [ ] Create GitHub account (if needed)
