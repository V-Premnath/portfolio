---
name: portfolio-interactive-motion
description: "Implements zero-jank 60fps micro-interactions, smooth scroll reveal animations, ambient canvas particle networks, 3D card tilt effects, and interactive UI filtering for modern portfolios. Use when adding dynamic motion and animations."
---

# Portfolio Interactive Motion & 60fps Micro-Interactions

The Interactive Motion skill elevates a portfolio from a static digital resume into an immersive, dynamic experience.

<HARD-GATE>
All motion and animation scripts MUST respect `prefers-reduced-motion`. Animations must be GPU-accelerated (using only `transform` and `opacity`) and capped at 60fps without causing layout shifts or scroll stutter.
</HARD-GATE>

---

## 1. Core Principles of Motion Design

1. **Subtle & Purposeful**: Animations should guide attention and confirm interactions, never distract or delay navigation.
2. **GPU Acceleration**: Animate only `transform` (translate, scale, rotate) and `opacity`. Never animate heavy layout properties like `width`, `height`, `top`, `left`, or `margin`.
3. **Smooth Easing**: Use custom cubic bezier curves (e.g. `cubic-bezier(0.16, 1, 0.3, 1)`) for organic, spring-like feel rather than linear transitions.
4. **Performance Throttling**: Interactive canvas and scroll listeners must use `requestAnimationFrame` and `IntersectionObserver` instead of raw scroll events.

---

## 2. Anti-Patterns & Red Flags

| Red Flag / Anti-Pattern | Reality | Correct Action |
| :--- | :--- | :--- |
| *"Listening to `window.onscroll` and recalculating layout on every tick."* | Destroys framerate, causing severe jank and battery drain on mobile devices. | Use native `IntersectionObserver` with threshold triggers. |
| *"Forcing aggressive spinning animations and flashing colors."* | Overwhelms recruiters and causes motion sickness. | Use soft ambient glows, subtle float offsets, and fade-in translations. |
| *"Ignoring `prefers-reduced-motion` media query."* | Breaks accessibility compliance for users with vestibular disorders. | Provide instant opacity transitions when reduced motion is preferred. |
| *"Loading a 500KB heavy animation library when 40 lines of Vanilla JS do the job."* | Inflates bundle size and slows down initial page load. | Use lightweight Vanilla JS and native CSS keyframes. |

---

## 3. Implementation Workflow

1. Consult [Motion Recipes Reference](./references/motion-recipes.md) for pre-built snippets.
2. Integrate interactive controllers into `main.js`:
   - Initialize Ambient Canvas Mesh with particle connections (`initAmbientCanvas`).
   - Initialize Scroll Reveal with `IntersectionObserver` (`initScrollReveal`).
   - Initialize 3D Card Tilt physics with mouse coordinates (`initCardTilt`).
   - Initialize Category Filter Tabs with dynamic display toggle (`initProjectFilters`).
   - Initialize Clipboard Email Copy with animated toast (`initEmailCopy`).
3. Verify frame rates in DevTools (60fps target with zero jank).
