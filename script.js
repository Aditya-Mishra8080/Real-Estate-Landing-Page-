/* =============================================
   LUMINA ESTATES — Interactive JavaScript
   ============================================= */

// ---- PROPERTIES DATA ----
const properties = [
  {
    id: 1, type: 'villa', badge: 'Featured', badgeClass: 'featured',
    title: 'Oakwood Grand Villa', location: '📍 Whitefield, Bangalore',
    beds: 5, baths: 6, sqft: '4,800',
    price: '₹3.8 Cr',
    img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80'
  },
  {
    id: 2, type: 'apartment', badge: 'New Launch', badgeClass: 'new',
    title: 'Sky Residences 42F', location: '📍 Bandra West, Mumbai',
    beds: 3, baths: 3, sqft: '1,950',
    price: '₹2.15 Cr',
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80'
  },
  {
    id: 3, type: 'penthouse', badge: 'Premium', badgeClass: 'featured',
    title: 'The Pinnacle Penthouse', location: '📍 Golf Course Road, Gurgaon',
    beds: 4, baths: 5, sqft: '6,200',
    price: '₹7.5 Cr',
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80'
  },
  {
    id: 4, type: 'apartment', badge: 'Ready to Move', badgeClass: 'new',
    title: 'Serenity Heights 3BHK', location: '📍 Kondapur, Hyderabad',
    beds: 3, baths: 2, sqft: '1,620',
    price: '₹88 L',
    img: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=600&q=80'
  },
  {
    id: 5, type: 'villa', badge: 'Exclusive', badgeClass: 'featured',
    title: 'The Heritage Farmhouse', location: '📍 Alibaug, Maharashtra',
    beds: 6, baths: 7, sqft: '8,400',
    price: '₹5.2 Cr',
    img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80'
  },
  {
    id: 6, type: 'plot', badge: 'Investment', badgeClass: 'new',
    title: 'Sunrise Valley Plot — 2400sqft', location: '📍 Sarjapur Road, Bangalore',
    beds: '—', baths: '—', sqft: '2,400',
    price: '₹65 L',
    img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80'
  },
  {
    id: 7, type: 'apartment', badge: 'New', badgeClass: 'new',
    title: 'Green Park Residency 2BHK', location: '📍 Hazratganj, Lucknow',
    beds: 2, baths: 2, sqft: '1,100',
    price: '₹52 L',
    img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80'
  },
  {
    id: 8, type: 'penthouse', badge: 'Luxury', badgeClass: 'featured',
    title: 'Marina Crown Penthouse', location: '📍 Besant Nagar, Chennai',
    beds: 5, baths: 6, sqft: '5,600',
    price: '₹6.1 Cr',
    img: 'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=600&q=80'
  }
];

// ---- CUSTOM CURSOR ----
const cursor = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursorFollower');
let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
});

function animateFollower() {
  followerX += (mouseX - followerX) * 0.14;
  followerY += (mouseY - followerY) * 0.14;
  cursorFollower.style.left = followerX + 'px';
  cursorFollower.style.top = followerY + 'px';
  requestAnimationFrame(animateFollower);
}
animateFollower();

document.querySelectorAll('a, button, .property-card, .service-card, .stat-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(2)';
    cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
    cursorFollower.style.opacity = '0.3';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
    cursorFollower.style.opacity = '0.6';
  });
});

// ---- NAVBAR SCROLL ----
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ---- HAMBURGER / MOBILE MENU ----
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
let menuOpen = false;

hamburger.addEventListener('click', () => {
  menuOpen = !menuOpen;
  mobileMenu.classList.toggle('open', menuOpen);
  hamburger.style.opacity = menuOpen ? '0.5' : '1';
});

document.querySelectorAll('.mob-link').forEach(link => {
  link.addEventListener('click', () => {
    menuOpen = false;
    mobileMenu.classList.remove('open');
  });
});

// ---- HERO SLIDESHOW ----
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function goToSlide(idx) {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = (idx + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

dots.forEach(dot => {
  dot.addEventListener('click', () => goToSlide(parseInt(dot.dataset.idx)));
});

setInterval(() => goToSlide(currentSlide + 1), 5500);

// ---- SEARCH TABS ----
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});

// ---- PROPERTY CARDS RENDER ----
const propertyGrid = document.getElementById('propertyGrid');
let visibleCount = 6;
let activeFilter = 'all';

function renderProperties() {
  const filtered = activeFilter === 'all'
    ? properties
    : properties.filter(p => p.type === activeFilter);

  propertyGrid.innerHTML = '';

  filtered.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'property-card reveal-on-scroll' + (i >= visibleCount ? ' hidden' : '');
    card.innerHTML = `
      <div class="prop-img">
        <img src="${p.img}" alt="${p.title}" loading="lazy" />
        <span class="prop-badge ${p.badgeClass}">${p.badge}</span>
        <button class="prop-wishlist" onclick="toggleWishlist(this)" title="Save">♡</button>
      </div>
      <div class="prop-body">
        <p class="prop-type">${p.type}</p>
        <h3 class="prop-title">${p.title}</h3>
        <p class="prop-location">${p.location}</p>
        <div class="prop-features">
          ${p.beds !== '—' ? `<span class="prop-feature">🛏 ${p.beds} Beds</span>` : ''}
          ${p.baths !== '—' ? `<span class="prop-feature">🚿 ${p.baths} Baths</span>` : ''}
          <span class="prop-feature">📐 ${p.sqft} sqft</span>
        </div>
        <div class="prop-footer">
          <span class="prop-price">${p.price}</span>
          <button class="prop-cta" onclick="scrollToSection('contact')">View Details</button>
        </div>
      </div>
    `;
    propertyGrid.appendChild(card);
  });

  observeReveal();
  updateLoadMore(filtered.length);
}

function updateLoadMore(total) {
  const btn = document.getElementById('loadMore');
  if (visibleCount >= total) {
    btn.style.display = 'none';
  } else {
    btn.style.display = '';
    btn.textContent = `Load More Properties (${total - visibleCount} more)`;
  }
}

document.getElementById('loadMore').addEventListener('click', () => {
  visibleCount += 3;
  renderProperties();
});

// ---- FILTER BUTTONS ----
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    visibleCount = 6;
    propertyGrid.style.opacity = '0';
    setTimeout(() => {
      renderProperties();
      propertyGrid.style.transition = 'opacity 0.4s';
      propertyGrid.style.opacity = '1';
    }, 200);
  });
});

// ---- WISHLIST TOGGLE ----
function toggleWishlist(btn) {
  btn.classList.toggle('liked');
  btn.textContent = btn.classList.contains('liked') ? '♥' : '♡';
  btn.style.color = btn.classList.contains('liked') ? '#e04444' : '';
}

// ---- SCROLL-REVEAL OBSERVER ----
function observeReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
}

// ---- COUNTER ANIMATION ----
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const duration = 1800;
  const start = Date.now();

  function update() {
    const elapsed = Date.now() - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(eased * target);
    el.textContent = current.toLocaleString('en-IN');
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target.toLocaleString('en-IN');
  }
  update();
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.stat-num').forEach(animateCounter);
      statsObserver.disconnect();
    }
  });
}, { threshold: 0.4 });

const statsSection = document.getElementById('stats');
if (statsSection) statsObserver.observe(statsSection);

// ---- TESTIMONIAL SLIDER ----
const testimonials = document.querySelectorAll('.testimonial-card');
let currentT = 0;

function goToTestimonial(idx) {
  testimonials[currentT].classList.remove('active');
  currentT = (idx + testimonials.length) % testimonials.length;
  testimonials[currentT].classList.add('active');
}

document.getElementById('tNext').addEventListener('click', () => goToTestimonial(currentT + 1));
document.getElementById('tPrev').addEventListener('click', () => goToTestimonial(currentT - 1));

// Auto-rotate testimonials
setInterval(() => goToTestimonial(currentT + 1), 6000);

// ---- CONTACT FORM ----
document.getElementById('submitBtn').addEventListener('click', () => {
  const name = document.getElementById('fName').value.trim();
  const phone = document.getElementById('fPhone').value.trim();
  const email = document.getElementById('fEmail').value.trim();

  if (!name || !phone || !email) {
    const inputs = [
      { el: document.getElementById('fName'), val: name },
      { el: document.getElementById('fPhone'), val: phone },
      { el: document.getElementById('fEmail'), val: email }
    ];
    inputs.forEach(({ el, val }) => {
      if (!val) {
        el.style.borderColor = '#e04444';
        el.addEventListener('input', () => el.style.borderColor = '', { once: true });
      }
    });
    return;
  }

  const btn = document.getElementById('submitBtn');
  btn.textContent = 'Sending...';
  btn.disabled = true;

  setTimeout(() => {
    document.getElementById('contactForm').style.display = 'none';
    const success = document.getElementById('formSuccess');
    success.classList.add('show');
  }, 1200);
});

// ---- SMOOTH SCROLL ----
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ---- SERVICE CARDS HOVER PARTICLE EFFECT ----
document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
    card.style.transform = `translateY(-6px) rotateX(${-y}deg) rotateY(${x}deg)`;
    card.style.transition = 'transform 0.1s';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.transition = 'transform 0.4s ease';
  });
});

// ---- APPLY REVEAL TO SECTIONS ----
function applyRevealClass() {
  const revealTargets = [
    '.section-header', '.stat-card', '.service-card',
    '.testimonial-card', '.contact-left', '.contact-right',
    '.footer-brand', '.footer-links'
  ];
  revealTargets.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      if (!el.classList.contains('reveal-on-scroll')) {
        el.classList.add('reveal-on-scroll');
      }
    });
  });
}

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  renderProperties();
  applyRevealClass();
  observeReveal();

  // Re-observe on nav link click (handles anchor jumps)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
});

// ---- SCROLL-TRIGGERED PARALLAX ON HERO ----
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const heroContent = document.querySelector('.hero-content');
  if (heroContent && scrollY < window.innerHeight) {
    heroContent.style.transform = `translateY(${scrollY * 0.25}px)`;
    heroContent.style.opacity = 1 - (scrollY / (window.innerHeight * 0.7));
  }
});

// ---- SEARCH BUTTON EFFECT ----
document.querySelector('.search-btn').addEventListener('click', function () {
  this.textContent = 'Searching...';
  this.style.background = '#8a6a1f';
  setTimeout(() => {
    this.textContent = 'Search';
    this.style.background = '';
    scrollToSection('properties');
  }, 1000);
});
