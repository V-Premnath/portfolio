# Portfolio Section Blueprints & Semantic HTML Architecture

This reference provides modular, production-ready semantic HTML and CSS patterns for every essential portfolio section.

---

## 1. Sticky Navigation with Ambient Blur & Live Status

```html
<header id="navbar" class="nav-header">
  <div class="nav-container">
    <a href="#hero" class="nav-logo" aria-label="Home">
      <span class="logo-mark">&lt;/&gt;</span>
      <span class="logo-text">Alex Rivera</span>
    </a>
    
    <nav class="nav-links" aria-label="Main Navigation">
      <a href="#projects" class="nav-link">Projects</a>
      <a href="#experience" class="nav-link">Experience</a>
      <a href="#skills" class="nav-link">Skills</a>
      <a href="#about" class="nav-link">About</a>
      <a href="#contact" class="nav-link nav-cta">Let's Talk</a>
    </nav>
    
    <!-- Mobile Menu Toggle Button -->
    <button class="nav-toggle" id="navToggle" aria-label="Toggle Navigation Menu" aria-expanded="false">
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
    </button>
  </div>
</header>
```

---

## 2. High-Impact Hero Section

```html
<section id="hero" class="section hero-section">
  <!-- Interactive Ambient Canvas Background -->
  <canvas id="ambient-canvas" class="hero-canvas" aria-hidden="true"></canvas>

  <div class="container hero-content">
    <div class="status-badge" data-reveal>
      <span class="status-dot"></span>
      <span class="status-text">Available for new opportunities</span>
    </div>

    <h1 class="hero-title" data-reveal>
      Architecting <span class="text-gradient">high-scale web apps</span> with modern precision.
    </h1>

    <p class="hero-subtitle" data-reveal>
      Senior Full-Stack Engineer specializing in resilient distributed systems, interactive UI architectures, and lightning-fast web experiences.
    </p>

    <div class="hero-actions" data-reveal>
      <a href="#projects" class="btn btn-primary">
        <span>Explore Work</span>
        <svg class="icon-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
      <a href="#contact" class="btn btn-secondary">
        <span>Get in Touch</span>
      </a>
    </div>

    <!-- Quick Tech Badges -->
    <div class="hero-tech-strip" data-reveal>
      <span class="tech-strip-label">Core Stack:</span>
      <div class="tech-tags">
        <span class="tag">TypeScript</span>
        <span class="tag">React / Next.js</span>
        <span class="tag">Node.js</span>
        <span class="tag">PostgreSQL</span>
        <span class="tag">TailwindCSS</span>
        <span class="tag">AWS / Docker</span>
      </div>
    </div>
  </div>
</section>
```

---

## 3. Interactive Flagship Projects Showcase

```html
<section id="projects" class="section projects-section">
  <div class="container">
    <div class="section-header" data-reveal>
      <span class="section-eyebrow">Selected Works</span>
      <h2 class="section-title">Flagship Projects</h2>
      <p class="section-desc">A curated selection of applications built for scale, performance, and user joy.</p>
    </div>

    <!-- Project Filter Tabs -->
    <div class="filter-bar" data-reveal role="tablist">
      <button class="filter-btn active" data-filter="all" role="tab" aria-selected="true">All</button>
      <button class="filter-btn" data-filter="fullstack" role="tab" aria-selected="false">Full-Stack</button>
      <button class="filter-btn" data-filter="creative" role="tab" aria-selected="false">Creative/3D</button>
      <button class="filter-btn" data-filter="systems" role="tab" aria-selected="false">Systems/API</button>
    </div>

    <div class="projects-grid">
      <!-- Project Card -->
      <article class="project-card glass-card" data-category="fullstack" data-reveal>
        <div class="project-preview">
          <div class="preview-overlay">
            <a href="https://example.com" target="_blank" rel="noopener noreferrer" class="preview-link-btn" aria-label="View Live Project">
              <span>Live Demo</span> ↗
            </a>
          </div>
          <!-- Project Visual / Mockup -->
          <div class="project-mockup" style="background: linear-gradient(135deg, hsl(222, 40%, 15%), hsl(270, 40%, 20%));">
            <div class="mockup-header">
              <span class="mockup-dot"></span><span class="mockup-dot"></span><span class="mockup-dot"></span>
            </div>
            <div class="mockup-body">
              <span class="mockup-label">Real-time Analytics Dashboard</span>
            </div>
          </div>
        </div>

        <div class="project-info">
          <div class="project-tags">
            <span class="badge">Next.js 14</span>
            <span class="badge">WebSockets</span>
            <span class="badge">ClickHouse</span>
          </div>

          <h3 class="project-title">StreamMetrics Analytics</h3>
          <p class="project-summary">
            A real-time telemetry and user event tracking platform processing over 5M+ daily ingestion events with sub-50ms query latency.
          </p>

          <div class="project-metrics">
            <div class="metric-item">
              <span class="metric-value">-55%</span>
              <span class="metric-label">Query Latency</span>
            </div>
            <div class="metric-item">
              <span class="metric-value">99.99%</span>
              <span class="metric-label">Uptime SLA</span>
            </div>
          </div>

          <div class="project-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="link-inline">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              <span>Source Code</span>
            </a>
            <a href="https://demo.com" target="_blank" rel="noopener noreferrer" class="link-inline">
              <span>Live Application ↗</span>
            </a>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>
```

---

## 4. Career Timeline & Experience Section

```html
<section id="experience" class="section experience-section">
  <div class="container">
    <div class="section-header" data-reveal>
      <span class="section-eyebrow">Trajectory</span>
      <h2 class="section-title">Career Experience</h2>
    </div>

    <div class="timeline">
      <div class="timeline-item glass-card" data-reveal>
        <div class="timeline-meta">
          <span class="timeline-period">2023 — Present</span>
          <span class="timeline-company">Vanguard Tech Labs</span>
          <span class="timeline-location">Remote / San Francisco</span>
        </div>
        <div class="timeline-content">
          <h3 class="timeline-role">Staff Frontend Engineer</h3>
          <p class="timeline-desc">
            Led the frontend architecture revamp for the enterprise SaaS platform. Mentored 8 engineers and migrated 120+ views to Next.js App Router.
          </p>
          <ul class="timeline-highlights">
            <li>Achieved a 40% improvement in First Contentful Paint across all core dashboards.</li>
            <li>Designed and published the internal UI component system used by 4 product teams.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## 5. Interactive Skills & Capabilities Matrix

```html
<section id="skills" class="section skills-section">
  <div class="container">
    <div class="section-header" data-reveal>
      <span class="section-eyebrow">Competencies</span>
      <h2 class="section-title">Technical Expertise</h2>
    </div>

    <div class="skills-grid">
      <div class="skill-category glass-card" data-reveal>
        <div class="category-header">
          <span class="category-icon">⚡</span>
          <h3 class="category-title">Frontend & UI Engineering</h3>
        </div>
        <div class="skill-chips">
          <span class="skill-chip">TypeScript</span>
          <span class="skill-chip">React / Next.js</span>
          <span class="skill-chip">Vue.js</span>
          <span class="skill-chip">TailwindCSS</span>
          <span class="skill-chip">Three.js / WebGL</span>
          <span class="skill-chip">Framer Motion</span>
          <span class="skill-chip">State Machines (XState)</span>
        </div>
      </div>

      <div class="skill-category glass-card" data-reveal>
        <div class="category-header">
          <span class="category-icon">🛠️</span>
          <h3 class="category-title">Backend & Systems</h3>
        </div>
        <div class="skill-chips">
          <span class="skill-chip">Node.js / Express</span>
          <span class="skill-chip">Golang</span>
          <span class="skill-chip">PostgreSQL & Prisma</span>
          <span class="skill-chip">Redis Caching</span>
          <span class="skill-chip">GraphQL / REST</span>
          <span class="skill-chip">Kafka Event Streams</span>
        </div>
      </div>

      <div class="skill-category glass-card" data-reveal>
        <div class="category-header">
          <span class="category-icon">☁️</span>
          <h3 class="category-title">DevOps & Cloud</h3>
        </div>
        <div class="skill-chips">
          <span class="skill-chip">Docker & Kubernetes</span>
          <span class="skill-chip">AWS (Lambda, S3, ECS)</span>
          <span class="skill-chip">CI/CD (GitHub Actions)</span>
          <span class="skill-chip">Terraform</span>
          <span class="skill-chip">Vercel Edge Network</span>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## 6. Contact & Conversion Section

```html
<section id="contact" class="section contact-section">
  <div class="container contact-container glass-card" data-reveal>
    <div class="contact-header">
      <span class="section-eyebrow">Get In Touch</span>
      <h2 class="contact-title">Let's build something extraordinary together.</h2>
      <p class="contact-subtitle">
        Whether you have a breakthrough product idea, need technical advisory, or want to discuss full-time roles, I'd love to connect.
      </p>
    </div>

    <div class="contact-actions">
      <!-- Direct Email Copy Button with Feedback -->
      <button class="btn btn-primary" id="copyEmailBtn" data-email="hello@example.com">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        <span id="copyEmailText">hello@example.com</span>
      </button>

      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
        <span>Connect on LinkedIn ↗</span>
      </a>
    </div>

    <!-- Feedback Toast -->
    <div id="toast" class="toast" role="status" aria-live="polite">Email copied to clipboard!</div>
  </div>
</section>
```
