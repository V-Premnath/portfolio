# Portfolio Quality Assurance & Polish Checklist

This comprehensive QA rubric ensures the portfolio meets the highest industry standards across visual design, responsiveness, accessibility, and functional stability before public launch.

---

## 1. Visual & Aesthetic Polish Rubric

- [ ] **Contrast Verification**: Body text against dark background exceeds WCAG AAA (7:1 ratio). Subtitle text exceeds 4.5:1 ratio.
- [ ] **Visual Hierarchy**: Clear typographic scale (`clamp()` ensures headings never overflow mobile screens).
- [ ] **Micro-Interactions**: All clickable buttons have smooth hover effects, active scale-down states (`transform: scale(0.98)`), and keyboard focus rings (`outline: 2px solid var(--accent-primary); outline-offset: 2px`).
- [ ] **Glassmorphism Backdrop Support**: Includes `@supports (-webkit-backdrop-filter: none)` fallbacks for older browsers.
- [ ] **Spacing Rhythm**: Consistent margins and padding across all sections (using token variables).

---

## 2. Cross-Device & Responsive Breakpoints

Test the layout across all 5 standard viewport widths:

1. **Mobile Portrait (320px – 390px)**:
   - Navigation collapses cleanly into hamburger toggle or mobile drawer.
   - Hero headline wraps gracefully without horizontal scrollbars (`overflow-x: hidden`).
   - Project cards stack into a single column.
   - Filter buttons wrap or scroll smoothly horizontally.
2. **Mobile Landscape / Small Tablet (480px – 768px)**:
   - Grid cards scale to 2-columns where appropriate.
3. **Standard Laptop (1024px – 1440px)**:
   - Max container width constrained (`max-width: 1200px`) and centered.
   - Desktop navigation bar visible with blur backdrop.
4. **Ultrawide Monitors (1920px – 3440px)**:
   - Content does not stretch uncontrollably across the screen.
   - Background canvas scales to full viewport without blurriness.

---

## 3. Functional Stability & Interactivity Verification

- [ ] **Smooth Anchor Navigation**: Clicking navbar links (`#projects`, `#experience`, `#contact`) scrolls smoothly to the target section.
- [ ] **Copy Email Action**: Clicking the email button copies the exact address to the clipboard and triggers the confirmation toast for 2.5s.
- [ ] **External Link Security**: All external links (`target="_blank"`) contain `rel="noopener noreferrer"`.
- [ ] **Category Filter Logic**: Clicking "Full-Stack", "Creative", or "All" filters cards instantly with smooth fade-in transitions.
- [ ] **Canvas Performance**: Ambient particle canvas maintains a stable 60fps without spiking CPU or GPU memory usage.

---

## 4. Accessibility (a11y) Standards

- [ ] **Keyboard Navigability**: Every interactive element is reachable via `Tab` and triggers with `Enter` / `Space`.
- [ ] **Screen Reader Labels**: Icon buttons contain descriptive `aria-label` attributes (e.g. `aria-label="Toggle navigation menu"`).
- [ ] **Reduced Motion Support**: When `prefers-reduced-motion: reduce` is enabled in OS settings, all particle loops and translate transitions are disabled.
