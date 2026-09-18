---
name: portfolio-component-architecture
description: "Builds modular, accessible, semantic HTML5 component architectures for modern portfolios (Hero, Projects Showcase, Experience Timeline, Skills Matrix, Playground, Contact Form, Footer). Use when scaffolding or assembling UI components."
---

# Portfolio Component Architecture & Scaffolding

The Component Architecture skill provides the structural foundation for a high-performance, accessible, and responsive portfolio website.

<HARD-GATE>
Every section must use semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`). Generic nested `<div>` soup without accessibility landmarks or semantic tags is strictly prohibited.
</HARD-GATE>

---

## 1. Architectural Principles

1. **Semantic Landmarks**: Every primary area must use correct HTML5 tags (`<main id="main-content">`, `<section id="...">`, `<header>`, `<footer>`).
2. **Accessible Form Controls & Buttons**: All interactive elements must have distinct IDs, accessible `aria-label` or `aria-expanded` attributes, and focus-visible rings for keyboard users.
3. **Responsive Grid & Flexbox**: Container widths must use CSS `max-width` and `margin: 0 auto` with fluid gutters (`padding: 0 var(--space-md)`).
4. **Modular Scaffolding**: Keep section components decoupled. Each section must be self-contained with its own semantic wrapper and descriptive data attributes (e.g., `data-reveal`, `data-filter`).

---

## 2. Anti-Patterns & Red Flags

| Red Flag / Mental Shortcut | Reality | Correct Action |
| :--- | :--- | :--- |
| *"`<div>` everywhere with no `<header>`, `<main>`, or `<section>`."* | Degrades SEO, breaks screen reader navigation, and fails accessibility standards. | Enforce semantic HTML5 landmarks throughout the entire markup. |
| *"Putting all projects in static cards with no live demo links."* | Hiring managers want instant proof. If they can't click to see the demo or repo, credibility drops. | Provide both Live Demo and GitHub links with clear icon indicators. |
| *"Using non-clickable buttons (just `<div>` with `onclick`)."* | Inaccessible to keyboard navigation and screen readers. | Use native `<button>` or `<a href="...">` elements with keyboard focus states. |

---

## 3. Implementation Workflow

1. Consult [Section Blueprints Reference](./references/section-blueprints.md) for HTML scaffolding templates.
2. Build the markup hierarchy in `index.html`:
   - `Navigation Header` (Sticky with blur, brand logo, section anchors, mobile drawer).
   - `Hero Section` (Status badge, main title, subtitle, CTA buttons, tech tags, canvas mount).
   - `Flagship Projects Grid` (Filterable categories, project cards, live links, impact metrics).
   - `Career Experience Timeline` (Chronological milestones, roles, achievements).
   - `Skills Matrix` (Categorized competency chips).
   - `Interactive Lab / Playground` (Interactive demo or code widget).
   - `Contact Section` (Direct email trigger, copy-to-clipboard button, social links).
   - `Footer & Colophon` (Copyright, tech stack credit, availability).
3. Validate markup validity and semantic structure.
