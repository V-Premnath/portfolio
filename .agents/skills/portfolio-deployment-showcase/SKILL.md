---
name: portfolio-deployment-showcase
description: "Configures production hosting, zero-config deployments (Vercel, Cloudflare Pages, GitHub Pages), security headers, caching, and privacy-respecting analytics for portfolios. Use when preparing for launch or deploying."
---

# Portfolio Production Deployment & Showcase

The Deployment & Showcase skill handles the final stage of publishing your portfolio to the world with high availability, lightning-fast edge CDN delivery, SSL encryption, and analytics.

<HARD-GATE>
Verify all asset paths are relative or configured with proper production base paths, security headers are declared, and all build/distribution artifacts are validated before pushing live.
</HARD-GATE>

---

## 1. Supported Platforms & Capabilities

1. **Vercel**: Instant zero-config edge deployments with automatic preview links for each Git branch.
2. **Cloudflare Pages**: Global edge network with free SSL, built-in analytics, and ultra-low latency.
3. **GitHub Pages**: Free hosting with automated GitHub Actions workflows directly from the repository.
4. **Netlify**: Seamless CDN hosting with form handling and edge functions.

---

## 2. Anti-Patterns & Red Flags

| Red Flag / Mental Shortcut | Reality | Correct Action |
| :--- | :--- | :--- |
| *"Deploying without asset caching headers."* | Browsers re-fetch heavy assets on every page visit, slowing reload times. | Configure immutable caching headers for static assets (`max-age=31536000`). |
| *"Using heavy trackers (Google Analytics with 50KB cookies) that trigger GDPR cookie popups."* | Annoying cookie banners ruin the user experience on a sleek portfolio. | Use lightweight, privacy-first analytics (Cloudflare Analytics, Plausible, or Umami). |
| *"Hardcoding `http://` or absolute local paths like `C:/...`."* | Breaks all images and stylesheets when deployed on a public domain. | Use clean relative paths or root-relative `/` paths. |

---

## 3. Implementation Workflow

1. Consult the [Platform Configs Reference](./references/platform-configs.md).
2. Generate the appropriate deployment configuration (`vercel.json`, `_headers`, or `.github/workflows/deploy.yml`).
3. Set up custom domain and DNS records (A / CNAME records).
4. Run final verification on the live production URL.
