/**
 * V PREMNATH - ELITE BACKEND & CLOUD SYSTEMS PORTFOLIO
 * Core Logic: Three.js Interactive 3D Background, API Sandbox, 3D Tilt, Filters, & Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  initThreeJsBackground();
  initApiSandbox();
  initScrollReveal();
  initProjectFilters();
  initCardTilt();
  initEmailCopy();
  initMobileNav();
});

/* ==========================================================================
   1. THREE.JS 3D INTERACTIVE PARTICLE WAVE / TOPOLOGY BACKGROUND
   ========================================================================== */
function initThreeJsBackground() {
  const container = document.getElementById('three-canvas-container');
  if (!container || typeof THREE === 'undefined') return;

  // Check if reduced motion is requested
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let scene, camera, renderer, particles, count = 0;
  let mouseX = 0, mouseY = 0;
  let windowHalfX = window.innerWidth / 2;
  let windowHalfY = window.innerHeight / 2;

  const SEPARATION = 85, AMOUNTX = 60, AMOUNTY = 60;

  // 1. Scene setup
  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x05070e, 0.0012);

  // 2. Camera setup
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.set(0, 350, 1000);

  // 3. Particle Grid Geometry
  const numParticles = AMOUNTX * AMOUNTY;
  const positions = new Float32Array(numParticles * 3);
  const scales = new Float32Array(numParticles);
  const colors = new Float32Array(numParticles * 3);

  // Colors: Gradient between Electric Cyan (#06d6a0), Neon Violet (#a855f7), and Emerald (#10b981)
  const color1 = new THREE.Color(0x06d6a0); // Cyan
  const color2 = new THREE.Color(0xa855f7); // Violet
  const color3 = new THREE.Color(0x10b981); // Emerald

  let i = 0, j = 0;
  for (let ix = 0; ix < AMOUNTX; ix++) {
    for (let iy = 0; iy < AMOUNTY; iy++) {
      positions[i] = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2); // x
      positions[i + 1] = 0; // y
      positions[i + 2] = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2); // z

      scales[j] = 1.8;

      // Interpolate color across the grid
      const mixRatio = (ix / AMOUNTX) * 0.7 + (iy / AMOUNTY) * 0.3;
      const particleColor = color1.clone().lerp(mixRatio > 0.5 ? color2 : color3, mixRatio);

      colors[i] = particleColor.r;
      colors[i + 1] = particleColor.g;
      colors[i + 2] = particleColor.b;

      i += 3;
      j++;
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  // 4. Custom Particle Material with circular texture
  const particleCanvas = document.createElement('canvas');
  particleCanvas.width = 32;
  particleCanvas.height = 32;
  const pCtx = particleCanvas.getContext('2d');
  const gradient = pCtx.createRadialGradient(16, 16, 0, 16, 16, 16);
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
  gradient.addColorStop(0.3, 'rgba(6, 214, 160, 0.8)');
  gradient.addColorStop(1, 'rgba(6, 214, 160, 0)');
  pCtx.fillStyle = gradient;
  pCtx.fillRect(0, 0, 32, 32);

  const particleTexture = new THREE.CanvasTexture(particleCanvas);

  const material = new THREE.PointsMaterial({
    size: 9,
    map: particleTexture,
    vertexColors: true,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  particles = new THREE.Points(geometry, material);
  scene.add(particles);

  // 5. Renderer setup
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x05070e, 0);
  container.appendChild(renderer.domElement);

  // 6. Interactive Mouse Events
  document.addEventListener('mousemove', onDocumentMouseMove, { passive: true });
  window.addEventListener('resize', onWindowResize, false);

  function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function onDocumentMouseMove(event) {
    mouseX = (event.clientX - windowHalfX) * 0.45;
    mouseY = (event.clientY - windowHalfY) * 0.35;
  }

  // 7. Animation Loop (60fps dynamic 3D waves)
  function animate() {
    requestAnimationFrame(animate);

    // Smooth camera orbiting
    camera.position.x += (mouseX - camera.position.x) * 0.04;
    camera.position.y += (-mouseY + 320 - camera.position.y) * 0.04;
    camera.lookAt(0, 50, 0);

    const positions = particles.geometry.attributes.position.array;
    const scales = particles.geometry.attributes.scale.array;

    let i = 0, j = 0;
    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        // Multi-frequency undulating wave equations
        positions[i + 1] = (Math.sin((ix + count) * 0.3) * 45) + (Math.sin((iy + count) * 0.45) * 45);
        scales[j] = (Math.sin((ix + count) * 0.3) + 1) * 3 + (Math.sin((iy + count) * 0.45) + 1) * 3;

        i += 3;
        j++;
      }
    }

    particles.geometry.attributes.position.needsUpdate = true;
    particles.geometry.attributes.scale.needsUpdate = true;

    count += 0.038;
    renderer.render(scene, camera);
  }

  animate();
}

/* ==========================================================================
   2. INTERACTIVE API SANDBOX & TERMINAL SIMULATOR
   ========================================================================== */
function initApiSandbox() {
  const tabs = document.querySelectorAll('.terminal-tab-btn');
  const endpointDisplay = document.getElementById('sandbox-endpoint');
  const methodDisplay = document.getElementById('sandbox-method');
  const requestBodyDisplay = document.getElementById('sandbox-req-body');
  const responseBodyDisplay = document.getElementById('sandbox-res-body');
  const statusBadge = document.getElementById('sandbox-status-badge');
  const latencyBadge = document.getElementById('sandbox-latency-badge');
  const runBtn = document.getElementById('run-sandbox-btn');

  if (!tabs.length || !runBtn) return;

  const sandboxEndpoints = {
    auth: {
      method: 'POST',
      endpoint: '/api/v1/auth/token',
      reqBody: `{\n  "grant_type": "password",\n  "username": "premnath.engineer",\n  "scope": "role:admin rbac:write microservices:deploy"\n}`,
      resBody: `{\n  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",\n  "token_type": "Bearer",\n  "expires_in": 3600,\n  "refresh_token": "rt_98fbc2e1a47b...",\n  "user": {\n    "id": "eng_01HQ7",\n    "name": "V Premnath",\n    "role": "STAFF_BACKEND_ENGINEER",\n    "permissions": ["ALL_MICROSERVICES", "AWS_DEPLOY", "DB_OPTIMIZE"],\n    "auth_strategy": "OAuth2 + Multi-Tenant RBAC"\n  }\n}`,
      statusCode: '200 OK',
      latency: '18ms'
    },
    pharma: {
      method: 'GET',
      endpoint: '/api/v1/pharmacy/split-orders?order_id=ORD-9428',
      reqBody: `// PharmaEase Intelligent Order Splitting Workflow\n// Parameters:\n{\n  "order_id": "ORD-9428",\n  "multi_tenant_id": "TENANT_HYD_09",\n  "prescriptions_verified": true\n}`,
      resBody: `{\n  "status": "SPLIT_SUCCESS",\n  "order_id": "ORD-9428",\n  "total_items": 7,\n  "fulfillment_batches": [\n    {\n      "batch_id": "FB-01-COLD_CHAIN",\n      "items": ["Insulin Glargine 100IU", "Biologic Vials"],\n      "storage_temp": "2-8°C",\n      "warehouse": "Central Cold Hub - Hyd"\n    },\n    {\n      "batch_id": "FB-02-GENERAL",\n      "items": ["Amoxicillin 500mg", "Paracetamol IP"],\n      "warehouse": "Regional Express Hub"\n    }\n  ],\n  "rbac_audit": "Verified by Pharmacist Lead [ID: RX-44]"\n}`,
      statusCode: '200 OK',
      latency: '24ms'
    },
    telemetry: {
      method: 'GET',
      endpoint: '/api/v1/system/telemetry',
      reqBody: `// Live Production Performance Telemetry\n{\n  "cluster": "aws-production-cluster-01",\n  "metrics": ["query_latency", "api_p99", "error_rate"]\n}`,
      resBody: `{\n  "cluster_health": "OPTIMAL",\n  "shipped_applications": [\n    "GolfNex (Google Play)",\n    "abiozen.com",\n    "aroscompliance.com",\n    "Linkabl",\n    "PlayNexa",\n    "Favly"\n  ],\n  "metrics": {\n    "api_response_improvement": "+40% faster",\n    "sql_query_optimization": "+50% throughput",\n    "test_overhead_reduction": "-60% via Playwright",\n    "uptime_sla": "99.99%",\n    "p99_latency_ms": 32\n  }\n}`,
      statusCode: '200 OK',
      latency: '14ms'
    },
    benchmark: {
      method: 'POST',
      endpoint: '/api/v1/benchmark/query-optimizer',
      reqBody: `{\n  "query_type": "COMPLEX_MULTI_JOIN",\n  "records_scanned": 1250000,\n  "indexes_applied": ["idx_tenant_created", "idx_order_status_hash"]\n}`,
      resBody: `{\n  "optimization_report": {\n    "original_exec_time": "384ms",\n    "optimized_exec_time": "41ms",\n    "improvement": "89.3% reduction",\n    "technique": "Composite Covering Indexes + Connection Pooling",\n    "buffer_cache_hit_ratio": "99.4%"\n  }\n}`,
      statusCode: '200 OK',
      latency: '28ms'
    }
  };

  let currentKey = 'auth';

  function updateSandboxView(key) {
    currentKey = key;
    const data = sandboxEndpoints[key];
    if (!data) return;

    endpointDisplay.textContent = data.endpoint;
    methodDisplay.textContent = data.method;
    methodDisplay.className = `method-tag method-${data.method.toLowerCase()}`;
    requestBodyDisplay.textContent = data.reqBody;

    executeSandboxRequest(data);
  }

  function executeSandboxRequest(data) {
    responseBodyDisplay.textContent = '// Sending request to microservice cluster...';
    statusBadge.textContent = 'CONNECTING...';
    statusBadge.style.color = '#f59e0b';
    latencyBadge.textContent = '...';

    setTimeout(() => {
      responseBodyDisplay.textContent = data.resBody;
      statusBadge.textContent = data.statusCode;
      statusBadge.style.color = '#10b981';
      latencyBadge.textContent = `⚡ ${data.latency}`;
    }, 280);
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const key = tab.dataset.endpoint;
      updateSandboxView(key);
    });
  });

  runBtn.addEventListener('click', () => {
    const data = sandboxEndpoints[currentKey];
    executeSandboxRequest(data);
  });
}

/* ==========================================================================
   3. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
   ========================================================================== */
function initScrollReveal() {
  const elements = document.querySelectorAll('[data-reveal]');
  if (!elements.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    elements.forEach(el => el.classList.add('revealed'));
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
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach((el, index) => {
    el.style.transitionDelay = `${(index % 4) * 0.08}s`;
    observer.observe(el);
  });
}

/* ==========================================================================
   4. INTERACTIVE PROJECT FILTER TABS
   ========================================================================== */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      projectCards.forEach(card => {
        const category = card.dataset.category || '';
        const tags = (card.dataset.tags || '').split(' ');
        
        if (filter === 'all' || category === filter || tags.includes(filter)) {
          card.style.display = 'flex';
          setTimeout(() => card.classList.add('revealed'), 20);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   5. 3D CARD TILT PHYSICS (DESKTOP MOUSE FOLLOW)
   ========================================================================== */
function initCardTilt() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || 'ontouchstart' in window) return;

  const tiltCards = document.querySelectorAll('.project-card, .profile-avatar-frame, .terminal-container');

  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });
}

/* ==========================================================================
   6. EMAIL COPY TO CLIPBOARD WITH TOAST
   ========================================================================== */
function initEmailCopy() {
  const copyBtns = document.querySelectorAll('.copy-email-trigger');
  const toast = document.getElementById('toast-notification');
  const email = 'vpremnath1509@gmail.com';

  copyBtns.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      try {
        await navigator.clipboard.writeText(email);
        if (toast) {
          toast.textContent = '✓ Email copied: vpremnath1509@gmail.com';
          toast.classList.add('show');
          setTimeout(() => toast.classList.remove('show'), 2800);
        }
      } catch (err) {
        window.location.href = `mailto:${email}`;
      }
    });
  });
}

/* ==========================================================================
   7. MOBILE NAVIGATION DRAWER
   ========================================================================== */
function initMobileNav() {
  const navToggle = document.getElementById('nav-toggle-btn');
  const navMenu = document.getElementById('nav-menu-list');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!navToggle || !navMenu) return;

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navMenu.classList.toggle('open');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('open');
      navMenu.classList.remove('open');
    });
  });
}
