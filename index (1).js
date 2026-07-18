// ============================================
// Eshi Flowers Bouquet - index.js
// Complete Interactive Functionality
// ============================================

// --- Data & Config ---
const translations = {
  en: {
    brand: "Eshi flowers bouquet💐",
    heroTitle: "Fresh Flowers, Delivered with Love 💐",
    heroDesc: "Handcrafted bouquets for every occasion. Premium quality flowers delivered beautifully and carefully to your doorstep.",
    shopNow: "🛍️ Shop Now",
    orderWA: "💬 Order via WhatsApp",
    servicesTitle: "Special Services",
    delivery: "🚚 Delivery",
    securePay: "🛡️ Secure Payments",
    customBouquet: "🎨 Custom Bouquets",
    premiumQuality: "⭐ Premium Quality",
    occasionTitle: "Shop by Occasion",
    occasionDesc: "Find the perfect bouquet for every special moment",
    birthday: "🎂 Birthday Flowers",
    birthdayDesc: "Make their day bloom",
    singleFlowers: "Single flowers 🌺",
    singleDesc: "Single flowers",
    anniversary: "❤️ Anniversary Bouquets",
    anniversaryDesc: "Celebrate your love",
    wedding: "💍 Wedding Flowers",
    weddingDesc: "Elegant arrangements",
    photoShoot: "Photo shoot flowers 📸",
    photoDesc: "Photo shoot",
    getWell: "🌼 Get Well Soon",
    getWellDesc: "Send healing wishes",
    springGarden: "Spring Garden [Best Value] 🌿",
    springDesc: "Mixed Season",
    designTitle: "Design Your Own Bouquet",
    designDesc: "Create a unique arrangement that perfectly matches your vision. Choose your favorite flowers, colors, and style.",
    feature1: "✅ Pick your wrapping style",
    feature2: "✅ Delivery available",
    startCustom: "🎨 Start Customizing",
    reviewsTitle: "Customer Reviews",
    serviceAreas: "Service Areas",
    contactTitle: "Get In Touch",
    orderWATitle: "Order via WhatsApp",
    orderWADesc: "Quick & easy ordering through WhatsApp. Get instant replies and personalized service.",
    chatWA: "💬 Chat on WhatsApp",
    about: "About",
    aboutText: "Bloom and Bliss - Bringing happiness through beautiful, fresh flowers. Lovingly crafted and carefully delivered to make every moment special.",
    quickLinks: "Quick Links",
    support: "Support Links",
    copyright: "© 2026 Bloom & Bliss. All rights reserved. Crafted with ❤️ by Eshani.",
    home: "Home",
    shop: "Shop Bouquets",
    sympathy: "Sympathy Flowers",
    tracking: "Order Tracking",
    deliveryInfo: "Delivery Info",
    refund: "Refund Policy",
    faq: "FAQ",
    privacy: "Privacy Policy",
    searchPlaceholder: "Search flowers, bouquets...",
    menu: "Menu",
    language: "Language",
    theme: "Theme"
  },
  si: {
    brand: "Eshi flowers bouquet💐",
    heroTitle: "නැවුම් මල්, ආදරයෙන් බෙදා හරිනු ලැබේ 💐",
    heroDesc: "සෑම අවස්ථාවකටම ගැලපෙන ලෙස දෑතින්ම නිර්මාණය කරන ලද මල් කළඹවල්. ප්‍රවේශමෙන් සහ අලංකාරව ඔබේ නිවසටම ගෙනත් දෙන උසස්ම තත්ත්වයේ මල්",
    shopNow: "🛍️ දැන් මිලදී ගන්න",
    orderWA: "💬 WhatsApp හරහා ඇණවුම් කරන්න",
    servicesTitle: "සුවිශේෂී සේවාවන්",
    delivery: "🚚 බෙදා හැරීම",
    securePay: "🛡️ ආරක්ෂිත මුදල් ගෙවීම්",
    customBouquet: "🎨 Custom Bouquets",
    premiumQuality: "⭐ Premium Quality",
    occasionTitle: "අවස්ථාව අනුව තෝරන්න",
    occasionDesc: "සෑම සුවිශේෂී මොහොතකටම ගැලපෙනම මල් කළඹ සොයාගන්න",
    birthday: "🎂 Birthday Flowers",
    birthdayDesc: "Make their day bloom",
    singleFlowers: "Single flowers 🌺",
    singleDesc: "Single flowers",
    anniversary: "❤️ Anniversary Bouquets",
    anniversaryDesc: "Celebrate your love",
    wedding: "💍 Wedding Flowers",
    weddingDesc: "Elegant arrangements",
    photoShoot: "Photo shoot flowers 📸",
    photoDesc: "Photo shoot",
    getWell: "🌼 Get Well Soon",
    getWellDesc: "Send healing wishes",
    springGarden: "Spring Garden [Best Value] 🌿",
    springDesc: "Mixed Season",
    designTitle: "Design Your Own Bouquet",
    designDesc: "Create a unique arrangement that perfectly matches your vision. Choose your favorite flowers, colors, and style.",
    feature1: "✅ Pick your wrapping style",
    feature2: "✅ Delivery available",
    startCustom: "🎨 Start Customizing",
    reviewsTitle: "Customer Reviews",
    serviceAreas: "Service Areas",
    contactTitle: "අප හා සම්බන්ධ වන්න",
    orderWATitle: "WhatsApp හරහා ඇණවුම් කරන්න",
    orderWADesc: "Quick & easy ordering through WhatsApp. Get instant replies and personalized service.",
    chatWA: "💬 Chat on WhatsApp",
    about: "About",
    aboutText: "Bloom and Bliss- ලස්සන, නැවුම් මල් හරහා සතුට ළඟා කර දීම. සෑම මොහොතක්ම සුවිශේෂී කිරීම සඳහා ආදරයෙන් නිමවා ප්‍රවේශමෙන් බෙදා හරිනු ලැබේ.",
    quickLinks: "Quick Links",
    support: "Support Links",
    copyright: "© 2026 Bloom & Bliss. All rights reserved. Crafted with ❤️ by Eshani.",
    home: "Home",
    shop: "Shop Bouquets",
    sympathy: "Sympathy Flowers",
    tracking: "Order Tracking",
    deliveryInfo: "Delivery Info",
    refund: "Refund Policy",
    faq: "FAQ",
    privacy: "Privacy Policy",
    searchPlaceholder: "මල්, කළඹ සොයන්න...",
    menu: "Menu",
    language: "Language",
    theme: "Theme"
  },
  ta: {
    brand: "Eshi flowers bouquet💐",
    heroTitle: "புதிய பூக்கள், அன்புடன் வழங்கப்படுகின்றன 💐",
    heroDesc: "ஒவ்வொரு சந்தர்ப்பத்திற்கும் பொருத்தமான கைவினைப்பூக்கள். உங்கள் வீட்டிற்கு அழகாகவும் கவனமாகவும் வழங்கப்படும் தரமான பூக்கள்.",
    shopNow: "🛍️ இப்போது வாங்கவும்",
    orderWA: "💬 WhatsApp மூலம் ஆர்டர் செய்யவும்",
    servicesTitle: "சிறப்பு சேவைகள்",
    delivery: "🚚 விநியோகம்",
    securePay: "🛡️ பாதுகாப்பான கொடுப்பனவுகள்",
    customBouquet: "🎨 Custom Bouquets",
    premiumQuality: "⭐ Premium Quality",
    occasionTitle: "சந்தர்ப்பத்தின்படி வாங்கவும்",
    occasionDesc: "ஒவ்வொரு சிறப்பு தருணத்திற்கும் சரியான பூக்கட்டைக் கண்டறியவும்",
    birthday: "🎂 Birthday Flowers",
    birthdayDesc: "Make their day bloom",
    singleFlowers: "Single flowers 🌺",
    singleDesc: "Single flowers",
    anniversary: "❤️ Anniversary Bouquets",
    anniversaryDesc: "Celebrate your love",
    wedding: "💍 Wedding Flowers",
    weddingDesc: "Elegant arrangements",
    photoShoot: "Photo shoot flowers 📸",
    photoDesc: "Photo shoot",
    getWell: "🌼 Get Well Soon",
    getWellDesc: "Send healing wishes",
    springGarden: "Spring Garden [Best Value] 🌿",
    springDesc: "Mixed Season",
    designTitle: "Design Your Own Bouquet",
    designDesc: "Create a unique arrangement that perfectly matches your vision. Choose your favorite flowers, colors, and style.",
    feature1: "✅ Pick your wrapping style",
    feature2: "✅ Delivery available",
    startCustom: "🎨 Start Customizing",
    reviewsTitle: "Customer Reviews",
    serviceAreas: "Service Areas",
    contactTitle: "தொடர்பு கொள்ளுங்கள்",
    orderWATitle: "WhatsApp மூலம் ஆர்டர் செய்யவும்",
    orderWADesc: "Quick & easy ordering through WhatsApp. Get instant replies and personalized service.",
    chatWA: "💬 Chat on WhatsApp",
    about: "About",
    aboutText: "Bloom and Bliss - அழகான, புதிய பூக்கள் மூலம் மகிழ்ச்சியைக் கொண்டுவருதல். ஒவ்வொரு தருணத்தையும் சிறப்பாக்குவதற்காக அன்புடன் உருவாக்கப்பட்டு கவனமாக வழங்கப்படுகிறது.",
    quickLinks: "Quick Links",
    support: "Support Links",
    copyright: "© 2026 Bloom & Bliss. All rights reserved. Crafted with ❤️ by Eshani.",
    home: "Home",
    shop: "Shop Bouquets",
    sympathy: "Sympathy Flowers",
    tracking: "Order Tracking",
    deliveryInfo: "Delivery Info",
    refund: "Refund Policy",
    faq: "FAQ",
    privacy: "Privacy Policy",
    searchPlaceholder: "பூக்கள், கட்டுகளைத் தேடுங்கள்...",
    menu: "Menu",
    language: "Language",
    theme: "Theme"
  }
};

const flowerImages = [
  "https://files.catbox.moe/ohxps1.jpg",
  "https://files.catbox.moe/3x0uf5.jpg",
  "https://files.catbox.moe/yz1y7w.jpg",
  "https://files.catbox.moe/azbgf5.jpg",
  "https://files.catbox.moe/bj99ke.jpg",
  "https://files.catbox.moe/7u48cu.jpg",
  "https://files.catbox.moe/jzvbbd.jpg",
  "https://files.catbox.moe/55hfr1.jpg",
  "https://files.catbox.moe/piu5sk.jpg"
];

// --- State ---
let currentLang = 'en';
let isDark = false;
let menuOpen = false;
let searchOpen = false;
let langOpen = false;
let cartCount = 0;
let wishlistCount = 0;

// --- DOM Ready ---
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initScrollAnimations();
  initGallery();
  initSearch();
  initMenu();
  initLanguageSwitcher();
  initCounters();
  initSmoothScroll();
  initParallax();
  initHeroParticles();
});

// ============================================
// THEME TOGGLE
// ============================================
function initTheme() {
  const savedTheme = localStorage.getItem('eshi-theme');
  if (savedTheme === 'dark') {
    isDark = true;
    document.documentElement.classList.add('dark');
  }
  updateThemeIcon();
}

function toggleTheme() {
  isDark = !isDark;
  document.documentElement.classList.toggle('dark');
  localStorage.setItem('eshi-theme', isDark ? 'dark' : 'light');
  updateThemeIcon();
}

function updateThemeIcon() {
  const icon = document.getElementById('theme-icon');
  if (icon) {
    icon.textContent = isDark ? '☀️' : '🌙';
  }
}

// ============================================
// LANGUAGE SWITCHER
// ============================================
function initLanguage() {
  const savedLang = localStorage.getItem('eshi-lang');
  if (savedLang && translations[savedLang]) {
    currentLang = savedLang;
  }
  applyLanguage();
}

function initLanguageSwitcher() {
  const langBtn = document.getElementById('lang-btn');
  const langDropdown = document.getElementById('lang-dropdown');

  if (langBtn && langDropdown) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langOpen = !langOpen;
      langDropdown.classList.toggle('hidden', !langOpen);
      langDropdown.classList.toggle('flex', langOpen);
    });

    document.addEventListener('click', () => {
      if (langOpen) {
        langOpen = false;
        langDropdown.classList.add('hidden');
        langDropdown.classList.remove('flex');
      }
    });
  }
}

function setLanguage(lang) {
  if (translations[lang]) {
    currentLang = lang;
    localStorage.setItem('eshi-lang', lang);
    applyLanguage();
    langOpen = false;
    const dropdown = document.getElementById('lang-dropdown');
    if (dropdown) {
      dropdown.classList.add('hidden');
      dropdown.classList.remove('flex');
    }
  }
}

function applyLanguage() {
  const t = translations[currentLang];

  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      if (el.tagName === 'INPUT') {
        el.placeholder = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });

  // Update language button text
  const langLabel = document.getElementById('lang-label');
  if (langLabel) {
    const labels = { en: 'EN', si: 'සිං', ta: 'தமி' };
    langLabel.textContent = labels[currentLang] || 'EN';
  }
}

// ============================================
// MENU / NAVIGATION
// ============================================
function initMenu() {
  const menuBtn = document.getElementById('menu-btn');
  const menuOverlay = document.getElementById('menu-overlay');
  const menuClose = document.getElementById('menu-close');

  if (menuBtn && menuOverlay) {
    menuBtn.addEventListener('click', () => {
      menuOpen = true;
      menuOverlay.classList.remove('translate-x-full');
      menuOverlay.classList.add('translate-x-0');
      document.body.style.overflow = 'hidden';
    });
  }

  if (menuClose && menuOverlay) {
    menuClose.addEventListener('click', closeMenu);
    menuOverlay.addEventListener('click', (e) => {
      if (e.target === menuOverlay) closeMenu();
    });
  }
}

function closeMenu() {
  menuOpen = false;
  const menuOverlay = document.getElementById('menu-overlay');
  if (menuOverlay) {
    menuOverlay.classList.add('translate-x-full');
    menuOverlay.classList.remove('translate-x-0');
    document.body.style.overflow = '';
  }
}

// ============================================
// SEARCH
// ============================================
function initSearch() {
  const searchBtn = document.getElementById('search-btn');
  const searchOverlay = document.getElementById('search-overlay');
  const searchClose = document.getElementById('search-close');
  const searchInput = document.getElementById('search-input');
  const heroSearchBtn = document.getElementById('hero-search-btn');

  const openSearch = () => {
    searchOpen = true;
    if (searchOverlay) {
      searchOverlay.classList.remove('opacity-0', 'pointer-events-none');
      searchOverlay.classList.add('opacity-100', 'pointer-events-auto');
      setTimeout(() => searchInput?.focus(), 300);
    }
  };

  const closeSearch = () => {
    searchOpen = false;
    if (searchOverlay) {
      searchOverlay.classList.add('opacity-0', 'pointer-events-none');
      searchOverlay.classList.remove('opacity-100', 'pointer-events-auto');
    }
  };

  if (searchBtn) searchBtn.addEventListener('click', openSearch);
  if (heroSearchBtn) heroSearchBtn.addEventListener('click', openSearch);
  if (searchClose) searchClose.addEventListener('click', closeSearch);
  if (searchOverlay) {
    searchOverlay.addEventListener('click', (e) => {
      if (e.target === searchOverlay) closeSearch();
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      filterContent(query);
    });
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeSearch();
    });
  }
}

function filterContent(query) {
  const cards = document.querySelectorAll('.searchable-card');
  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    if (text.includes(query)) {
      card.style.display = '';
      card.style.opacity = '1';
    } else {
      card.style.display = 'none';
    }
  });
}

// ============================================
// SCROLL ANIMATIONS (Intersection Observer)
// ============================================
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
}

// ============================================
// GALLERY / LIGHTBOX
// ============================================
function initGallery() {
  const galleryBtns = document.querySelectorAll('.gallery-btn');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');

  let currentGallery = [];
  let currentIndex = 0;

  galleryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-category');
      currentGallery = flowerImages;
      currentIndex = 0;
      openLightbox(currentGallery[currentIndex]);
    });
  });

  function openLightbox(src) {
    if (lightboxImg) lightboxImg.src = src;
    if (lightbox) {
      lightbox.classList.remove('hidden');
      lightbox.classList.add('flex');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeLightbox() {
    if (lightbox) {
      lightbox.classList.add('hidden');
      lightbox.classList.remove('flex');
      document.body.style.overflow = '';
    }
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
    if (lightboxImg) lightboxImg.src = currentGallery[currentIndex];
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % currentGallery.length;
    if (lightboxImg) lightboxImg.src = currentGallery[currentIndex];
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', showPrev);
  if (lightboxNext) lightboxNext.addEventListener('click', showNext);
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!lightbox?.classList.contains('hidden')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    }
  });
}

// ============================================
// ANIMATED COUNTERS
// ============================================
function initCounters() {
  const counters = document.querySelectorAll('.counter');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.getAttribute('data-target'));
        animateCounter(counter, target);
        observer.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

function animateCounter(element, target) {
  let current = 0;
  const increment = target / 60;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 30);
}

// ============================================
// SMOOTH SCROLL
// ============================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        closeMenu();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ============================================
// PARALLAX EFFECT
// ============================================
function initParallax() {
  const parallaxElements = document.querySelectorAll('.parallax');
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    parallaxElements.forEach(el => {
      const speed = el.getAttribute('data-speed') || 0.5;
      el.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });
}

// ============================================
// HERO PARTICLES
// ============================================
function initHeroParticles() {
  const canvas = document.getElementById('hero-particles');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let animationId;

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = canvas.height + Math.random() * 100;
      this.size = Math.random() * 4 + 2;
      this.speedY = Math.random() * 1 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.5;
      this.opacity = Math.random() * 0.5 + 0.2;
      this.rotation = Math.random() * Math.PI * 2;
      this.rotationSpeed = (Math.random() - 0.5) * 0.02;
      const colors = ['#FFB6C1', '#FFC0CB', '#FF69B4', '#FF1493', '#FFA07A', '#F08080'];
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }
    update() {
      this.y -= this.speedY;
      this.x += this.speedX;
      this.rotation += this.rotationSpeed;
      if (this.y < -20) this.reset();
    }
    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      ctx.globalAlpha = this.opacity;
      ctx.fillStyle = this.color;
      // Draw petal shape
      ctx.beginPath();
      ctx.ellipse(0, 0, this.size, this.size * 0.6, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < 30; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    animationId = requestAnimationFrame(animate);
  }

  animate();

  // Pause when not visible
  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (!animationId) animate();
      } else {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
    });
  });

  heroObserver.observe(canvas.parentElement);
}

// ============================================
// WISHLIST & CART
// ============================================
function toggleWishlist(btn) {
  btn.classList.toggle('text-red-500');
  btn.classList.toggle('text-gray-400');
  wishlistCount += btn.classList.contains('text-red-500') ? 1 : -1;
  updateBadge('wishlist-badge', wishlistCount);
}

function addToCart() {
  cartCount++;
  updateBadge('cart-badge', cartCount);
  showToast('Added to cart! 🛒');
}

function updateBadge(id, count) {
  const badge = document.getElementById(id);
  if (badge) {
    badge.textContent = count;
    badge.classList.toggle('hidden', count === 0);
  }
}

// ============================================
// TOAST NOTIFICATIONS
// ============================================
function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'fixed bottom-8 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg z-50 transition-all duration-300 opacity-0 translate-y-4';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.remove('opacity-0', 'translate-y-4');
  toast.classList.add('opacity-100', 'translate-y-0');

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-4');
    toast.classList.remove('opacity-100', 'translate-y-0');
  }, 2500);
}

// ============================================
// HEADER SCROLL EFFECT
// ============================================
window.addEventListener('scroll', () => {
  const header = document.getElementById('main-header');
  if (header) {
    if (window.scrollY > 50) {
      header.classList.add('shadow-lg', 'backdrop-blur-md');
      header.classList.remove('shadow-sm');
    } else {
      header.classList.remove('shadow-lg', 'backdrop-blur-md');
      header.classList.add('shadow-sm');
    }
  }
});

// ============================================
// BACK TO TOP
// ============================================
window.addEventListener('scroll', () => {
  const btn = document.getElementById('back-to-top');
  if (btn) {
    if (window.scrollY > 500) {
      btn.classList.remove('opacity-0', 'pointer-events-none');
      btn.classList.add('opacity-100', 'pointer-events-auto');
    } else {
      btn.classList.add('opacity-0', 'pointer-events-none');
      btn.classList.remove('opacity-100', 'pointer-events-auto');
    }
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// CUSTOM BOUQUET BUILDER
// ============================================
function openCustomizer() {
  const modal = document.getElementById('customizer-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }
}

function closeCustomizer() {
  const modal = document.getElementById('customizer-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }
}

// ============================================
// TESTIMONIALS SLIDER
// ============================================
let testimonialIndex = 0;

function initTestimonials() {
  const slides = document.querySelectorAll('.testimonial-slide');
  if (slides.length === 0) return;

  setInterval(() => {
    slides[testimonialIndex].classList.add('opacity-0');
    slides[testimonialIndex].classList.remove('opacity-100');
    testimonialIndex = (testimonialIndex + 1) % slides.length;
    slides[testimonialIndex].classList.remove('opacity-0');
    slides[testimonialIndex].classList.add('opacity-100');
  }, 5000);
}

document.addEventListener('DOMContentLoaded', initTestimonials);

// ============================================
// LAZY LOADING IMAGES
// ============================================
function initLazyLoad() {
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.getAttribute('data-src');
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });
  images.forEach(img => imageObserver.observe(img));
}

document.addEventListener('DOMContentLoaded', initLazyLoad);

// ============================================
// SERVICE WORKER REGISTRATION (PWA)
// ============================================
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(() => {
    // Silent fail
  });
}

console.log('🌸 Eshi Flowers Bouquet - Website Loaded Successfully!');
