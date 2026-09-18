# 60fps Micro-Interactions & Interactive Motion Recipes

This reference provides production-ready, zero-dependency JavaScript & CSS recipes for smooth scroll reveals, ambient canvas particles, magnetic hover buttons, 3D card tilt physics, and `prefers-reduced-motion` handling.

---

## 1. Zero-Dependency Ambient Canvas Particles (Hero Background)

```javascript
// Ambient Canvas Particle Mesh (Lightweight, 60fps, responsive)
function initAmbientCanvas(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let animationFrameId;
  let particles = [];
  let width, height;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resize);
  resize();

  const particleCount = Math.min(Math.floor(window.innerWidth / 25), 60);

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.radius = Math.random() * 2 + 1;
      this.alpha = Math.random() * 0.5 + 0.2;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      if (this.y > height) this.y = 0;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(6, 214, 160, ${this.alpha})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Draw particle connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(168, 85, 247, ${0.15 * (1 - dist / 120)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
      particles[i].update();
      particles[i].draw();
    }

    animationFrameId = requestAnimationFrame(render);
  }

  render();

  return () => {
    cancelAnimationFrame(animationFrameId);
    window.removeEventListener('resize', resize);
  };
}
```

---

## 2. Scroll-Triggered Reveal Animations (IntersectionObserver)

```javascript
function initScrollReveal() {
  const revealElements = document.querySelectorAll('[data-reveal]');
  
  // Check for reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    revealElements.forEach(el => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach((el, index) => {
    el.style.transitionDelay = `${(index % 3) * 0.1}s`;
    observer.observe(el);
  });
}
```

### Accompanying CSS:
```css
[data-reveal] {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform;
}

[data-reveal].revealed {
  opacity: 1;
  transform: translateY(0);
}
```

---

## 3. 3D Card Tilt Physics (Mouse Follower)

```javascript
function initCardTilt() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || 'ontouchstart' in window) return;

  const cards = document.querySelectorAll('.project-card, .glass-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -7;
      const rotateY = ((x - centerX) / centerX) * 7;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });
}
```

---

## 4. Interactive Project Filter Tabs

```javascript
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filter = btn.dataset.filter;

      projectCards.forEach(card => {
        const category = card.dataset.category;
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          setTimeout(() => card.classList.add('revealed'), 10);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}
```

---

## 5. Copy Email to Clipboard with Interactive Toast

```javascript
function initEmailCopy() {
  const copyBtn = document.getElementById('copyEmailBtn');
  const toast = document.getElementById('toast');
  if (!copyBtn || !toast) return;

  copyBtn.addEventListener('click', async () => {
    const email = copyBtn.dataset.email || 'hello@example.com';
    try {
      await navigator.clipboard.writeText(email);
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2500);
    } catch (err) {
      console.warn('Clipboard write failed:', err);
    }
  });
}
```
