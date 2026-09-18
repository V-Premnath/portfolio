# Modern Portfolio Design Tokens Cheat Sheet

This reference contains curated modern palettes, typography pairings, glassmorphism tokens, and responsive spacing formulas for world-class portfolio web applications.

---

## 1. Curated Color Palettes (Tailored HSL)

### Palette A: Obsidian Cyber (Electric Cyan & Violet Accents)
```css
:root {
  /* Backgrounds */
  --bg-primary: hsl(222, 47%, 4%);      /* Deep midnight black #050811 */
  --bg-secondary: hsl(222, 40%, 8%);    /* Dark obsidian #0c1220 */
  --bg-tertiary: hsl(222, 35%, 12%);    /* Elevated card #141c30 */
  --bg-glass: hsla(222, 40%, 10%, 0.7); /* Frosted glass */

  /* Text */
  --text-primary: hsl(210, 40%, 98%);   /* Crisp white-silver */
  --text-secondary: hsl(215, 20%, 70%); /* Soft muted slate */
  --text-tertiary: hsl(215, 15%, 50%);  /* Dark muted */

  /* Accents */
  --accent-primary: hsl(190, 95%, 50%);   /* Electric Cyan #06d6a0 */
  --accent-secondary: hsl(270, 90%, 65%); /* Neon Violet #a855f7 */
  --accent-glow: hsla(190, 95%, 50%, 0.25);

  /* Borders */
  --border-subtle: hsla(215, 20%, 65%, 0.12);
  --border-highlight: hsla(190, 95%, 50%, 0.4);
}
```

### Palette B: Modern Linear Monochrome (Sleek Slate & Emerald)
```css
:root {
  --bg-primary: hsl(0, 0%, 5%);
  --bg-secondary: hsl(0, 0%, 9%);
  --bg-tertiary: hsl(0, 0%, 14%);
  --bg-glass: hsla(0, 0%, 10%, 0.65);

  --text-primary: hsl(0, 0%, 98%);
  --text-secondary: hsl(0, 0%, 65%);
  --text-tertiary: hsl(0, 0%, 45%);

  --accent-primary: hsl(160, 84%, 39%);   /* Emerald #10b981 */
  --accent-secondary: hsl(210, 100%, 60%);/* Blue #3b82f6 */
  --accent-glow: hsla(160, 84%, 39%, 0.2);

  --border-subtle: hsla(0, 0%, 100%, 0.08);
  --border-highlight: hsla(0, 0%, 100%, 0.2);
}
```

### Palette C: Warm Editorial Luxe (Sophisticated Dark Bronze & Champagne)
```css
:root {
  --bg-primary: hsl(240, 10%, 4%);
  --bg-secondary: hsl(240, 8%, 8%);
  --bg-tertiary: hsl(240, 8%, 13%);
  --bg-glass: hsla(240, 8%, 9%, 0.7);

  --text-primary: hsl(40, 20%, 96%);
  --text-secondary: hsl(40, 10%, 70%);
  --text-tertiary: hsl(40, 10%, 50%);

  --accent-primary: hsl(38, 92%, 50%);    /* Warm Amber Gold */
  --accent-secondary: hsl(15, 80%, 60%);  /* Coral Terracotta */
  --accent-glow: hsla(38, 92%, 50%, 0.25);

  --border-subtle: hsla(40, 20%, 70%, 0.12);
  --border-highlight: hsla(38, 92%, 50%, 0.35);
}
```

---

## 2. Curated Typography Pairings (Google Fonts)

### Pairing 1: Tech-Forward Display + Clean Swiss Body
- **Display / Headers**: `Syne`, `Cabinet Grotesk`, or `Space Grotesk`
- **Body / Subtitles**: `Inter` or `Plus Jakarta Sans`
- **Monospace / Badges**: `JetBrains Mono` or `Fira Code`

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet">
```

### Pairing 2: Geometric Modern SaaS
- **Display / Headers**: `Outfit` or `Plus Jakarta Sans` (Weight 700/800)
- **Body / Subtitles**: `Plus Jakarta Sans` (Weight 400/500/600)
- **Monospace**: `Geist Mono`

---

## 3. Fluid Typography & Spacing Scales

```css
:root {
  /* Fluid font sizing with clamp() */
  --font-display: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  --text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
  --text-sm: clamp(0.875rem, 0.8rem + 0.35vw, 1rem);
  --text-base: clamp(1rem, 0.95rem + 0.45vw, 1.125rem);
  --text-lg: clamp(1.125rem, 1.05rem + 0.6vw, 1.35rem);
  --text-xl: clamp(1.35rem, 1.2rem + 1vw, 1.75rem);
  --text-2xl: clamp(1.75rem, 1.5rem + 1.8vw, 2.5rem);
  --text-3xl: clamp(2.25rem, 1.8rem + 2.8vw, 3.5rem);
  --text-hero: clamp(2.75rem, 2rem + 4.5vw, 5.25rem);

  /* Spacing Scale */
  --space-2xs: 0.25rem;
  --space-xs: 0.5rem;
  --space-sm: 0.75rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2.5rem;
  --space-2xl: 4rem;
  --space-3xl: 6.5rem;

  /* Border Radii */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-full: 9999px;

  /* Elevation Shadows & Glows */
  --shadow-sm: 0 2px 8px hsla(0, 0%, 0%, 0.25);
  --shadow-md: 0 8px 24px hsla(0, 0%, 0%, 0.4);
  --shadow-lg: 0 20px 48px hsla(0, 0%, 0%, 0.55);
  --shadow-glow: 0 0 40px var(--accent-glow);

  /* Glassmorphism */
  --glass-backdrop: blur(16px) saturate(180%);
}
```
