---
name: portfolio-seo-performance
description: "Optimizes portfolio SEO, OpenGraph/Twitter social cards, JSON-LD structured data (Person, ProfilePage), asset compression, and Lighthouse 100/100 performance scores. Use when optimizing meta tags and speed."
---

# Portfolio SEO & Performance Optimization

The SEO & Performance skill guarantees your portfolio ranks properly on search engines, unfurls stunning rich preview cards across social networks (LinkedIn, Twitter/X, Discord, Slack), and scores a perfect 100/100 across Google Lighthouse metrics.

<HARD-GATE>
You MUST inject complete OpenGraph tags, Twitter Card metadata, and JSON-LD `Person` structured data into the `<head>` of the portfolio, and verify that Core Web Vitals pass with zero layout shifts (CLS = 0).
</HARD-GATE>

---

## 1. Optimization Checklist

- [ ] **Title Tag**: Unique, descriptive, following `[Name] | [Role] & [Specialty]`.
- [ ] **Meta Description**: 150–160 characters highlighting expertise and flagship projects.
- [ ] **OpenGraph Image**: High-resolution 1200x630px social card preview with matching title and description.
- [ ] **JSON-LD Schema**: Validated `Person` and `ProfilePage` structured data.
- [ ] **Semantic Headings**: Exactly one `<h1>` per page with clean `<h2>` and `<h3>` hierarchy.
- [ ] **Image Optimization**: WebP/AVIF formats, `loading="lazy"` on off-screen assets, explicit `width`/`height` to avoid CLS.
- [ ] **Asset Minification & Caching**: Inline critical CSS or preconnect fonts.

---

## 2. Anti-Patterns & Red Flags

| Red Flag / Mental Shortcut | Reality | Correct Action |
| :--- | :--- | :--- |
| *"Leaving `<title>Document</title>` or generic 'My Portfolio'."* | Shows up as amateurish when shared in Slack channels, LinkedIn posts, or Google search results. | Inject complete custom title tags and brand names. |
| *"Missing `og:image` or social preview tags."* | Sharing your portfolio link produces an empty gray box with broken previews. | Add complete OpenGraph (1200x630) and Twitter Card metadata. |
| *"No JSON-LD structured data."* | Search engines miss the opportunity to link your profile to your GitHub and LinkedIn. | Include Schema.org `Person` markup. |

---

## 3. Implementation Workflow

1. Consult the [Schema and Meta Template Reference](./references/schema-and-meta-template.md).
2. Populate the portfolio's `<head>` with:
   - Canonical URL, primary meta tags, and responsive viewport.
   - OpenGraph and Twitter summary cards.
   - Preconnect hints for Google Fonts (`fonts.googleapis.com` & `fonts.gstatic.com`).
   - JSON-LD `@context: "https://schema.org"` script block.
3. Verify Lighthouse scores (Performance, Accessibility, Best Practices, SEO).
