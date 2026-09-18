---
name: portfolio-review-polish
description: "Executes rigorous quality assurance audits, multi-device responsiveness tests, cross-browser compatibility checks, and accessibility verifications for portfolios before launch."
---

# Portfolio QA Review & Visual Polish

The Review & Polish skill enforces rigorous quality control to ensure zero defects, pixel-perfect alignment, and seamless interaction across all devices and browsers.

<HARD-GATE>
Do NOT consider the portfolio complete or ready for deployment until all items in the QA Checklist have been verified, with zero horizontal scrollbars, zero console errors, and full accessibility compliance.
</HARD-GATE>

---

## 1. Review Methodology

1. **Responsive Viewport Audit**: Test the website at 320px, 375px, 768px, 1200px, and 1920px.
2. **Interactive Functionality Audit**: Verify navigation links, filter buttons, clipboard copy action, and contact triggers.
3. **Performance & Console Audit**: Inspect browser console for uncaught JavaScript exceptions, 404 image assets, or font loading errors.
4. **Accessibility (WCAG) Audit**: Validate color contrast, focus indicators, and screen reader labels.

---

## 2. Anti-Patterns & Red Flags

| Red Flag / Mental Shortcut | Reality | Correct Action |
| :--- | :--- | :--- |
| *"It looks great on my 27-inch desktop monitor, so it's ready."* | 60%+ of hiring managers view portfolios from mobile devices or laptops. | Resize viewport down to 320px and verify mobile layout integrity. |
| *"Horizontal scrollbar appears on mobile."* | A single unconstrained `width: 100vw` or fixed image width breaks mobile UX. | Check `max-width: 100%`, `box-sizing: border-box`, and container overflows. |
| *"Console errors from missing favicon or unhandled clipboard promise."* | Console errors signal a lack of attention to detail to technical interviewers. | Handle all promises with try/catch and ensure all linked assets exist. |

---

## 3. Implementation Workflow

1. Consult the [QA Checklist Reference](./references/qa-checklist.md).
2. Perform systematic walkthrough of all sections.
3. Fix any layout shifts, broken links, or contrast inconsistencies.
4. Deliver the completed QA report before proceeding to deployment.
