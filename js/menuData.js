/**
 * CAFÉ COFFEA – NFC DIGITAL MENU
 * Bilingual Menu Data (English + Arabic)
 * 
 * Data extracted from:
 *   1. cafe menu 1.pdf (26 pages)
 *   2. pizza menu.pdf (16 pages)
 * 
 * To add/edit items, modify the MENU_DATA array below.
 * To mark a dish as a Chef's Special, set isChefSpecial: true
 * 
 * PRICING NOTES:
 *   - Smash Burger: ₹350 (confirmed from PDF)
 *   - Steak pricing "*may vary based on portion size" (per PDF)
 *   - Desserts (cookies/donuts): Small pastry items individually priced
 *
 * FLAGGED FOR OWNER REVIEW:
 *   - Dessert section: Cookie, Red Velvet, Double Choco (₹90 each?), Donut, Brownie prices 
 *     need confirmation (PDF layout was unclear for some items)
 *   - Popcorn Shake description: "A vanilla-caramel ice cream milkshake with popcorn flavor" 
 *     (inferred from PDF fragment — please verify)
 *   - Loaf Stack items: "BLT" (Beef, lettuce, tomato & feta cheese ₹290), 
 *     "Hot Dog" (grilled chicken onion sausage ₹180), "VLS" (Vegetable loaf sandwich ₹250)
 *   - Wraps Veg Wrap name unclear (PDF shows "dilla ₹160" near veg wrap description)
 *   - Chicken Wrap: also called "Fried Chicken Wrap" in PDF — name kept as Chicken Wrap
 */

// ═══════════════════════════════════════════════════════════
//  SITE CONFIGURATION — Update these values as needed
// ═══════════════════════════════════════════════════════════
const SITE_CONFIG = {
  brandName: "Café Coffea",
  brandNameAr: "كافيه كوفيا",
  tagline: "Cups & Moments",
  taglineAr: "كأس ولحظة",
  description: "Premium café experience in the heart of Kottakkal, Kerala",
  descriptionAr: "تجربة مقهى فاخرة في قلب كوتاكال، كيرالا",

  // Social & Links
  instagramUrl: "https://www.instagram.com/cafecoffea.in/",
  websiteUrl: "https://cafecoffea.in/",
  googleMapsUrl: "https://maps.app.goo.gl/AwpsdEbPUmWpWPVw8",

  // ⚠️ IMPORTANT: Replace the value below with the actual direct Google Review URL
  // when available. The Maps URL is used as a temporary fallback.
  // Direct review URL format: https://search.google.com/local/writereview?placeid=PLACE_ID
  googleReviewUrl: "REPLACE_WITH_DIRECT_GOOGLE_REVIEW_URL",
  googleReviewFallback: "https://maps.app.goo.gl/AwpsdEbPUmWpWPVw8",

  // WhatsApp — add phone number in international format without +
  whatsappNumber: "", // e.g. "919876543210"
  whatsappMessage: "Hello! I'd like to know more about Café Coffea.",
  whatsappMessageAr: "مرحبا! أود معرفة المزيد عن كافيه كوفيا.",

  // Contact Details — fill in the correct details
  phone: "",
  email: "",
  address: "Kottakkal, Malappuram, Kerala",
  addressAr: "كوتاكال، ملابورام، كيرالا",

  // Opening Hours
  openingHours: "11:00 AM - 12:00 AM",
  openingHoursAr: "١١:٠٠ ص - ١٢:٠٠ ص",
  openingDays: "Open Daily",
  openingDaysAr: "مفتوح يومياً"
};

// ═══════════════════════════════════════════════════════════
//  MENU DATA
// ═══════════════════════════════════════════════════════════
const MENU_DATA = [

  // ─────────────────────────────────────────────────────────
  //  ESPRESSO VARIETIES
  // ─────────────────────────────────────────────────────────
  {
    id: "hc-001",
    category_en: "Espresso",
    category_ar: "إسبريسو",
    name_en: "Espresso",
    name_ar: "إسبريسو",
    price: 90,
    description_en: "Single shot espresso — bold, rich, and intense.",
    description_ar: "شوت إسبريسو واحد — قوي وغني ومكثف.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "hc-002",
    category_en: "Espresso",
    category_ar: "إسبريسو",
    name_en: "Doppio",
    name_ar: "دوبيو",
    price: 120,
    description_en: "Double shot espresso — twice the intensity for espresso lovers.",
    description_ar: "شوتان من الإسبريسو — ضعف القوة لعشاق الإسبريسو.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "hc-003",
    category_en: "Espresso",
    category_ar: "إسبريسو",
    name_en: "Lungo",
    name_ar: "لونغو",
    price: 160,
    description_en: "Triple shot espresso — for the true coffee connoisseur.",
    description_ar: "ثلاثة شوتات من الإسبريسو — للمتذوق الحقيقي للقهوة.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "hc-014",
    category_en: "Espresso",
    category_ar: "إسبريسو",
    name_en: "Mocha",
    name_ar: "موكا",
    price: 180,
    description_en: "Espresso blended with rich chocolate and steamed milk.",
    description_ar: "إسبريسو ممزوج مع الشوكولاتة الغنية والحليب المبخر.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "hc-015",
    category_en: "Espresso",
    category_ar: "إسبريسو",
    name_en: "Affogato",
    name_ar: "أفوغاتو",
    price: 190,
    description_en: "Espresso poured over a scoop of ice cream — a classic Italian dessert coffee.",
    description_ar: "إسبريسو يُسكب على كرة آيس كريم — قهوة حلوى إيطالية كلاسيكية.",
    isVeg: true,
    isChefSpecial: true
  },
  {
    id: "hc-016",
    category_en: "Espresso",
    category_ar: "إسبريسو",
    name_en: "Con Panna",
    name_ar: "كون بانا",
    price: 140,
    description_en: "Espresso topped with whipped cream — elegant and indulgent.",
    description_ar: "إسبريسو مع الكريمة المخفوقة — أنيق ومغرٍ.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "hc-017",
    category_en: "Espresso",
    category_ar: "إسبريسو",
    name_en: "Macchiato",
    name_ar: "ماكياتو",
    price: 130,
    description_en: "Espresso marked with a dollop of milk foam — bold with a hint of creaminess.",
    description_ar: "إسبريسو مع لمسة من رغوة الحليب — قوي مع لمسة من الكريمة.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "hc-018",
    category_en: "Espresso",
    category_ar: "إسبريسو",
    name_en: "Espresso Tonic",
    name_ar: "إسبريسو تونيك",
    price: 180,
    description_en: "Refreshing tonic water combined with a shot of espresso — a unique experience.",
    description_ar: "مياه التونيك المنعشة ممزوجة مع شوت إسبريسو — تجربة فريدة.",
    isVeg: true,
    isChefSpecial: true
  },

  // ─────────────────────────────────────────────────────────
  //  CAPPUCCINO FLAVOURS & VARIATIONS
  // ─────────────────────────────────────────────────────────
  {
    id: "hc-005",
    category_en: "Cappuccino",
    category_ar: "كابتشينو",
    name_en: "Cappuccino",
    name_ar: "كابتشينو",
    price: 130,
    description_en: "Espresso with equal parts steamed and frothed milk — the classic Italian.",
    description_ar: "إسبريسو مع أجزاء متساوية من الحليب المبخر والمزبد — الكلاسيكي الإيطالي.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "hc-006",
    category_en: "Cappuccino",
    category_ar: "كابتشينو",
    name_en: "Cappuccino (Large)",
    name_ar: "كابتشينو (كبير)",
    price: 160,
    description_en: "A generous large cappuccino with rich espresso and creamy frothed milk.",
    description_ar: "كابتشينو كبير فاخر مع إسبريسو غني وحليب مزبد كريمي.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "hc-007",
    category_en: "Cappuccino",
    category_ar: "كابتشينو",
    name_en: "Cappuccino Caramel / Hazelnut",
    name_ar: "كابتشينو كراميل / بندق",
    price: 180,
    description_en: "Classic cappuccino infused with caramel or hazelnut syrup.",
    description_ar: "كابتشينو كلاسيكي مضاف إليه شراب الكراميل أو البندق.",
    isVeg: true,
    isChefSpecial: false
  },

  // ─────────────────────────────────────────────────────────
  //  SPECIALTY COFFEE
  // ─────────────────────────────────────────────────────────
  {
    id: "hc-021",
    category_en: "Specialty Coffee",
    category_ar: "القهوة المتخصصة",
    name_en: "V60 Pour Over Coffee (Hot / Iced)",
    name_ar: "قهوة V60 بالتقطير (ساخنة / مثلجة)",
    price: 190,
    description_en: "Specialty pour-over coffee crafted using the V60 drip method — clean, bright, and nuanced flavours.",
    description_ar: "قهوة متخصصة محضرة بطريقة التقطير V60 — نكهات نقية ومشرقة ودقيقة.",
    isVeg: true,
    isChefSpecial: true,
    options: [
      { name_en: "V60 Pour Over – Hot Coffee", name_ar: "قهوة V60 بالتقطير – قهوة ساخنة", price: 190 },
      { name_en: "V60 Pour Over – Iced Coffee", name_ar: "قهوة V60 بالتقطير – قهوة مثلجة", price: 190 }
    ]
  },

  // ─────────────────────────────────────────────────────────
  //  CAFÉ LATTE & CLASSIC COFFEE
  // ─────────────────────────────────────────────────────────
  {
    id: "hc-004",
    category_en: "Café Latte & Classic Coffee",
    category_ar: "كافيه لاتيه والقهوة الكلاسيكية",
    name_en: "Americano",
    name_ar: "أمريكانو",
    price: 130,
    description_en: "Espresso diluted with hot water for a smooth, full-bodied cup.",
    description_ar: "إسبريسو ممزوج بالماء الساخن لكوب ناعم وقوي.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "hc-008",
    category_en: "Café Latte & Classic Coffee",
    category_ar: "كافيه لاتيه والقهوة الكلاسيكية",
    name_en: "Café Latte (Regular)",
    name_ar: "كافيه لاتيه (عادي)",
    price: 140,
    description_en: "Smooth espresso with steamed milk and a light layer of foam.",
    description_ar: "إسبريسو ناعم مع الحليب المبخر وطبقة خفيفة من الرغوة.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "hc-009",
    category_en: "Café Latte & Classic Coffee",
    category_ar: "كافيه لاتيه والقهوة الكلاسيكية",
    name_en: "Café Latte (Medium)",
    name_ar: "كافيه لاتيه (وسط)",
    price: 160,
    description_en: "A medium-sized latte with rich espresso and perfectly steamed milk.",
    description_ar: "لاتيه متوسطة الحجم مع إسبريسو غني وحليب مبخر بشكل مثالي.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "hc-010",
    category_en: "Café Latte & Classic Coffee",
    category_ar: "كافيه لاتيه والقهوة الكلاسيكية",
    name_en: "Spanish Latte",
    name_ar: "لاتيه إسبانية",
    price: 180,
    description_en: "Espresso with condensed milk and steamed milk — sweet and creamy.",
    description_ar: "إسبريسو مع الحليب المكثف والحليب المبخر — حلو وكريمي.",
    isVeg: true,
    isChefSpecial: true
  },
  {
    id: "hc-011",
    category_en: "Café Latte & Classic Coffee",
    category_ar: "كافيه لاتيه والقهوة الكلاسيكية",
    name_en: "Caramel Latte",
    name_ar: "لاتيه كراميل",
    price: 180,
    description_en: "Espresso with caramel syrup and steamed milk — a sweet indulgence.",
    description_ar: "إسبريسو مع شراب الكراميل والحليب المبخر — متعة حلوة.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "hc-012",
    category_en: "Café Latte & Classic Coffee",
    category_ar: "كافيه لاتيه والقهوة الكلاسيكية",
    name_en: "Flat White",
    name_ar: "فلات وايت",
    price: 140,
    description_en: "Velvety steamed milk poured over espresso — strong and smooth.",
    description_ar: "حليب مبخر ناعم يُسكب على الإسبريسو — قوي وناعم.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "hc-013",
    category_en: "Café Latte & Classic Coffee",
    category_ar: "كافيه لاتيه والقهوة الكلاسيكية",
    name_en: "Cortado",
    name_ar: "كورتادو",
    price: 140,
    description_en: "Equal parts espresso and warm milk — perfectly balanced.",
    description_ar: "أجزاء متساوية من الإسبريسو والحليب الدافئ — متوازن تماماً.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "hc-019",
    category_en: "Café Latte & Classic Coffee",
    category_ar: "كافيه لاتيه والقهوة الكلاسيكية",
    name_en: "Marshmallow Cream Coffee",
    name_ar: "قهوة كريمة المارشميلو",
    price: 220,
    description_en: "Rich coffee topped with fluffy marshmallow cream for a dreamy experience.",
    description_ar: "قهوة غنية مع كريمة المارشميلو الطرية لتجربة رائعة.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "hc-020",
    category_en: "Café Latte & Classic Coffee",
    category_ar: "كافيه لاتيه والقهوة الكلاسيكية",
    name_en: "Matcha Latte",
    name_ar: "ماتشا لاتيه",
    price: 240,
    description_en: "Premium Japanese matcha blended with steamed milk — earthy and smooth.",
    description_ar: "ماتشا يابانية فاخرة ممزوجة مع الحليب المبخر — طبيعية وناعمة.",
    isVeg: true,
    isChefSpecial: false
  },

  // ─────────────────────────────────────────────────────────
  //  ICED COFFEE
  // ─────────────────────────────────────────────────────────
  {
    id: "ic-001",
    category_en: "Iced Coffee",
    category_ar: "القهوة الباردة",
    name_en: "Iced Americano",
    name_ar: "أمريكانو بارد",
    price: 135,
    description_en: "Espresso over ice — cool, crisp, and energizing.",
    description_ar: "إسبريسو على الثلج — بارد ومنعش ومنشط.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "ic-002",
    category_en: "Iced Coffee",
    category_ar: "القهوة الباردة",
    name_en: "Iced Latte",
    name_ar: "لاتيه بارد",
    price: 155,
    description_en: "Smooth espresso with cold milk over ice — a refreshing classic.",
    description_ar: "إسبريسو ناعم مع الحليب البارد على الثلج — كلاسيكي منعش.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "ic-003",
    category_en: "Iced Coffee",
    category_ar: "القهوة الباردة",
    name_en: "Iced Caramel Latte",
    name_ar: "لاتيه كراميل بارد",
    price: 185,
    description_en: "Espresso with caramel syrup and cold milk over ice.",
    description_ar: "إسبريسو مع شراب الكراميل والحليب البارد على الثلج.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "ic-004",
    category_en: "Iced Coffee",
    category_ar: "القهوة الباردة",
    name_en: "Iced Hazelnut Latte",
    name_ar: "لاتيه بندق بارد",
    price: 185,
    description_en: "Espresso with hazelnut syrup and cold milk over ice.",
    description_ar: "إسبريسو مع شراب البندق والحليب البارد على الثلج.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "ic-005",
    category_en: "Iced Coffee",
    category_ar: "القهوة الباردة",
    name_en: "Iced Spanish Latte",
    name_ar: "لاتيه إسبانية باردة",
    price: 185,
    description_en: "Espresso with condensed milk and cold milk over ice — sweet and creamy.",
    description_ar: "إسبريسو مع الحليب المكثف والحليب البارد على الثلج — حلو وكريمي.",
    isVeg: true,
    isChefSpecial: true
  },
  {
    id: "ic-006",
    category_en: "Iced Coffee",
    category_ar: "القهوة الباردة",
    name_en: "Iced Mocha",
    name_ar: "موكا بارد",
    price: 185,
    description_en: "Espresso with chocolate syrup and cold milk over ice.",
    description_ar: "إسبريسو مع شراب الشوكولاتة والحليب البارد على الثلج.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "ic-007",
    category_en: "Iced Coffee",
    category_ar: "القهوة الباردة",
    name_en: "Iced Matcha",
    name_ar: "ماتشا بارد",
    price: 240,
    description_en: "Premium Japanese matcha with cold milk over ice — vibrant and refreshing.",
    description_ar: "ماتشا يابانية فاخرة مع الحليب البارد على الثلج — نابضة بالحياة ومنعشة.",
    isVeg: true,
    isChefSpecial: false
  },

  // ─────────────────────────────────────────────────────────
  //  FRAPPES
  // ─────────────────────────────────────────────────────────
  {
    id: "fr-001",
    category_en: "Frappes",
    category_ar: "الفراببي",
    name_en: "Cafe Frappe",
    name_ar: "فراببي القهوة",
    price: 190,
    description_en: "A rich and creamy blended coffee frappe — the ultimate iced coffee treat.",
    description_ar: "فراببي قهوة غني وكريمي مخفوق — المتعة القصوى للقهوة الباردة.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "fr-002",
    category_en: "Frappes",
    category_ar: "الفراببي",
    name_en: "Oreo Frappe",
    name_ar: "فراببي أوريو",
    price: 220,
    description_en: "Creamy coffee frappe blended with Oreo cookies.",
    description_ar: "فراببي قهوة كريمي مخفوق مع بسكويت الأوريو.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "fr-003",
    category_en: "Frappes",
    category_ar: "الفراببي",
    name_en: "Hazelnut Frappe",
    name_ar: "فراببي البندق",
    price: 240,
    description_en: "Smooth coffee frappe infused with rich hazelnut flavor.",
    description_ar: "فراببي قهوة ناعم مضاف إليه نكهة البندق الغنية.",
    isVeg: true,
    isChefSpecial: false
  },

  // ─────────────────────────────────────────────────────────
  //  TEA
  // ─────────────────────────────────────────────────────────
  {
    id: "tea-001",
    category_en: "Tea",
    category_ar: "الشاي",
    name_en: "Green Tea",
    name_ar: "شاي أخضر",
    price: 50,
    description_en: "Light and refreshing hot green tea.",
    description_ar: "شاي أخضر ساخن خفيف ومنعش.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "tea-002",
    category_en: "Tea",
    category_ar: "الشاي",
    name_en: "Mint Cinnamon Tea",
    name_ar: "شاي النعناع والقرفة",
    price: 60,
    description_en: "Warm tea infused with refreshing mint and aromatic cinnamon.",
    description_ar: "شاي دافئ مضاف إليه النعناع المنعش والقرفة العطرة.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "tea-003",
    category_en: "Tea",
    category_ar: "الشاي",
    name_en: "Moroccan Tea",
    name_ar: "شاي مغربي",
    price: 70,
    description_en: "Traditional Moroccan mint tea — aromatic and warming.",
    description_ar: "شاي النعناع المغربي التقليدي — عطري ودافئ.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "tea-004",
    category_en: "Tea",
    category_ar: "الشاي",
    name_en: "Hibiscus Tea",
    name_ar: "شاي الكركديه",
    price: 70,
    description_en: "Vibrant hibiscus flower tea — tangy, floral, and caffeine-free.",
    description_ar: "شاي زهرة الكركديه النابض بالحياة — حامض وزهري وخالٍ من الكافيين.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "tea-005",
    category_en: "Tea",
    category_ar: "الشاي",
    name_en: "Malaysian Tea",
    name_ar: "شاي ماليزي",
    price: 190,
    description_en: "Rich Malaysian-style pulled tea with a bold, creamy flavour.",
    description_ar: "شاي ماليزي غني بنكهة قوية وكريمية.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "tea-006",
    category_en: "Tea",
    category_ar: "الشاي",
    name_en: "Mashroub Al Karak",
    name_ar: "مشروب الكرك",
    price: 90,
    description_en: "The iconic Karak chai — spiced milk tea brewed with cardamom and spices.",
    description_ar: "شاي الكرك الشهير — شاي الحليب المبهر مع الهيل والتوابل.",
    isVeg: true,
    isChefSpecial: true
  },
  {
    id: "tea-007",
    category_en: "Tea",
    category_ar: "الشاي",
    name_en: "Lemon Iced Tea",
    name_ar: "شاي الليمون البارد",
    price: 160,
    description_en: "Refreshing iced tea with a zesty lemon twist.",
    description_ar: "شاي بارد منعش مع لمسة الليمون الحامضي.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "tea-008",
    category_en: "Tea",
    category_ar: "الشاي",
    name_en: "Green Apple Iced Tea",
    name_ar: "شاي التفاح الأخضر البارد",
    price: 170,
    description_en: "Crisp iced tea infused with green apple flavour.",
    description_ar: "شاي بارد منعش مضاف إليه نكهة التفاح الأخضر.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "tea-009",
    category_en: "Tea",
    category_ar: "الشاي",
    name_en: "Peach Iced Tea",
    name_ar: "شاي الخوخ البارد",
    price: 180,
    description_en: "Fruity and refreshing iced tea with a natural peach flavour.",
    description_ar: "شاي بارد فاكهي ومنعش مع نكهة الخوخ الطبيعية.",
    isVeg: true,
    isChefSpecial: false
  },

  // ─────────────────────────────────────────────────────────
  //  SOUPS
  // ─────────────────────────────────────────────────────────
  {
    id: "soup-001",
    category_en: "Soups",
    category_ar: "الحساء",
    name_en: "Brodo Del Verdure Del Pollo",
    name_ar: "مرقة الدجاج والخضروات الإيطالية",
    price: 174,
    description_en: "Italian-style chicken and vegetable broth infused with the aroma of thyme.",
    description_ar: "مرقة الدجاج والخضروات على الطريقة الإيطالية بعطر الزعتر.",
    isVeg: false,
    isChefSpecial: false
  },
  {
    id: "soup-002",
    category_en: "Soups",
    category_ar: "الحساء",
    name_en: "Wild Mushroom Cappuccino",
    name_ar: "كابتشينو الفطر البري",
    price: 229,
    description_en: "Wild and button mushrooms blended with cream for a smooth, velvety finish.",
    description_ar: "الفطر البري والعادي ممزوج مع الكريمة لنهاية ناعمة كالحرير.",
    isVeg: true,
    isChefSpecial: true
  },
  {
    id: "soup-003",
    category_en: "Soups",
    category_ar: "الحساء",
    name_en: "Kimchi Guk",
    name_ar: "حساء الكيمتشي",
    price: 249,
    description_en: "Thin, tangy Korean soup with kimchi, chicken, tofu, and scallions.",
    description_ar: "حساء كوري حامض خفيف مع الكيمتشي والدجاج والتوفو وبصل الخوخ.",
    isVeg: false,
    isChefSpecial: false
  },
  {
    id: "soup-004",
    category_en: "Soups",
    category_ar: "الحساء",
    name_en: "Korean Jjamppong",
    name_ar: "حساء الجامبونغ الكوري",
    price: 259,
    description_en: "Fiery Korean seafood soup with prawns, squid, fish, and vegetables.",
    description_ar: "حساء المأكولات البحرية الكوري الحار مع الجمبري والحبار والسمك والخضروات.",
    isVeg: false,
    isChefSpecial: false
  },
  {
    id: "soup-005",
    category_en: "Soups",
    category_ar: "الحساء",
    name_en: "Miso Shiru",
    name_ar: "حساء الميسو الياباني",
    price: 189,
    description_en: "Traditional Japanese soup with miso, wakame seaweed, tofu, and dashi stock.",
    description_ar: "حساء ياباني تقليدي مع الميسو وعشب البحر والتوفو ومرق الداشي.",
    isVeg: false,
    isChefSpecial: false
  },

  // ─────────────────────────────────────────────────────────
  //  APPETIZERS
  // ─────────────────────────────────────────────────────────
  {
    id: "app-001",
    category_en: "Appetizers",
    category_ar: "المقبلات",
    name_en: "French Fries",
    name_ar: "بطاطس مقلية",
    price: 120,
    description_en: "Golden, crispy French fries — the classic favourite.",
    description_ar: "بطاطس مقلية ذهبية مقرمشة — الكلاسيكي المفضل.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "app-002",
    category_en: "Appetizers",
    category_ar: "المقبلات",
    name_en: "Cajun Fries",
    name_ar: "بطاطس كاجون",
    price: 150,
    description_en: "Crispy fries seasoned with bold Cajun spices.",
    description_ar: "بطاطس مقرمشة متبلة بتوابل الكاجون القوية.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "app-003",
    category_en: "Appetizers",
    category_ar: "المقبلات",
    name_en: "Loaded Fries (Chicken)",
    name_ar: "بطاطس محملة (دجاج)",
    price: 250,
    description_en: "Golden fries loaded with crispy chicken and melted cheese toppings.",
    description_ar: "بطاطس ذهبية مع الدجاج المقرمش والجبنة المذابة.",
    isVeg: false,
    isChefSpecial: false
  },
  {
    id: "app-004",
    category_en: "Appetizers",
    category_ar: "المقبلات",
    name_en: "Loaded Fries (Beef)",
    name_ar: "بطاطس محملة (لحم بقري)",
    price: 270,
    description_en: "Golden fries loaded with seasoned beef and melted cheese toppings.",
    description_ar: "بطاطس ذهبية مع اللحم البقري المتبل والجبنة المذابة.",
    isVeg: false,
    isChefSpecial: false
  },
  {
    id: "app-005",
    category_en: "Appetizers",
    category_ar: "المقبلات",
    name_en: "Fish & Chips",
    name_ar: "سمك وبطاطس",
    price: 290,
    description_en: "Crispy fried fish paired with golden fries and a tasty dipping sauce.",
    description_ar: "سمك مقلي مقرمش مع البطاطس الذهبية وصلصة الغمس اللذيذة.",
    isVeg: false,
    isChefSpecial: false
  },
  {
    id: "app-006",
    category_en: "Appetizers",
    category_ar: "المقبلات",
    name_en: "Cheesy Chicken Fries",
    name_ar: "بطاطس الدجاج بالجبنة",
    price: 320,
    description_en: "Golden fries loaded with crispy chicken and gooey melted cheese — a savory delight.",
    description_ar: "بطاطس ذهبية مع الدجاج المقرمش والجبنة المذابة — متعة لذيذة.",
    isVeg: false,
    isChefSpecial: false
  },
  {
    id: "app-007",
    category_en: "Appetizers",
    category_ar: "المقبلات",
    name_en: "Chicken Strips",
    name_ar: "أصابع الدجاج",
    price: 280,
    description_en: "Five golden, crispy chicken strips served with chef's special dipping sauce.",
    description_ar: "خمسة أصابع دجاج ذهبية مقرمشة مع صلصة الغمس الخاصة بالشيف.",
    isVeg: false,
    isChefSpecial: false
  },

  // ─────────────────────────────────────────────────────────
  //  SALADS
  // ─────────────────────────────────────────────────────────
  {
    id: "sal-001",
    category_en: "Salads",
    category_ar: "السلطات",
    name_en: "Broccoli Chicken Salad",
    name_ar: "سلطة الدجاج والبروكلي",
    price: 360,
    description_en: "Boiled chicken and broccoli tossed with a rich garlic butter dressing.",
    description_ar: "دجاج مسلوق وبروكلي مع صلصة الثوم والزبدة الغنية.",
    isVeg: false,
    isChefSpecial: false
  },
  {
    id: "sal-002",
    category_en: "Salads",
    category_ar: "السلطات",
    name_en: "Sprout Salad",
    name_ar: "سلطة البراعم",
    price: 340,
    description_en: "Fresh sprouts with pomegranate, cucumber, and a citrus olive oil dressing.",
    description_ar: "براعم طازجة مع الرمان والخيار وصلصة زيت الزيتون الحامضية.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "sal-003",
    category_en: "Salads",
    category_ar: "السلطات",
    name_en: "Japanese Seaweed Salad",
    name_ar: "سلطة الأعشاب البحرية اليابانية",
    price: 319,
    description_en: "Deep-sea superfood seaweed with a light ponzu dressing, imported from Japan.",
    description_ar: "أعشاب بحرية غذائية رائعة مع صلصة البونزو الخفيفة، مستوردة من اليابان.",
    isVeg: true,
    isChefSpecial: true
  },
  {
    id: "sal-004",
    category_en: "Salads",
    category_ar: "السلطات",
    name_en: "Silken Tofu Salad",
    name_ar: "سلطة التوفو الحريري",
    price: 419,
    description_en: "Japanese silken tofu with mixed lettuce, radish, grilled chicken, and tobanjan dressing.",
    description_ar: "توفو ياباني حريري مع الخس المشكل والفجل والدجاج المشوي وصلصة التوبانجان.",
    isVeg: false,
    isChefSpecial: false
  },
  {
    id: "sal-005",
    category_en: "Salads",
    category_ar: "السلطات",
    name_en: "Waldorf Chicken Salad",
    name_ar: "سلطة دجاج والدورف",
    price: 420,
    description_en: "Classic Waldorf salad with chicken, apple, grapes, lettuce, and walnuts.",
    description_ar: "سلطة والدورف الكلاسيكية مع الدجاج والتفاح والعنب والخس والجوز.",
    isVeg: false,
    isChefSpecial: false
  },
  {
    id: "sal-006",
    category_en: "Salads",
    category_ar: "السلطات",
    name_en: "Chicken Caesar Salad",
    name_ar: "سلطة سيزر بالدجاج",
    price: 370,
    description_en: "Grilled chicken, cherry tomatoes, crunchy bread cubes, and classic Caesar dressing.",
    description_ar: "دجاج مشوي وطماطم كرزية ومكعبات خبز مقرمشة وصلصة السيزر الكلاسيكية.",
    isVeg: false,
    isChefSpecial: true
  },

  // ─────────────────────────────────────────────────────────
  //  WRAPS
  // ─────────────────────────────────────────────────────────
  {
    id: "wrap-001",
    category_en: "Wraps",
    category_ar: "الرولات",
    name_en: "Veg Wrap",
    name_ar: "رول نباتي",
    price: 160,
    description_en: "Fried vegetable fillings with tangy sauce and fresh lettuce in a soft tortilla.",
    description_ar: "حشوة خضروات مقلية مع صلصة حامضية وخس طازج في خبز التورتيلا الناعم.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "wrap-002",
    category_en: "Wraps",
    category_ar: "الرولات",
    name_en: "Chicken Wrap",
    name_ar: "رول الدجاج",
    price: 199,
    description_en: "Fried chicken with fresh lettuce and gherkins, perfectly seasoned, wrapped in a soft tortilla.",
    description_ar: "دجاج مقلي مع الخس الطازج والخيار المخلل، متبل بشكل مثالي، ملفوف في التورتيلا.",
    isVeg: false,
    isChefSpecial: false
  },
  {
    id: "wrap-003",
    category_en: "Wraps",
    category_ar: "الرولات",
    name_en: "Chicken Quesadilla",
    name_ar: "كيساديا الدجاج",
    price: 250,
    description_en: "Grilled chicken and melted cheese in a crispy tortilla, served with salsa dips.",
    description_ar: "دجاج مشوي وجبنة مذابة في تورتيلا مقرمشة مع صلصة السالسا.",
    isVeg: false,
    isChefSpecial: false
  },
  {
    id: "wrap-004",
    category_en: "Wraps",
    category_ar: "الرولات",
    name_en: "Beef Quesadilla",
    name_ar: "كيساديا اللحم البقري",
    price: 270,
    description_en: "Seasoned beef and melted cheese in a warm tortilla, served with sour cream.",
    description_ar: "لحم بقري متبل وجبنة مذابة في تورتيلا دافئة مع القشطة الحامضة.",
    isVeg: false,
    isChefSpecial: false
  },

  // ─────────────────────────────────────────────────────────
  //  BURGERS
  // ─────────────────────────────────────────────────────────
  {
    id: "burg-001",
    category_en: "Burgers",
    category_ar: "البرغر",
    name_en: "Smash Burger",
    name_ar: "سماش برغر",
    price: 350,
    description_en: "Smashed double beef patty, double cheese, and chef's special dressing — bold and satisfying.",
    description_ar: "باتيتان لحم بقري مضغوطتان مع جبنة مضاعفة وصلصة الشيف الخاصة — قوي ومُرضٍ.",
    isVeg: false,
    isChefSpecial: true
  },
  {
    id: "burg-002",
    category_en: "Burgers",
    category_ar: "البرغر",
    name_en: "Beef Burger",
    name_ar: "برغر لحم بقري",
    price: 270,
    description_en: "Beef patty with jalapeños, cheese, lettuce, tomatoes, and chef's special dressing.",
    description_ar: "باتي لحم بقري مع الهالابينيو والجبنة والخس والطماطم وصلصة الشيف الخاصة.",
    isVeg: false,
    isChefSpecial: false
  },
  {
    id: "burg-003",
    category_en: "Burgers",
    category_ar: "البرغر",
    name_en: "Ham Burger",
    name_ar: "هام برغر",
    price: 290,
    description_en: "Beef patty with caramelized onions, ham, layered cheese, and BBQ sauce.",
    description_ar: "باتي لحم بقري مع البصل المكرمل والهام والجبنة الطبقية وصلصة البربيكيو.",
    isVeg: false,
    isChefSpecial: false
  },
  {
    id: "burg-004",
    category_en: "Burgers",
    category_ar: "البرغر",
    name_en: "Chicken Burger",
    name_ar: "برغر دجاج",
    price: 290,
    description_en: "Crispy fried chicken with iceberg lettuce, cheese, and BBQ fries.",
    description_ar: "دجاج مقلي مقرمش مع الخس والجبنة وبطاطس البربيكيو.",
    isVeg: false,
    isChefSpecial: false
  },
  {
    id: "burg-005",
    category_en: "Burgers",
    category_ar: "البرغر",
    name_en: "Zesty Chicken Burger",
    name_ar: "برغر دجاج حار",
    price: 250,
    description_en: "Juicy chicken patty with jalapeños, lettuce, tomatoes, and chef's special dressing.",
    description_ar: "باتي دجاج طري مع الهالابينيو والخس والطماطم وصلصة الشيف الخاصة.",
    isVeg: false,
    isChefSpecial: false
  },
  {
    id: "burg-006",
    category_en: "Burgers",
    category_ar: "البرغر",
    name_en: "Veg Burger",
    name_ar: "برغر نباتي",
    price: 190,
    description_en: "Golden vegetable patty with fresh lettuce, tomatoes, and special dressing.",
    description_ar: "باتي خضروات ذهبية مع الخس الطازج والطماطم والصلصة الخاصة.",
    isVeg: true,
    isChefSpecial: false
  },

  // ─────────────────────────────────────────────────────────
  //  LOAF STACKS
  // ─────────────────────────────────────────────────────────
  {
    id: "loaf-001",
    category_en: "Loaf Stacks",
    category_ar: "توست اللوف",
    name_en: "BLT Loaf Stack",
    name_ar: "توست لوف البقري",
    price: 290,
    description_en: "Hearty loaf with beef, fresh lettuce, tomato, and feta cheese.",
    description_ar: "توست لوف شهي مع اللحم البقري والخس الطازج والطماطم وجبنة الفيتا.",
    isVeg: false,
    isChefSpecial: false
  },
  {
    id: "loaf-002",
    category_en: "Loaf Stacks",
    category_ar: "توست اللوف",
    name_en: "Hot Dog",
    name_ar: "هوت دوغ",
    price: 180,
    description_en: "Grilled chicken onion sausage with barbecue mayo, served in a partially sliced bun.",
    description_ar: "سجق دجاج وبصل مشوي مع مايونيز البربيكيو في خبزة مقطوعة جزئياً.",
    isVeg: false,
    isChefSpecial: false
  },
  {
    id: "loaf-003",
    category_en: "Loaf Stacks",
    category_ar: "توست اللوف",
    name_en: "Veggie Loaf Sandwich",
    name_ar: "ساندويش لوف الخضروات",
    price: 250,
    description_en: "Vegetable loaf sandwich filled with American corn salad.",
    description_ar: "ساندويش خبز الخضروات محشو بسلطة الذرة الأمريكية.",
    isVeg: true,
    isChefSpecial: false
  },

  // ─────────────────────────────────────────────────────────
  //  SANDWICHES
  // ─────────────────────────────────────────────────────────
  {
    id: "sand-001",
    category_en: "Sandwiches",
    category_ar: "الساندويشات",
    name_en: "Grilled Chicken Sandwich",
    name_ar: "ساندويش دجاج مشوي",
    price: 240,
    description_en: "Toasted bread with grilled chicken, feta cheese, and gherkins.",
    description_ar: "خبز محمص مع الدجاج المشوي وجبنة الفيتا والخيار المخلل.",
    isVeg: false,
    isChefSpecial: false
  },
  {
    id: "sand-002",
    category_en: "Sandwiches",
    category_ar: "الساندويشات",
    name_en: "Cheesy Spinach Corn Sandwich",
    name_ar: "ساندويش السبانخ والجبنة والذرة",
    price: 230,
    description_en: "Toasted bread with fresh vegetable fillings, corn, cheese, and chef's choice sauces.",
    description_ar: "خبز محمص مع حشوة الخضروات الطازجة والذرة والجبنة وصلصات الشيف.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "sand-003",
    category_en: "Sandwiches",
    category_ar: "الساندويشات",
    name_en: "Spicy Grilled Chicken Sandwich",
    name_ar: "ساندويش دجاج مشوي حار",
    price: 260,
    description_en: "Toasted bread with spicy chicken, schezwan sauce, tomato, cucumber, and chef's special dressing.",
    description_ar: "خبز محمص مع الدجاج الحار وصلصة السيشوان والطماطم والخيار وصلصة الشيف الخاصة.",
    isVeg: false,
    isChefSpecial: false
  },
  {
    id: "sand-004",
    category_en: "Sandwiches",
    category_ar: "الساندويشات",
    name_en: "Beef Bolognese Sandwich",
    name_ar: "ساندويش بولونيز اللحم البقري",
    price: 290,
    description_en: "Toasted bread with bolognese beef, lettuce, cheese, tomato, cucumber, and chef's special dressing.",
    description_ar: "خبز محمص مع لحم البولونيز والخس والجبنة والطماطم والخيار وصلصة الشيف الخاصة.",
    isVeg: false,
    isChefSpecial: false
  },
  {
    id: "sand-005",
    category_en: "Sandwiches",
    category_ar: "الساندويشات",
    name_en: "Chicken Club Sandwich",
    name_ar: "ساندويش كلوب الدجاج",
    price: 340,
    description_en: "Toasted bread with grilled chicken, fried egg, lettuce, tomato, and chef's special dressing.",
    description_ar: "خبز محمص مع الدجاج المشوي والبيض المقلي والخس والطماطم وصلصة الشيف الخاصة.",
    isVeg: false,
    isChefSpecial: true
  },

  // ─────────────────────────────────────────────────────────
  //  PASTA
  // ─────────────────────────────────────────────────────────
  {
    id: "pasta-001",
    category_en: "Pasta",
    category_ar: "المعكرونة",
    name_en: "Penne Arrabiata Chicken",
    name_ar: "بيني أررابياتا بالدجاج",
    price: 350,
    description_en: "Italian tomato-based arrabiata sauce with penne pasta and tender chicken.",
    description_ar: "صلصة أررابياتا إيطالية على أساس الطماطم مع معكرونة البيني والدجاج الطري.",
    isVeg: false,
    isChefSpecial: false
  },
  {
    id: "pasta-002",
    category_en: "Pasta",
    category_ar: "المعكرونة",
    name_en: "Penne Alfredo Chicken",
    name_ar: "بيني ألفريدو بالدجاج",
    price: 370,
    description_en: "Penne pasta with mushrooms and chicken, cooked in a rich and creamy white Alfredo sauce.",
    description_ar: "معكرونة بيني مع الفطر والدجاج في صلصة ألفريدو البيضاء الكريمية الغنية.",
    isVeg: false,
    isChefSpecial: false
  },
  {
    id: "pasta-003",
    category_en: "Pasta",
    category_ar: "المعكرونة",
    name_en: "Mac & Cheese Chicken",
    name_ar: "ماك آند تشيز بالدجاج",
    price: 380,
    description_en: "Creamy macaroni pasta mixed with rich cheese sauce and crispy fried chicken.",
    description_ar: "معكرونة ماكاروني كريمية مع صلصة الجبنة الغنية والدجاج المقلي المقرمش.",
    isVeg: false,
    isChefSpecial: false
  },
  {
    id: "pasta-004",
    category_en: "Pasta",
    category_ar: "المعكرونة",
    name_en: "Spaghetti Arrabiata Chicken",
    name_ar: "سباغيتي أررابياتا بالدجاج",
    price: 380,
    description_en: "Italian tomato-based arrabiata sauce with spaghetti pasta and succulent chicken.",
    description_ar: "صلصة أررابياتا إيطالية على أساس الطماطم مع معكرونة السباغيتي والدجاج الطري.",
    isVeg: false,
    isChefSpecial: false
  },
  {
    id: "pasta-005",
    category_en: "Pasta",
    category_ar: "المعكرونة",
    name_en: "Spaghetti Bolognese",
    name_ar: "سباغيتي بولونيز",
    price: 420,
    description_en: "Delicious spaghetti pasta smothered in rich beef Bolognese sauce and topped with Parmesan cheese.",
    description_ar: "معكرونة سباغيتي لذيذة مغطاة بصلصة البولونيز اللحمية الغنية ومع جبنة البارميزان.",
    isVeg: false,
    isChefSpecial: true
  },
  {
    id: "pasta-006",
    category_en: "Pasta",
    category_ar: "المعكرونة",
    name_en: "Creamy Penne Pesto Chicken",
    name_ar: "بيني بيستو كريمي بالدجاج",
    price: 430,
    description_en: "Penne pasta tossed in a creamy pesto sauce with cashews, fresh basil, chicken, olive oil, and Parmesan cheese.",
    description_ar: "معكرونة بيني مع صلصة البيستو الكريمية والكاجو والريحان الطازج والدجاج وزيت الزيتون وجبنة البارميزان.",
    isVeg: false,
    isChefSpecial: true
  },

  // ─────────────────────────────────────────────────────────
  //  LARGE PLATES (RICE BOWLS & RAMEN)
  // ─────────────────────────────────────────────────────────
  {
    id: "large-001",
    category_en: "Large Plates",
    category_ar: "الأطباق الكبيرة",
    name_en: "Puerto Rican Rice Bowl",
    name_ar: "وعاء الأرز البورتوريكي",
    price: 394,
    description_en: "Chicken cooked in sofrito sauce, served with parsley butter rice.",
    description_ar: "دجاج مطبوخ في صلصة السوفريتو مع أرز الزبدة والبقدونس.",
    isVeg: false,
    isChefSpecial: true
  },
  {
    id: "large-002",
    category_en: "Large Plates",
    category_ar: "الأطباق الكبيرة",
    name_en: "Mexican Rice Bowl",
    name_ar: "وعاء الأرز المكسيكي",
    price: 394,
    description_en: "Mexican rice with spiced beans, fresh salsa, and grilled toppings.",
    description_ar: "أرز مكسيكي مع الفاصوليا المتبلة والسالسا الطازجة والمشويات.",
    isVeg: false,
    isChefSpecial: false
  },
  {
    id: "large-003",
    category_en: "Large Plates",
    category_ar: "الأطباق الكبيرة",
    name_en: "Indonesian Rice Bowl",
    name_ar: "وعاء الأرز الإندونيسي",
    price: 389,
    description_en: "Fragrant Indonesian rice with sambal sauce, fresh veggies, and signature Indonesian flavours.",
    description_ar: "أرز إندونيسي عطري مع صلصة السامبال والخضروات الطازجة والنكهات الإندونيسية المميزة.",
    isVeg: false,
    isChefSpecial: false
  },
  {
    id: "large-004",
    category_en: "Large Plates",
    category_ar: "الأطباق الكبيرة",
    name_en: "Classic Miso Ramen",
    name_ar: "رامن ميسو كلاسيكي",
    price: 389,
    description_en: "Japanese-style miso broth with chicken, soft-boiled egg, sprouts, and beni shoga (pickled ginger).",
    description_ar: "مرقة الميسو على الطريقة اليابانية مع الدجاج وبيضة مسلوقة ناعمة والبراعم والزنجبيل المخلل.",
    isVeg: false,
    isChefSpecial: true
  },

  // ─────────────────────────────────────────────────────────
  //  STEAKS
  // ─────────────────────────────────────────────────────────
  {
    id: "steak-001",
    category_en: "Steaks",
    category_ar: "الستيك",
    name_en: "Beef Rib-Eye Steak",
    name_ar: "ستيك ريب آي اللحم البقري",
    price: 700,
    description_en: "Prime cut rib-eye cooked with butter, rosemary, and garlic. Served with smashed potatoes and veggie salad. *Pricing may vary based on portion size.",
    description_ar: "قطعة ريب آي ممتازة مطبوخة بالزبدة وإكليل الجبل والثوم. تُقدم مع البطاطس المهروسة وسلطة الخضار. *قد تختلف الأسعار حسب حجم الحصة.",
    isVeg: false,
    isChefSpecial: true
  },
  {
    id: "steak-002",
    category_en: "Steaks",
    category_ar: "الستيك",
    name_en: "Beef Steak Tenderloin",
    name_ar: "ستيك تيندرلوين اللحم البقري",
    price: 600,
    description_en: "Grilled to perfection — juicy and tender beef tenderloin. Served with smashed potatoes and veggie salad. *Pricing may vary based on portion size.",
    description_ar: "مشوي باحتراف — ستيك تيندرلوين طري وعصيري. يُقدم مع البطاطس المهروسة وسلطة الخضار. *قد تختلف الأسعار حسب حجم الحصة.",
    isVeg: false,
    isChefSpecial: true
  },
  {
    id: "steak-003",
    category_en: "Steaks",
    category_ar: "الستيك",
    name_en: "Burnt Garlic Pepper Chicken Steak",
    name_ar: "ستيك دجاج بالثوم المحروق والفلفل",
    price: 470,
    description_en: "Grilled chicken steak with burnt garlic pepper sauce, mashed potato, and vegetables.",
    description_ar: "ستيك دجاج مشوي مع صلصة الثوم المحروق والفلفل والبطاطس المهروسة والخضروات.",
    isVeg: false,
    isChefSpecial: false
  },
  {
    id: "steak-004",
    category_en: "Steaks",
    category_ar: "الستيك",
    name_en: "Creamy Mushroom Chicken Steak",
    name_ar: "ستيك دجاج بالفطر الكريمي",
    price: 469,
    description_en: "Juicy grilled chicken steak with a rich and creamy mushroom sauce blend.",
    description_ar: "ستيك دجاج مشوي طري مع مزيج الفطر الكريمي الغني.",
    isVeg: false,
    isChefSpecial: true
  },
  {
    id: "steak-005",
    category_en: "Steaks",
    category_ar: "الستيك",
    name_en: "Panaeng Chicken Steak",
    name_ar: "ستيك دجاج بانانغ",
    price: 439,
    description_en: "Thai-style grilled chicken in a rich, aromatic panaeng sauce.",
    description_ar: "دجاج مشوي على الطريقة التايلاندية في صلصة البانانغ الغنية والعطرة.",
    isVeg: false,
    isChefSpecial: false
  },
  {
    id: "steak-006",
    category_en: "Steaks",
    category_ar: "الستيك",
    name_en: "Creamy Rosso Chicken Steak",
    name_ar: "ستيك دجاج روسو الكريمي",
    price: 439,
    description_en: "Grilled chicken with a medium-spicy, creamy rosso tomato cream sauce.",
    description_ar: "دجاج مشوي مع صلصة الروسو الكريمية متوسطة الحرارة.",
    isVeg: false,
    isChefSpecial: false
  },

  // ─────────────────────────────────────────────────────────
  //  WAFFLES
  // ─────────────────────────────────────────────────────────
  {
    id: "waffle-001",
    category_en: "Waffles",
    category_ar: "الوافل",
    name_en: "Milky Delight Waffle",
    name_ar: "وافل ميلكي ديلايت",
    price: 220,
    description_en: "Rich milky chocolate waffle, dipped in creamy milk chocolate, with ice cream, crushed nuts, and chocolate chips.",
    description_ar: "وافل شوكولاتة حليبية غنية مغمورة في الشوكولاتة الكريمية مع الآيس كريم والمكسرات المطحونة وقطع الشوكولاتة.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "waffle-002",
    category_en: "Waffles",
    category_ar: "الوافل",
    name_en: "Cocoa Bliss Waffle",
    name_ar: "وافل كوكو بليس",
    price: 230,
    description_en: "Waffle dipped in rich dark chocolate, topped with ice cream, crushed nuts, and chocolate chips.",
    description_ar: "وافل مغمور في الشوكولاتة الداكنة الغنية مع الآيس كريم والمكسرات المطحونة وقطع الشوكولاتة.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "waffle-003",
    category_en: "Waffles",
    category_ar: "الوافل",
    name_en: "Nutella Waffle",
    name_ar: "وافل نوتيلا",
    price: 250,
    description_en: "Waffle dipped in rich chocolate, drizzled with Nutella, and topped with ice cream, chocolate chips, and nuts.",
    description_ar: "وافل مغمور في الشوكولاتة الغنية مع نوتيلا والآيس كريم وقطع الشوكولاتة والمكسرات.",
    isVeg: true,
    isChefSpecial: true
  },

  // ─────────────────────────────────────────────────────────
  //  DESSERTS
  //  ⚠️ FLAGGED: Some prices below need owner confirmation
  //     (PDF layout was complex for this section)
  // ─────────────────────────────────────────────────────────
  {
    id: "dess-001",
    category_en: "Desserts",
    category_ar: "الحلويات",
    name_en: "Choco Callebaut",
    name_ar: "شوكو كاليبو",
    price: 250,
    description_en: "Made with rich Callebaut premium Belgian chocolate for a truly decadent experience.",
    description_ar: "مصنوع بشوكولاتة كاليبو البلجيكية الفاخرة لتجربة لذيذة حقاً.",
    isVeg: true,
    isChefSpecial: true
  },
  {
    id: "dess-002",
    category_en: "Desserts",
    category_ar: "الحلويات",
    name_en: "Biscoff Cheesecake",
    name_ar: "تشيزكيك البسكوف",
    price: 290,
    description_en: "A creamy and indulgent cheesecake infused with the beloved Biscoff flavour.",
    description_ar: "تشيزكيك كريمي ومغرٍ مضاف إليه نكهة البسكوف المحبوبة.",
    isVeg: true,
    isChefSpecial: true
  },
  {
    id: "dess-003",
    category_en: "Desserts",
    category_ar: "الحلويات",
    name_en: "Cookie",
    name_ar: "كوكيز",
    price: 90,
    description_en: "Freshly baked cookie — soft, warm, and delicious. ⚠️ Please confirm price with owner.",
    description_ar: "كوكيز طازجة — طرية ودافئة ولذيذة. ⚠️ يرجى تأكيد السعر مع المالك.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "dess-004",
    category_en: "Desserts",
    category_ar: "الحلويات",
    name_en: "Red Velvet Cake",
    name_ar: "كيك ريد فيلفيت",
    price: 140,
    description_en: "Classic red velvet cake slice. ⚠️ Please confirm price with owner.",
    description_ar: "قطعة كيك ريد فيلفيت الكلاسيكية. ⚠️ يرجى تأكيد السعر مع المالك.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "dess-005",
    category_en: "Desserts",
    category_ar: "الحلويات",
    name_en: "Double Choco Cake",
    name_ar: "كيك الشوكولاتة المضاعفة",
    price: 130,
    description_en: "Rich double chocolate cake slice. ⚠️ Please confirm price with owner.",
    description_ar: "قطعة كيك الشوكولاتة المضاعفة الغنية. ⚠️ يرجى تأكيد السعر مع المالك.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "dess-006",
    category_en: "Desserts",
    category_ar: "الحلويات",
    name_en: "Mellow Marvel Cake",
    name_ar: "كيك ميلو مارفيل",
    price: 250,
    description_en: "A light and fluffy cake perfect for any occasion.",
    description_ar: "كيك خفيف وهش مثالي لأي مناسبة.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "dess-007",
    category_en: "Desserts",
    category_ar: "الحلويات",
    name_en: "Donut",
    name_ar: "دونت",
    price: 90,
    description_en: "Freshly baked donut. ⚠️ Please confirm price with owner.",
    description_ar: "دونت طازج. ⚠️ يرجى تأكيد السعر مع المالك.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "dess-008",
    category_en: "Desserts",
    category_ar: "الحلويات",
    name_en: "Choco Lava",
    name_ar: "شوكو لافا",
    price: 130,
    description_en: "Warm chocolate lava cake with a molten center. ⚠️ Please confirm price with owner.",
    description_ar: "كيك شوكولاتة دافئ بقلب ذائب. ⚠️ يرجى تأكيد السعر مع المالك.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "dess-009",
    category_en: "Desserts",
    category_ar: "الحلويات",
    name_en: "Sizzling Brownie",
    name_ar: "براوني ساخن",
    price: 280,
    description_en: "Indulgent warm sizzling brownie served hot on a cast iron plate — a chocolatey delight!",
    description_ar: "براوني ساخن ومغرٍ يُقدم على صحن حديدي — متعة شوكولاتة لا تُقاوم!",
    isVeg: true,
    isChefSpecial: true
  },

  // ─────────────────────────────────────────────────────────
  //  MOJITOS
  // ─────────────────────────────────────────────────────────
  {
    id: "moj-001",
    category_en: "Mojitos",
    category_ar: "الموهيتو",
    name_en: "Frosty Mint Chill",
    name_ar: "نعناع مثلج",
    price: 180,
    description_en: "Refreshing minty mojito — cool and invigorating.",
    description_ar: "موهيتو نعناع منعش — بارد ومنشط.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "moj-002",
    category_en: "Mojitos",
    category_ar: "الموهيتو",
    name_en: "Citrus Agua Freeze",
    name_ar: "تجميد الحمضيات",
    price: 180,
    description_en: "Zesty citrus mojito — bright and refreshing.",
    description_ar: "موهيتو حمضيات منعش — مشرق ومنعش.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "moj-003",
    category_en: "Mojitos",
    category_ar: "الموهيتو",
    name_en: "Green Apple Smith",
    name_ar: "تفاح أخضر سميث",
    price: 180,
    description_en: "Crisp green apple mojito with a tart, refreshing flavour.",
    description_ar: "موهيتو التفاح الأخضر المقرمش بنكهة حامضية منعشة.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "moj-004",
    category_en: "Mojitos",
    category_ar: "الموهيتو",
    name_en: "Passion Fruit Splash",
    name_ar: "رشة فاكهة الشغف",
    price: 190,
    description_en: "Tropical passion fruit mojito — exotic and refreshing.",
    description_ar: "موهيتو فاكهة الشغف الاستوائية — غريبة ومنعشة.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "moj-005",
    category_en: "Mojitos",
    category_ar: "الموهيتو",
    name_en: "Melon Mint Fizz",
    name_ar: "فوار البطيخ والنعناع",
    price: 210,
    description_en: "Sweet melon with fresh mint in a sparkling mojito — a perfect summer refresher.",
    description_ar: "بطيخ حلو مع النعناع الطازج في موهيتو فوار — منعش صيفي مثالي.",
    isVeg: true,
    isChefSpecial: true
  },
  {
    id: "moj-006",
    category_en: "Mojitos",
    category_ar: "الموهيتو",
    name_en: "Lavender Breeze",
    name_ar: "نسيم اللافندر",
    price: 210,
    description_en: "Floral lavender mojito — delicate, aromatic, and refreshing.",
    description_ar: "موهيتو اللافندر الزهري — رقيق وعطري ومنعش.",
    isVeg: true,
    isChefSpecial: false
  },

  // ─────────────────────────────────────────────────────────
  //  SHAKES
  // ─────────────────────────────────────────────────────────
  {
    id: "shake-001",
    category_en: "Shakes",
    category_ar: "الشيك",
    name_en: "Peanut Banana Swirl",
    name_ar: "لولب الفول السوداني والموز",
    price: 220,
    description_en: "Rich peanut butter and ripe bananas blended to creamy perfection.",
    description_ar: "زبدة الفول السوداني الغنية والموز الناضج ممزوجان لكمال كريمي.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "shake-002",
    category_en: "Shakes",
    category_ar: "الشيك",
    name_en: "Mississippi Mud",
    name_ar: "طين ميسيسيبي",
    price: 250,
    description_en: "A decadent shake with brownies, choco chips, and ice cream — indulgently rich.",
    description_ar: "شيك فاخر مع البراوني وقطع الشوكولاتة والآيس كريم — غني بشكل مغرٍ.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "shake-003",
    category_en: "Shakes",
    category_ar: "الشيك",
    name_en: "Popcorn Shake",
    name_ar: "شيك الفشار",
    price: 250,
    description_en: "A creamy vanilla-caramel ice cream milkshake with popcorn flavour. ⚠️ Please verify description with owner.",
    description_ar: "شيك آيس كريم كريمي بنكهة الفانيليا والكراميل مع نكهة الفشار. ⚠️ يرجى التحقق من الوصف مع المالك.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "shake-004",
    category_en: "Shakes",
    category_ar: "الشيك",
    name_en: "Berry Cookie",
    name_ar: "توت وكوكيز",
    price: 260,
    description_en: "Creamy blend of sweet blueberries and chocolate cookies — fruity meets chocolatey.",
    description_ar: "مزيج كريمي من التوت الأزرق الحلو وبسكويت الشوكولاتة — فاكهي يلتقي بالشوكولاتة.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "shake-005",
    category_en: "Shakes",
    category_ar: "الشيك",
    name_en: "Nutri Fusion",
    name_ar: "نيوتري فيوجن",
    price: 270,
    description_en: "A healthy and hearty blend of cashew, dry fig, walnuts, and iced milk.",
    description_ar: "مزيج صحي وشهي من الكاجو والتين الجاف والجوز والحليب المثلج.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "shake-006",
    category_en: "Shakes",
    category_ar: "الشيك",
    name_en: "Euphoria",
    name_ar: "نشوة",
    price: 280,
    description_en: "A delightful mix of ice cream scoops and almonds — pure bliss in a glass.",
    description_ar: "مزيج رائع من كرات الآيس كريم واللوز — نشوة خالصة في كأس.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "shake-007",
    category_en: "Shakes",
    category_ar: "الشيك",
    name_en: "Lotus Biscoff",
    name_ar: "لوتس بسكوف",
    price: 290,
    description_en: "Creamy Lotus Biscoff spread and cookies topped with whipped cream and crumbled Biscoff cookies.",
    description_ar: "كريمة لوتس بسكوف وبسكويت مع كريمة مخفوقة وبسكويت بسكوف مفتت.",
    isVeg: true,
    isChefSpecial: true
  },

  // ─────────────────────────────────────────────────────────
  //  FRESH JUICES
  // ─────────────────────────────────────────────────────────
  {
    id: "juice-001",
    category_en: "Fresh Juices",
    category_ar: "العصائر الطازجة",
    name_en: "Pineapple Mint",
    name_ar: "أناناس وبعصير النعناع",
    price: 120,
    description_en: "Fresh pineapple juice with a hint of mint — tropical and refreshing.",
    description_ar: "عصير أناناس طازج مع لمسة النعناع — استوائي ومنعش.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "juice-002",
    category_en: "Fresh Juices",
    category_ar: "العصائر الطازجة",
    name_en: "Watermelon Juice",
    name_ar: "عصير البطيخ",
    price: 130,
    description_en: "Pure, refreshing watermelon juice — sweet and hydrating.",
    description_ar: "عصير بطيخ نقي ومنعش — حلو ومرطب.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "juice-003",
    category_en: "Fresh Juices",
    category_ar: "العصائر الطازجة",
    name_en: "Citrus Orange",
    name_ar: "عصير البرتقال الحمضي",
    price: 140,
    description_en: "Freshly squeezed orange juice — vibrant and packed with vitamin C.",
    description_ar: "عصير برتقال طازج معصور — نابض بالحياة وغني بفيتامين C.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "juice-004",
    category_en: "Fresh Juices",
    category_ar: "العصائر الطازجة",
    name_en: "Pomegranate Juice",
    name_ar: "عصير الرمان",
    price: 170,
    description_en: "Rich, antioxidant-packed fresh pomegranate juice.",
    description_ar: "عصير رمان طازج غني ومليء بمضادات الأكسدة.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "juice-005",
    category_en: "Fresh Juices",
    category_ar: "العصائر الطازجة",
    name_en: "ABC Juice",
    name_ar: "عصير ABC",
    price: 180,
    description_en: "A powerful health blend of Apple, Beetroot, and Carrot — energizing and nutritious.",
    description_ar: "مزيج صحي قوي من التفاح والشمندر والجزر — منشط وغذائي.",
    isVeg: true,
    isChefSpecial: false
  },

  // ─────────────────────────────────────────────────────────
  //  PIZZAS (from pizza menu.pdf)
  // ─────────────────────────────────────────────────────────
  {
    id: "pizza-001",
    category_en: "Pizzas",
    category_ar: "البيتزا",
    name_en: "Farm House Pizza",
    name_ar: "بيتزا فارم هاوس",
    price: 394,
    description_en: "Hand-tossed pizza loaded with fresh vegetables and mozzarella on a zesty tomato base.",
    description_ar: "بيتزا مرمية يدوياً محملة بالخضروات الطازجة والموتزاريلا على قاعدة طماطم حامضية.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "pizza-002",
    category_en: "Pizzas",
    category_ar: "البيتزا",
    name_en: "Alfredo Chicken Pizza",
    name_ar: "بيتزا ألفريدو بالدجاج",
    price: 437,
    description_en: "Creamy Alfredo white sauce base, topped with grilled chicken and a rich cheese blend.",
    description_ar: "قاعدة صلصة ألفريدو البيضاء الكريمية مع الدجاج المشوي ومزيج الجبنة الغني.",
    isVeg: false,
    isChefSpecial: true
  },
  {
    id: "pizza-003",
    category_en: "Pizzas",
    category_ar: "البيتزا",
    name_en: "BBQ Chicken Pizza",
    name_ar: "بيتزا دجاج البربيكيو",
    price: 394,
    description_en: "Smoky BBQ sauce with tender chicken, caramelized onions, melted cheese, and jalapeños.",
    description_ar: "صلصة بربيكيو مدخنة مع الدجاج الطري والبصل المكرمل والجبنة المذابة والهالابينيو.",
    isVeg: false,
    isChefSpecial: true
  },
  {
    id: "pizza-004",
    category_en: "Pizzas",
    category_ar: "البيتزا",
    name_en: "Tandoori Chicken Pizza",
    name_ar: "بيتزا دجاج تندوري",
    price: 394,
    description_en: "Tandoori-marinated and spiced chicken with onions, colourful peppers, and melted cheese.",
    description_ar: "دجاج متبل بالتندوري مع البصل والفلفل الملون والجبنة المذابة.",
    isVeg: false,
    isChefSpecial: false
  },
  {
    id: "pizza-005",
    category_en: "Pizzas",
    category_ar: "البيتزا",
    name_en: "Classic Margherita",
    name_ar: "مارغريتا الكلاسيكية",
    price: 369,
    description_en: "The timeless classic — fresh tomato sauce, mozzarella, and fragrant fresh basil.",
    description_ar: "الكلاسيكي الخالد — صلصة طماطم طازجة وموتزاريلا وريحان طازج عطري.",
    isVeg: true,
    isChefSpecial: false
  },
  {
    id: "pizza-006",
    category_en: "Pizzas",
    category_ar: "البيتزا",
    name_en: "Pollo Alla Calabrese",
    name_ar: "بيتزا بولو ألا كالابريزي",
    price: 369,
    description_en: "Spicy Italian-style chicken and vegetables with olives and herbed cheese — bold Calabrian flavours.",
    description_ar: "دجاج وخضروات بالطريقة الإيطالية الحارة مع الزيتون وجبنة الأعشاب — نكهات كالابرية جريئة.",
    isVeg: false,
    isChefSpecial: true
  }
];

// ═══════════════════════════════════════════════════════════
//  CATEGORY METADATA & ORDERING
// ═══════════════════════════════════════════════════════════
const CATEGORY_META = {
  "Espresso": { icon: "☕", order: 1 },
  "Cappuccino": { icon: "☕", order: 2 },
  "Specialty Coffee": { icon: "⚗️", order: 3 },
  "Café Latte & Classic Coffee": { icon: "☕", order: 4 },
  "Iced Coffee": { icon: "🧊", order: 5 },
  "Frappes": { icon: "🥤", order: 6 },
  "Tea": { icon: "🍵", order: 7 },
  "Mojitos": { icon: "🍹", order: 8 },
  "Shakes": { icon: "🥤", order: 9 },
  "Fresh Juices": { icon: "🍊", order: 10 },
  "Burgers": { icon: "🍔", order: 11 },
  "Pizzas": { icon: "🍕", order: 12 },
  "Sandwiches": { icon: "🥪", order: 13 },
  "Loaf Stacks": { icon: "🥖", order: 14 },
  "Wraps": { icon: "🌯", order: 15 },
  "Appetizers": { icon: "🍟", order: 16 },
  "Soups": { icon: "🥣", order: 17 },
  "Salads": { icon: "🥗", order: 18 },
  "Pasta": { icon: "🍝", order: 19 },
  "Steaks": { icon: "🥩", order: 20 },
  "Large Plates": { icon: "🍲", order: 21 },
  "Waffles": { icon: "🧇", order: 22 },
  "Desserts": { icon: "🍰", order: 23 }
};

// ═══════════════════════════════════════════════════════════
//  HELPER: Get unique categories
// ═══════════════════════════════════════════════════════════
function getCategories(lang = 'en') {
  const seen = new Set();
  const categories = [];
  MENU_DATA.forEach(item => {
    const key = item.category_en;
    if (!seen.has(key)) {
      seen.add(key);
      const meta = CATEGORY_META[key] || { icon: "🍽️", order: 99 };
      categories.push({
        key: key,
        label: lang === 'ar' ? item.category_ar : item.category_en,
        icon: meta.icon,
        order: meta.order
      });
    }
  });
  categories.sort((a, b) => a.order - b.order);
  return categories;
}

// ═══════════════════════════════════════════════════════════
//  HELPER: Get Chef's Specials
// ═══════════════════════════════════════════════════════════
function getChefSpecials() {
  return MENU_DATA.filter(item => item.isChefSpecial);
}

// ═══════════════════════════════════════════════════════════
//  HELPER: Filter by category
// ═══════════════════════════════════════════════════════════
function getItemsByCategory(categoryKey) {
  return MENU_DATA.filter(item => item.category_en === categoryKey);
}

// ═══════════════════════════════════════════════════════════
//  HELPER: Search items (Cross-bilingual search)
// ═══════════════════════════════════════════════════════════
function searchMenu(query, lang = 'en') {
  const q = query.trim().toLowerCase();
  if (!q) return MENU_DATA;
  return MENU_DATA.filter(item => {
    return (
      item.name_en.toLowerCase().includes(q) ||
      item.description_en.toLowerCase().includes(q) ||
      item.category_en.toLowerCase().includes(q) ||
      item.name_ar.includes(query) ||
      item.description_ar.includes(query) ||
      item.category_ar.includes(query)
    );
  });
}
