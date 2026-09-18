# Production Deployment & Hosting Configurations

This reference details zero-config deployment configurations, custom domain setups, security headers, and privacy-friendly analytics for Vercel, Cloudflare Pages, Netlify, and GitHub Pages.

---

## 1. Vercel Configuration (`vercel.json`)

```json
{
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        }
      ]
    },
    {
      "source": "/(.*\.(?:png|jpg|jpeg|svg|webp|avif|ico|woff|woff2))",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

---

## 2. Cloudflare Pages Configuration (`_headers`)

Create a `_headers` file in the root:

```text
/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Referrer-Policy: strict-origin-when-cross-origin

/*.png
  Cache-Control: public, max-age=31536000, immutable

/*.svg
  Cache-Control: public, max-age=31536000, immutable

/*.webp
  Cache-Control: public, max-age=31536000, immutable
```

---

## 3. GitHub Pages Automated Workflow (`.github/workflows/deploy.yml`)

```yaml
name: Deploy Portfolio to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: '.'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## 4. Privacy-Friendly Analytics Integration (Umami / Plausible / Cloudflare)

To track visitor numbers, referral sources (e.g. LinkedIn vs Twitter vs GitHub), and project click-throughs without intrusive cookies or GDPR banners:

```html
<!-- Example: Plausible Analytics (Lightweight 1KB script) -->
<script defer data-domain="yourdomain.dev" src="https://plausible.io/js/script.js"></script>

<!-- Or Cloudflare Web Analytics (Zero-cookie privacy mode) -->
<!-- Injected automatically via Cloudflare dashboard -->
```
