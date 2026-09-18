---
name: portfolio-design-system
description: "Generates cohesive, world-class design systems, tailored HSL color palettes, typography scales, glassmorphism tokens, and CSS custom properties for portfolios. Use when creating or refining the visual identity."
---

# Portfolio Design System & Visual Foundations

The Design System skill crafts an extraordinary visual identity that ensures the portfolio looks state-of-the-art, distinct, and immediately memorable.

<HARD-GATE>
You MUST establish and verify the complete design token system in `index.css` (color tokens, font variables, spacing, shadows, fluid typography) and present the visual palette to the user before assembling UI sections. No ad-hoc hex colors or inline hardcoded style values.
</HARD-GATE>

---

## 1. Design System Rules

1. **Strict Token Adherence**: All CSS rules must reference CSS custom properties (e.g., `var(--bg-primary)`, `var(--text-secondary)`, `var(--radius-md)`).
2. **Fluid Typography with `clamp()`**: Never use rigid static font sizes. Use `clamp()` formulas so typography seamlessly adapts from 320px mobile screens to 3440px ultrawide monitors without breaking line wraps.
3. **Curated Color Harmonization**: Use HSL values. Ensure background-to-text contrast ratios exceed WCAG AAA standards (7:1 for body text, 4.5:1 for headers).
4. **Subtle Glassmorphism**: For card containers, use frosted glass effects (`background: var(--bg-glass); backdrop-filter: blur(16px); border: 1px solid var(--border-subtle);`).
5. **Interactive State Standards**: Every interactive button, link, and card must define smooth transitions (`transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1)`), hover transforms, and active states.

---

## 2. Anti-Patterns & Red Flags

| Thought / Anti-Pattern | Reality | Correct Action |
| :--- | :--- | :--- |
| *"Plain black `#000000` and pure white `#ffffff` looks clean."* | Pure `#000` and `#fff` cause extreme visual eye-strain and feel unrefined. | Use rich obsidian midnight tones (`hsl(222, 47%, 4%)`) and soft off-white (`hsl(210, 40%, 98%)`). |
| *"I'll use default system fonts (Arial, Times New Roman, sans-serif)."* | System default typography makes the site look generic and amateurish. | Load Google Fonts (e.g. *Space Grotesk*, *Syne*, *Plus Jakarta Sans*, *JetBrains Mono*). |
| *"I'll write random `padding: 23px; margin: 17px;` as I go."* | Inconsistent spacing destroys visual rhythm and hierarchy. | Use systematic spacing tokens (`var(--space-sm)`, `var(--space-md)`, `var(--space-xl)`). |
| *"I don't need a light/dark switch or dark mode palette."* | Modern tech portfolios must look impeccable in dark mode, with optional high-contrast theme switching. | Establish dark mode as the default baseline with CSS variables. |

---

## 3. Implementation Workflow

1. Read [Tokens Cheat Sheet](./references/tokens-cheat-sheet.md) to choose the best palette matching the user's archetype from Phase 1.
2. Initialize `index.css` with the CSS Reset and `:root` custom properties:
   - Palette Tokens (Backgrounds, Texts, Primary & Secondary Accents, Glows).
   - Typography Stack & Google Font `@import` or `<link>`.
   - Fluid typography scales with `clamp()`.
   - Spacing scale and border radii.
   - Elevation shadows and glass backdrop filters.
3. Create utility classes for glass cards (`.glass-card`), glowing badges (`.badge-glow`), gradient text (`.text-gradient`), and magnetic containers.
4. Present the token palette to the user for visual sign-off.
