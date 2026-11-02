/**
 * CAFÉ COFFEA – NFC DIGITAL MENU
 * Main Application Logic
 * 
 * Architecture prepared for future online ordering integration.
 * Cart, order management, and payment modules can be added here.
 */

// ═══════════════════════════════════════════════════════════
//  STATE MANAGEMENT
// ═══════════════════════════════════════════════════════════
const AppState = {
  lang: localStorage.getItem('cafecoffea_lang') || 'en',
  activeCategory: 'all',
  dietaryFilter: 'all', // 'all' | 'veg' | 'nonveg'
  searchQuery: '',
  expandedItemId: null,
  expandedCategory: null, // Clean accordion: initially all collapsed!
  activeSection: 'home',
  tableNumber: null
};

// ═══════════════════════════════════════════════════════════
//  TRANSLATION STRINGS
// ═══════════════════════════════════════════════════════════
const i18n = {
  en: {
    // Navigation
    nav_home: "Home",
    nav_menu: "Menu",
    nav_specials: "Chef's Specials",
    nav_contact: "Contact",
    // Hero
    hero_brand: "Café Coffea",
    hero_tagline: "Cups & Moments",
    hero_subtitle: "A sanctuary where every sip brings joy and every conversation sparks friendship.",
    hero_cta: "View Full Menu",
    hero_specials_cta: "Chef's Specials",
    // Sections
    specials_title: "Chef's Specials & Signature Dishes",
    specials_subtitle: "Handcrafted with passion — our most celebrated creations",
    menu_title: "Our Menu",
    menu_subtitle: "Fresh ingredients, bold flavours, crafted for you",
    // Table
    table_label: "Table",
    table_banner_title: "Table",
    table_banner_desc: "Browsing digital menu at your table",
    call_waiter: "Call Waiter",
    // Dietary
    diet_all: "All",
    diet_veg: "Veg",
    diet_nonveg: "Non-Veg",
    // Results & Search
    results_found: "Showing {count} items",
    results_found_single: "Showing 1 item",
    search_placeholder: "Search menu items...",
    all_categories: "All",
    clear_search: "Clear search",
    back_to_top: "Back to top",
    // Item details
    view_details: "View Details",
    hide_details: "Hide Details",
    price_label: "Price",
    veg_label: "Vegetarian",
    expand_icon: "＋",
    collapse_icon: "−",
    // Instagram
    instagram_title: "Follow Our Story",
    instagram_subtitle: "Discover our latest creations and café moments",
    instagram_btn: "Follow Us on Instagram",
    // Reviews
    review_title: "Share Your Experience",
    review_subtitle: "Your feedback helps us serve you better",
    review_btn: "Rate Us on Google",
    // Contact
    contact_title: "Find Us",
    contact_subtitle: "We'd love to see you at Café Coffea",
    address_label: "Address",
    hours_label: "Opening Hours",
    phone_label: "Phone",
    directions_btn: "Get Directions",
    whatsapp_btn: "Chat on WhatsApp",
    // Footer
    footer_tagline: "Cups & Moments",
    footer_rights: "© 2024 Café Coffea. All rights reserved.",
    footer_website: "cafecoffea.in",
    // Misc
    no_results: "No menu items found.",
    chef_badge: "Chef's Special",
    loading: "Loading..."
  },
  ar: {
    // Navigation
    nav_home: "الرئيسية",
    nav_menu: "القائمة",
    nav_specials: "أطباق الشيف",
    nav_contact: "اتصل بنا",
    // Hero
    hero_brand: "كافيه كوفيا",
    hero_tagline: "أكواب ولحظات",
    hero_subtitle: "ملاذ حيث تجلب كل رشفة فرحاً وكل محادثة تشعل صداقة.",
    hero_cta: "عرض القائمة الكاملة",
    hero_specials_cta: "أطباق الشيف المميزة",
    // Sections
    specials_title: "أطباق الشيف المميزة",
    specials_subtitle: "مصنوعة بشغف — أشهر إبداعاتنا",
    menu_title: "قائمتنا",
    menu_subtitle: "مكونات طازجة، نكهات جريئة، مصنوعة لك",
    // Table
    table_label: "طاولة",
    table_banner_title: "طاولة",
    table_banner_desc: "تصفح القائمة الرقمية على طاولتك",
    call_waiter: "طلب النادل",
    // Dietary
    diet_all: "الكل",
    diet_veg: "نباتي",
    diet_nonveg: "غير نباتي",
    // Results & Search
    results_found: "عرض {count} عنصر",
    results_found_single: "عرض عنصر واحد",
    search_placeholder: "ابحث في قائمة الطعام...",
    all_categories: "الكل",
    clear_search: "مسح البحث",
    back_to_top: "للأعلى",
    // Item details
    view_details: "عرض التفاصيل",
    hide_details: "إخفاء التفاصيل",
    price_label: "السعر",
    veg_label: "نباتي",
    expand_icon: "＋",
    collapse_icon: "−",
    // Instagram
    instagram_title: "تابع قصتنا",
    instagram_subtitle: "اكتشف أحدث إبداعاتنا ولحظات المقهى",
    instagram_btn: "تابعونا على إنستغرام",
    // Reviews
    review_title: "شاركنا تجربتك",
    review_subtitle: "ملاحظاتك تساعدنا على خدمتك بشكل أفضل",
    review_btn: "قيّمنا على Google",
    // Contact
    contact_title: "اعثر علينا",
    contact_subtitle: "يسعدنا رؤيتك في كافيه كوفيا",
    address_label: "العنوان",
    hours_label: "ساعات العمل",
    phone_label: "الهاتف",
    directions_btn: "احصل على الاتجاهات",
    whatsapp_btn: "تحدث على واتساب",
    // Footer
    footer_tagline: "كأس ولحظة",
    footer_rights: "© 2024 كافيه كوفيا. جميع الحقوق محفوظة.",
    footer_website: "cafecoffea.in",
    // Misc
    no_results: "لم يتم العثور على عناصر في القائمة.",
    chef_badge: "طبق الشيف",
    loading: "جاري التحميل..."
  }
};

// ═══════════════════════════════════════════════════════════
//  UTILITY: Get translation
// ═══════════════════════════════════════════════════════════
function t(key) {
  return i18n[AppState.lang][key] || key;
}

// ═══════════════════════════════════════════════════════════
//  LANGUAGE MANAGEMENT
// ═══════════════════════════════════════════════════════════
function setLanguage(lang) {
  AppState.lang = lang;
  localStorage.setItem('cafecoffea_lang', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.body.className = lang === 'ar' ? 'lang-ar' : 'lang-en';
  updateLanguageSwitcher();
  renderAll();
}

function updateLanguageSwitcher() {
  const enBtn = document.getElementById('lang-en-btn');
  const arBtn = document.getElementById('lang-ar-btn');
  if (enBtn && arBtn) {
    enBtn.classList.toggle('active', AppState.lang === 'en');
    arBtn.classList.toggle('active', AppState.lang === 'ar');
  }
}

// ═══════════════════════════════════════════════════════════
//  NAVIGATION
// ═══════════════════════════════════════════════════════════
function navigateTo(section) {
  AppState.activeSection = section;
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.section === section);
  });
  closeMobileMenu();

  const sectionIdMap = {
    home: 'home-section',
    menu: 'menu-section',
    specials: 'specials-section',
    contact: 'contact-section'
  };

  const targetId = sectionIdMap[section] || section;
  const targetEl = document.getElementById(targetId);
  if (targetEl) {
    const navHeight = 70;
    const targetY = window.pageYOffset + targetEl.getBoundingClientRect().top - navHeight;
    window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
  }
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('menu-overlay');
  const hamburger = document.getElementById('hamburger-btn');
  const isOpen = menu.classList.contains('open');

  menu.classList.toggle('open', !isOpen);
  overlay.classList.toggle('active', !isOpen);
  if (hamburger) {
    hamburger.classList.toggle('open', !isOpen);
    hamburger.setAttribute('aria-expanded', !isOpen);
  }
  document.body.style.overflow = !isOpen ? 'hidden' : '';
}

function closeMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('menu-overlay');
  const hamburger = document.getElementById('hamburger-btn');
  if (menu) menu.classList.remove('open');
  if (overlay) overlay.classList.remove('active');
  if (hamburger) {
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }
  document.body.style.overflow = '';
}

// ═══════════════════════════════════════════════════════════
//  HELPER: Clean Category Slugifier
// ═══════════════════════════════════════════════════════════
function getCategorySlug(catKey) {
  if (!catKey) return '';
  return catKey
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// ═══════════════════════════════════════════════════════════
//  MENU ITEM EXPAND/COLLAPSE (In-Place DOM update, No Jump)
// ═══════════════════════════════════════════════════════════
function toggleItem(itemId, event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  const itemEl = document.getElementById(`item-${itemId}`);
  const detailsEl = document.getElementById(`desc-${itemId}`);
  if (!itemEl || !detailsEl) return;

  const isCurrentlyExpanded = itemEl.classList.contains('expanded');
  const btn = itemEl.querySelector('.menu-item-header');
  const icon = itemEl.querySelector('.expand-icon');

  if (isCurrentlyExpanded) {
    itemEl.classList.remove('expanded');
    detailsEl.classList.remove('visible');
    detailsEl.setAttribute('aria-hidden', 'true');
    if (btn) btn.setAttribute('aria-expanded', 'false');
    if (icon) icon.textContent = '＋';
    if (AppState.expandedItemId === itemId) AppState.expandedItemId = null;
  } else {
    itemEl.classList.add('expanded');
    detailsEl.classList.add('visible');
    detailsEl.setAttribute('aria-hidden', 'false');
    if (btn) btn.setAttribute('aria-expanded', 'true');
    if (icon) icon.textContent = '−';
    AppState.expandedItemId = itemId;
  }
}

// ═══════════════════════════════════════════════════════════
//  MENU FILTERING
// ═══════════════════════════════════════════════════════════
function getFilteredItems() {
  let items = MENU_DATA;

  // Category filter
  if (AppState.activeCategory !== 'all') {
    items = items.filter(item => item.category_en === AppState.activeCategory);
  }

  // Dietary filter (veg / non-veg)
  if (AppState.dietaryFilter === 'veg') {
    items = items.filter(item => item.isVeg);
  } else if (AppState.dietaryFilter === 'nonveg') {
    items = items.filter(item => !item.isVeg);
  }

  // Search filter
  if (AppState.searchQuery.trim()) {
    items = searchMenu(AppState.searchQuery, AppState.lang);
    if (AppState.activeCategory !== 'all') {
      items = items.filter(item => item.category_en === AppState.activeCategory);
    }
    if (AppState.dietaryFilter === 'veg') {
      items = items.filter(item => item.isVeg);
    } else if (AppState.dietaryFilter === 'nonveg') {
      items = items.filter(item => !item.isVeg);
    }
  }

  return items;
}

// ═══════════════════════════════════════════════════════════
//  CATEGORY EXPAND/COLLAPSE (In-Place DOM update, No Jump)
// ═══════════════════════════════════════════════════════════
function toggleCategory(catKey, event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  const slug = getCategorySlug(catKey);
  const card = document.getElementById(`cat-card-${slug}`);
  if (!card) return;

  const header = card.querySelector('.category-accordion-header');
  const body = card.querySelector('.category-accordion-body');
  const isCurrentlyOpen = card.classList.contains('open');

  // Close any other open category cards smoothly
  document.querySelectorAll('.category-accordion-card.open').forEach(openCard => {
    if (openCard !== card) {
      openCard.classList.remove('open');
      const otherHeader = openCard.querySelector('.category-accordion-header');
      const otherBody = openCard.querySelector('.category-accordion-body');
      if (otherHeader) otherHeader.setAttribute('aria-expanded', 'false');
      if (otherBody) {
        otherBody.classList.remove('visible');
        otherBody.setAttribute('aria-hidden', 'true');
      }
    }
  });

  if (isCurrentlyOpen) {
    // Collapse clicked card
    card.classList.remove('open');
    if (header) header.setAttribute('aria-expanded', 'false');
    if (body) {
      body.classList.remove('visible');
      body.setAttribute('aria-hidden', 'true');
    }
    AppState.expandedCategory = null;
  } else {
    // Expand clicked card
    card.classList.add('open');
    if (header) header.setAttribute('aria-expanded', 'true');
    if (body) {
      body.classList.add('visible');
      body.setAttribute('aria-hidden', 'false');
    }
    AppState.expandedCategory = catKey;

    // Smooth scroll if needed so header is positioned nicely below navbar
    requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect();
      const navHeight = 70;
      if (rect.top < navHeight || rect.top > window.innerHeight * 0.7) {
        const targetY = window.pageYOffset + rect.top - navHeight - 12;
        window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
      }
    });
  }

  // Update tabs highlight
  document.querySelectorAll('.cat-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.cat === (AppState.expandedCategory || 'all'));
  });
}

function setCategory(categoryKey, event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  AppState.activeCategory = categoryKey;
  AppState.expandedItemId = null;

  // Highlight tab
  document.querySelectorAll('.cat-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === categoryKey);
  });

  if (categoryKey === 'all') {
    AppState.expandedCategory = null;
    document.querySelectorAll('.category-accordion-card').forEach(card => {
      card.classList.remove('open');
      const h = card.querySelector('.category-accordion-header');
      const b = card.querySelector('.category-accordion-body');
      if (h) h.setAttribute('aria-expanded', 'false');
      if (b) {
        b.classList.remove('visible');
        b.setAttribute('aria-hidden', 'true');
      }
    });
  } else {
    const slug = getCategorySlug(categoryKey);
    const card = document.getElementById(`cat-card-${slug}`);
    if (card) {
      // Close other cards
      document.querySelectorAll('.category-accordion-card').forEach(c => {
        if (c !== card) {
          c.classList.remove('open');
          const h = c.querySelector('.category-accordion-header');
          const b = c.querySelector('.category-accordion-body');
          if (h) h.setAttribute('aria-expanded', 'false');
          if (b) {
            b.classList.remove('visible');
            b.setAttribute('aria-hidden', 'true');
          }
        }
      });

      // Open target card
      card.classList.add('open');
      const h = card.querySelector('.category-accordion-header');
      const b = card.querySelector('.category-accordion-body');
      if (h) h.setAttribute('aria-expanded', 'true');
      if (b) {
        b.classList.add('visible');
        b.setAttribute('aria-hidden', 'false');
      }
      AppState.expandedCategory = categoryKey;

      requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const navHeight = 70;
        const targetY = window.pageYOffset + rect.top - navHeight - 12;
        window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
      });
    }
  }
}

function setDietaryFilter(diet) {
  AppState.dietaryFilter = diet;
  AppState.expandedItemId = null;
  document.querySelectorAll('.diet-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.diet === diet);
  });
  renderMenuItems(getFilteredItems());
}

function handleSearch(query) {
  AppState.searchQuery = query;
  AppState.expandedItemId = null;

  const clearBtn = document.getElementById('search-clear-btn');
  if (clearBtn) {
    clearBtn.style.display = query.trim().length > 0 ? 'flex' : 'none';
  }

  renderMenuItems(getFilteredItems());
}

function clearSearch() {
  const searchInput = document.getElementById('menu-search');
  if (searchInput) {
    searchInput.value = '';
  }
  handleSearch('');
}

// ═══════════════════════════════════════════════════════════
//  RENDER: Category Tabs
// ═══════════════════════════════════════════════════════════
function renderCategoryTabs() {
  const container = document.getElementById('category-tabs');
  if (!container) return;

  const categories = getCategories(AppState.lang);
  const allLabel = t('all_categories');

  let html = `<button type="button" class="cat-tab ${AppState.activeCategory === 'all' ? 'active' : ''}" 
    onclick="setCategory('all', event)" data-cat="all" id="cat-all"><span>✨</span> <span>${allLabel}</span></button>`;

  categories.forEach(cat => {
    const isActive = AppState.activeCategory === cat.key;
    const icon = cat.icon || '🍽️';
    html += `<button type="button" class="cat-tab ${isActive ? 'active' : ''}" 
      onclick="setCategory('${cat.key.replace(/'/g, "\\'")}', event)" data-cat="${cat.key}">
      <span>${icon}</span> <span>${cat.label}</span>
    </button>`;
  });

  container.innerHTML = html;
}

// ═══════════════════════════════════════════════════════════
//  RENDER: Menu Items (Expandable Category Accordion)
// ═══════════════════════════════════════════════════════════
function renderMenuItems(items) {
  const container = document.getElementById('menu-items-container');
  if (!container) return;

  const isSearching = AppState.searchQuery.trim().length > 0;
  const isDietFiltered = AppState.dietaryFilter !== 'all';
  const isFiltered = isSearching || isDietFiltered;

  // Update results counter if filtering or searching
  const resultsCountEl = document.getElementById('results-count');
  if (resultsCountEl) {
    if (isFiltered) {
      const count = items ? items.length : 0;
      const countLabel = count === 1
        ? t('results_found_single')
        : t('results_found').replace('{count}', count);
      resultsCountEl.textContent = countLabel;
      resultsCountEl.style.display = 'block';
    } else {
      resultsCountEl.style.display = 'none';
    }
  }

  if (!items || items.length === 0) {
    container.innerHTML = `<div class="no-results">${t('no_results')}</div>`;
    return;
  }

  // Group items by category
  const groups = {};
  items.forEach(item => {
    const catKey = item.category_en;
    if (!groups[catKey]) {
      groups[catKey] = {
        key: catKey,
        label_en: item.category_en,
        label_ar: item.category_ar,
        items: []
      };
    }
    groups[catKey].items.push(item);
  });

  // Get categories in defined order
  const allCategories = getCategories(AppState.lang);
  let html = '<div class="category-accordions-list">';

  allCategories.forEach(cat => {
    const group = groups[cat.key];
    if (!group || group.items.length === 0) return;

    const catKey = cat.key;
    const catLabel = AppState.lang === 'ar' ? group.label_ar : group.label_en;
    const icon = cat.icon || '🍽️';
    const itemCount = group.items.length;
    const countText = AppState.lang === 'ar' ? `${itemCount} عناصر` : `${itemCount} items`;
    const slug = getCategorySlug(catKey);

    // In filtered mode (search/diet), open matching categories automatically.
    // Otherwise open only AppState.expandedCategory
    const isOpen = isFiltered || (AppState.expandedCategory === catKey);

    html += `
      <div class="category-accordion-card ${isOpen ? 'open' : ''}" id="cat-card-${slug}" data-cat="${encodeURIComponent(catKey)}">
        <button type="button" class="category-accordion-header" onclick="toggleCategory('${catKey.replace(/'/g, "\\'")}', event)" 
                aria-expanded="${isOpen}" aria-controls="cat-body-${slug}">
          <div class="cat-header-left">
            <span class="cat-icon" aria-hidden="true">${icon}</span>
            <div class="cat-title-wrap">
              <h3 class="cat-title">${catLabel}</h3>
              <span class="cat-item-count">${countText}</span>
            </div>
          </div>
          <div class="cat-chevron" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </div>
        </button>

        <div class="category-accordion-body ${isOpen ? 'visible' : ''}" id="cat-body-${slug}" aria-hidden="${!isOpen}">
          <div class="menu-items-list">
            ${group.items.map(item => renderMenuItem(item)).join('')}
          </div>
        </div>
      </div>
    `;
  });

  html += '</div>';
  container.innerHTML = html;
}

function renderMenuItem(item) {
  const isExpanded = AppState.expandedItemId === item.id;
  const name = AppState.lang === 'ar' ? item.name_ar : item.name_en;
  const desc = AppState.lang === 'ar' ? item.description_ar : item.description_en;
  const vegIndicator = item.isVeg ? `<span class="veg-indicator" title="${t('veg_label')}">🟢</span>` : '';
  const chefBadge = item.isChefSpecial ? `<span class="chef-badge">${t('chef_badge')}</span>` : '';
  const expandBtn = isExpanded ? t('hide_details') : t('view_details');
  const expandIcon = isExpanded ? '−' : '＋';

  // Sub-options rendering (like for Specialty Coffee V60 Hot / Iced)
  let optionsHtml = '';
  if (item.options && item.options.length > 0) {
    const optLabel = AppState.lang === 'ar' ? 'الخيارات المتاحة:' : 'Available Varieties:';
    optionsHtml = `<div class="item-sub-options" role="region" aria-label="Varieties">
      <div style="font-size:0.8rem; color:var(--color-gold); font-weight:600; margin-bottom:6px; letter-spacing:0.04em;">${optLabel}</div>
      ${item.options.map(opt => `
        <div class="sub-option-row">
          <span class="sub-opt-name">${opt.name_en.includes('Hot') ? '☕' : '🧊'} ${AppState.lang === 'ar' ? opt.name_ar : opt.name_en}</span>
          <span class="sub-opt-price">₹${opt.price}</span>
        </div>
      `).join('')}
    </div>`;
  }

  // If item has sub-options (like V60 Pour Over), show an indicator badge in the header row
  const varietiesBadge = (item.options && item.options.length > 0)
    ? `<span style="font-size:0.75rem; color:var(--color-gold); background:rgba(201,168,76,0.12); padding:2px 8px; border-radius:12px; margin-inline-start:6px; border:1px solid rgba(201,168,76,0.3);">${AppState.lang === 'ar' ? 'خيارات متنوعة' : 'Varieties available'}</span>`
    : '';

  return `<div class="menu-item ${isExpanded ? 'expanded' : ''}" id="item-${item.id}">
    <div class="menu-item-header" onclick="toggleItem('${item.id}', event)" role="button" tabindex="0" 
         onkeypress="if(event.key==='Enter') toggleItem('${item.id}', event)"
         aria-expanded="${isExpanded}" aria-controls="desc-${item.id}">
      <div class="menu-item-left">
        <div class="menu-item-name-row">
          ${vegIndicator}
          <span class="menu-item-name">${name}</span>
          ${varietiesBadge}
          ${chefBadge}
        </div>
        <div class="menu-item-price">₹${item.price}</div>
      </div>
      <div class="menu-item-expand-btn" aria-label="${expandBtn}">
        <span class="expand-icon">${expandIcon}</span>
      </div>
    </div>
    <div class="menu-item-details ${isExpanded ? 'visible' : ''}" 
         id="desc-${item.id}" 
         aria-hidden="${!isExpanded}">
      <p class="menu-item-description">${desc ? desc.replace(/\n/g, '<br>') : ''}</p>
      ${optionsHtml}
      <div class="menu-item-price-detail">
        <span class="price-label">${t('price_label')}:</span>
        <span class="price-value">₹${item.price}</span>
      </div>
    </div>
  </div>`;
}

// ═══════════════════════════════════════════════════════════
//  RENDER: Chef's Specials Section
// ═══════════════════════════════════════════════════════════
function renderChefSpecials() {
  const container = document.getElementById('specials-container');
  if (!container) return;

  const specials = getChefSpecials();

  let html = '';
  specials.forEach(item => {
    const name = AppState.lang === 'ar' ? item.name_ar : item.name_en;
    const desc = AppState.lang === 'ar' ? item.description_ar : item.description_en;
    const category = AppState.lang === 'ar' ? item.category_ar : item.category_en;
    const isExpanded = AppState.expandedItemId === `special-${item.id}`;
    const expandIcon = isExpanded ? '−' : '＋';

    html += `<div class="special-card ${isExpanded ? 'expanded' : ''}" id="special-${item.id}">
      <div class="special-card-inner">
        <div class="special-category-tag">${category}</div>
        <h4 class="special-name">${name}</h4>
        <div class="special-price">₹${item.price}</div>
        <div class="special-desc ${isExpanded ? 'visible' : ''}" id="special-desc-${item.id}">
          <p>${desc}</p>
        </div>
        <button class="special-expand-btn" 
          onclick="toggleSpecialItem('${item.id}')"
          aria-expanded="${isExpanded}">
          <span>${expandIcon}</span>
          <span>${isExpanded ? t('hide_details') : t('view_details')}</span>
        </button>
      </div>
    </div>`;
  });

  container.innerHTML = html;
}

function toggleSpecialItem(itemId) {
  const fullId = `special-${itemId}`;
  if (AppState.expandedItemId === fullId) {
    AppState.expandedItemId = null;
  } else {
    AppState.expandedItemId = fullId;
  }
  renderChefSpecials();
}

// ═══════════════════════════════════════════════════════════
//  RENDER: Static Text (all UI labels)
// ═══════════════════════════════════════════════════════════
function renderStaticText() {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.dataset.i18n;
    if (i18n[AppState.lang][key]) {
      el.textContent = i18n[AppState.lang][key];
    }
  });

  const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
  placeholders.forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (i18n[AppState.lang][key]) {
      el.placeholder = i18n[AppState.lang][key];
    }
  });

  // Update document title
  document.title = `${SITE_CONFIG.brandName} – ${AppState.lang === 'ar' ? 'القائمة الرقمية' : 'Digital Menu'}`;
}

// ═══════════════════════════════════════════════════════════
//  RENDER: Contact & Location
// ═══════════════════════════════════════════════════════════
function renderContact() {
  const addressEl = document.getElementById('contact-address-text');
  const hoursEl = document.getElementById('contact-hours-text');
  const daysEl = document.getElementById('contact-days-text');

  if (addressEl) {
    addressEl.textContent = AppState.lang === 'ar' ? SITE_CONFIG.addressAr : SITE_CONFIG.address;
  }
  if (hoursEl) {
    hoursEl.textContent = AppState.lang === 'ar' ? SITE_CONFIG.openingHoursAr : SITE_CONFIG.openingHours;
  }
  if (daysEl) {
    daysEl.textContent = AppState.lang === 'ar' ? SITE_CONFIG.openingDaysAr : SITE_CONFIG.openingDays;
  }
}

// ═══════════════════════════════════════════════════════════
//  RENDER: All
// ═══════════════════════════════════════════════════════════
function renderAll() {
  renderStaticText();
  renderTableBanner();
  renderCategoryTabs();
  renderMenuItems(getFilteredItems());
  renderChefSpecials();
  renderContact();
  updateLanguageSwitcher();
}

// ═══════════════════════════════════════════════════════════
//  NFC & TABLE DETECTION
// ═══════════════════════════════════════════════════════════
function initTableDetection() {
  const urlParams = new URLSearchParams(window.location.search);
  const table = urlParams.get('table') || urlParams.get('t');
  if (table) {
    AppState.tableNumber = table.trim();
    sessionStorage.setItem('cafecoffea_table', AppState.tableNumber);
  } else {
    AppState.tableNumber = sessionStorage.getItem('cafecoffea_table') || null;
  }
  renderTableBanner();
}

function renderTableBanner() {
  const navBadge = document.getElementById('nav-table-badge');
  const navText = document.getElementById('nav-table-text');
  const banner = document.getElementById('table-banner');
  const bannerTitle = document.getElementById('table-banner-title');

  if (AppState.tableNumber) {
    const tableLabel = `${t('table_label')} ${AppState.tableNumber}`;
    if (navBadge && navText) {
      navText.textContent = tableLabel;
      navBadge.style.display = 'inline-flex';
    }
    if (banner && bannerTitle) {
      bannerTitle.textContent = tableLabel;
      banner.style.display = 'block';
    }
  } else {
    if (navBadge) navBadge.style.display = 'none';
    if (banner) banner.style.display = 'none';
  }
}

function callWaiter() {
  if (!SITE_CONFIG.whatsappNumber) return;
  const tablePart = AppState.tableNumber ? ` (${t('table_label')} ${AppState.tableNumber})` : '';
  const message = AppState.lang === 'ar'
    ? `مرحباً كافيه كوفيا! أنا متواجد في طاولة رقم ${AppState.tableNumber || '-'} وأود طلب المساعدة أو تقديم طلب.`
    : `Hello Café Coffea! I am seated at Table ${AppState.tableNumber || '-'} and would like to request assistance.`;
  window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
}

// ═══════════════════════════════════════════════════════════
//  FLOATING BACK TO TOP
// ═══════════════════════════════════════════════════════════
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function initBackToTop() {
  const btn = document.getElementById('back-to-top-btn');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.style.display = 'flex';
    } else {
      btn.style.display = 'none';
    }
  }, { passive: true });
}

// ═══════════════════════════════════════════════════════════
//  EXTERNAL LINKS
// ═══════════════════════════════════════════════════════════
function openInstagram() {
  window.open(SITE_CONFIG.instagramUrl, '_blank', 'noopener,noreferrer');
}

function openGoogleReview() {
  const url = SITE_CONFIG.googleReviewUrl !== 'REPLACE_WITH_DIRECT_GOOGLE_REVIEW_URL'
    ? SITE_CONFIG.googleReviewUrl
    : SITE_CONFIG.googleReviewFallback;
  window.open(url, '_blank', 'noopener,noreferrer');
}

function openGoogleMaps() {
  window.open(SITE_CONFIG.googleMapsUrl, '_blank', 'noopener,noreferrer');
}

function openWhatsApp() {
  if (!SITE_CONFIG.whatsappNumber) return;
  let message;
  if (AppState.tableNumber) {
    message = AppState.lang === 'ar'
      ? `مرحباً كافيه كوفيا! أنا متواجد في طاولة رقم ${AppState.tableNumber} وأود الاستفسار عن القائمة.`
      : `Hello Café Coffea! I am seated at Table ${AppState.tableNumber} and would like to ask a question about the menu.`;
  } else {
    message = AppState.lang === 'ar'
      ? SITE_CONFIG.whatsappMessageAr
      : SITE_CONFIG.whatsappMessage;
  }
  window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
}

// ═══════════════════════════════════════════════════════════
//  SCROLL DETECTION for active nav
// ═══════════════════════════════════════════════════════════
function initScrollDetection() {
  const sections = ['home-section', 'specials-section', 'menu-section', 'instagram-section', 'contact-section'];
  const sectionMap = {
    'home-section': 'home',
    'specials-section': 'specials',
    'menu-section': 'menu',
    'instagram-section': 'menu',
    'contact-section': 'contact'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const section = sectionMap[entry.target.id];
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.toggle('active', link.dataset.section === section);
        });
      }
    });
  }, { rootMargin: '-40% 0px -40% 0px' });

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
}

// ═══════════════════════════════════════════════════════════
//  FUTURE ORDERING ARCHITECTURE (stub)
//  These functions will be implemented when backend is ready
// ═══════════════════════════════════════════════════════════
// const Cart = {
//   items: [],
//   tableNumber: null,
//   customerName: '',
//   customerPhone: '',
//   
//   addItem(itemId, quantity = 1) { /* TODO */ },
//   removeItem(itemId) { /* TODO */ },
//   updateQuantity(itemId, quantity) { /* TODO */ },
//   getTotal() { /* TODO */ },
//   submitOrder() { /* TODO: POST to backend API */ },
//   trackOrder(orderId) { /* TODO */ }
// };

// ═══════════════════════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', function() {
  // Set initial language
  document.documentElement.lang = AppState.lang;
  document.documentElement.dir = AppState.lang === 'ar' ? 'rtl' : 'ltr';
  document.body.className = AppState.lang === 'ar' ? 'lang-ar' : 'lang-en';

  // Search input listener
  const searchInput = document.getElementById('menu-search');
  if (searchInput) {
    let debounceTimer;
    searchInput.addEventListener('input', function() {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => handleSearch(this.value), 300);
    });
  }

  // Mobile menu overlay
  const overlay = document.getElementById('menu-overlay');
  if (overlay) {
    overlay.addEventListener('click', closeMobileMenu);
  }

  // WhatsApp button — hide if no number configured
  const waBtn = document.getElementById('whatsapp-btn');
  if (waBtn && !SITE_CONFIG.whatsappNumber) {
    waBtn.style.display = 'none';
  }

  // Initialize table detection from URL (?table=X or ?t=X)
  initTableDetection();

  // Render everything
  renderAll();
  initScrollDetection();
  initBackToTop();

  // Smooth scroll for anchor links with header offset
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (!href || href === '#' || href.length <= 1) return;
      e.preventDefault();
      try {
        const target = document.querySelector(href);
        if (target) {
          const navHeight = 70;
          const targetY = window.pageYOffset + target.getBoundingClientRect().top - navHeight;
          window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
        }
      } catch (err) {
        // Safe ignore
      }
    });
  });
});
