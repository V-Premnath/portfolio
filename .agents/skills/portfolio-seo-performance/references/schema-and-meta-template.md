# SEO Meta Tags, OpenGraph Cards & JSON-LD Structured Data Template

This reference provides production-grade `<head>` metadata, OpenGraph preview cards, Twitter cards, and Schema.org JSON-LD structured data for developer and designer portfolios.

---

## 1. Production `<head>` SEO & Social Card Blueprint

```html
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- Primary Meta Tags -->
  <title>Alex Rivera | Senior Full-Stack Engineer & Creative Architect</title>
  <meta name="title" content="Alex Rivera | Senior Full-Stack Engineer & Creative Architect">
  <meta name="description" content="Senior Full-Stack Engineer specializing in high-scale distributed systems, real-time web applications, and intuitive UI architectures. Explore flagship projects and case studies.">
  <meta name="keywords" content="Alex Rivera, Full Stack Engineer, Frontend Architect, React, Next.js, TypeScript, Node.js, Web Development, Portfolio">
  <meta name="author" content="Alex Rivera">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://alexrivera.dev/">

  <!-- Favicon & Touch Icons -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <meta name="theme-color" content="#050811">

  <!-- Open Graph / Facebook / LinkedIn -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://alexrivera.dev/">
  <meta property="og:title" content="Alex Rivera | Senior Full-Stack Engineer & Creative Architect">
  <meta property="og:description" content="Explore flagship full-stack projects, real-time architectures, and technical case studies by Alex Rivera.">
  <meta property="og:image" content="https://alexrivera.dev/og-preview.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:site_name" content="Alex Rivera Portfolio">

  <!-- Twitter / X Cards -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="https://alexrivera.dev/">
  <meta name="twitter:title" content="Alex Rivera | Senior Full-Stack Engineer & Creative Architect">
  <meta name="twitter:description" content="Explore flagship full-stack projects, real-time architectures, and technical case studies by Alex Rivera.">
  <meta name="twitter:image" content="https://alexrivera.dev/og-preview.png">
  <meta name="twitter:creator" content="@alexrivera_dev">

  <!-- Performance & Preload -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

---

## 2. Schema.org JSON-LD Structured Data (`Person` & `ProfilePage`)

Adding structured data allows Google and search engines to render rich developer entity snippets and knowledge cards:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://alexrivera.dev/#person",
      "name": "Alex Rivera",
      "jobTitle": "Senior Full-Stack Engineer",
      "description": "Senior Full-Stack Engineer specializing in resilient distributed systems and modern web applications.",
      "url": "https://alexrivera.dev",
      "sameAs": [
        "https://github.com/alexrivera",
        "https://linkedin.com/in/alexrivera",
        "https://twitter.com/alexrivera_dev"
      ],
      "knowsAbout": [
        "Web Development",
        "TypeScript",
        "React",
        "Next.js",
        "Distributed Systems",
        "Cloud Architecture",
        "PostgreSQL"
      ]
    },
    {
      "@type": "ProfilePage",
      "@id": "https://alexrivera.dev/#webpage",
      "url": "https://alexrivera.dev",
      "name": "Alex Rivera Portfolio",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://alexrivera.dev/#website",
        "url": "https://alexrivera.dev",
        "name": "Alex Rivera Portfolio"
      },
      "about": {
        "@id": "https://alexrivera.dev/#person"
      },
      "primaryImageOfPage": "https://alexrivera.dev/og-preview.png"
    }
  ]
}
</script>
```

---

## 3. Core Web Vitals Checklist

1. **Largest Contentful Paint (LCP < 1.2s)**:
   - Preload Google Fonts stylesheet.
   - Avoid blocking script tags in `<head>` (use `defer` or `<script type="module">`).
2. **Cumulative Layout Shift (CLS = 0)**:
   - Always declare explicit `width` and `height` or `aspect-ratio` on all images and mockups.
   - Use CSS `font-display: swap`.
3. **First Input Delay / Interaction to Next Paint (INP < 50ms)**:
   - Zero bulky JavaScript frameworks when Vanilla JS fulfills all requirements.
   - Canvas particle loop throttled cleanly.
