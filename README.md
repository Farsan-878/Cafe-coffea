# Café Coffea – NFC Digital Menu

Premium bilingual (English + Arabic) NFC digital menu for Café Coffea, Kottakkal, Kerala.

## Quick Start

Open `index.html` in any modern browser, or deploy to Vercel.

## Project Structure

```
cafe-coffea-nfc/
├── index.html               ← Main HTML page (all sections & bilingual layout)
├── manifest.json            ← Progressive Web App (PWA) manifest
├── table-qr-generator.html  ← 🖨️ NFC table card & printable QR standee generator
├── vercel.json              ← Vercel deployment & security headers config
├── css/
│   └── style.css            ← Complete design system (luxury dark green & gold)
└── js/
    ├── menuData.js          ← 📋 ALL MENU DATA (128 items) + Site configuration
    └── app.js               ← Application logic, language switching, NFC table detection
```

## Features

- ✅ **Bilingual**: English (LTR) + Arabic (RTL) with instantaneous language switching
- ✅ **128 Complete Menu Items**: Extracted from café & pizza menus across 20 distinct categories
- ✅ **NFC & Table Detection**: Automatically reads table parameter (`?table=5` or `?t=5`), displays table badge, and persists in session
- ✅ **Table Welcome Banner & Waiter Call**: Dedicated notification bar with 1-tap "Call Waiter" via WhatsApp prefilled with table details
- ✅ **Dietary Filter**: Instant toggle for **All**, **🟢 Veg Only**, and **🔴 Non-Veg**
- ✅ **Search & Filter Counter**: Live matching results counter with 1-tap clear button (`✕`)
- ✅ **Expandable Menu Items**: Tap to reveal full descriptions and prices
- ✅ **Chef's Specials Section**: Highlights signature creations
- ✅ **Floating Back-to-Top**: Smooth navigation on mobile devices
- ✅ **PWA Ready**: `manifest.json` configured for standalone mobile experience
- ✅ **NFC Table Card Generator**: Built-in tool (`table-qr-generator.html`) to generate and print table QR standees and copy NFC URLs
- ✅ **Social & Map Integrations**: Instagram, Google Maps directions, Google Reviews
- ✅ **Mobile-First Responsive Design**: Optimized for touch with luxury dark green & gold palette
- ✅ **Vercel Deployment Ready**: Preconfigured caching and security headers

## How NFC Tables Work

1. Each physical table has an NFC sticker or puck (e.g., NTAG213 / NTAG215) and an optional QR code standee.
2. The NFC tag is programmed with the table URL:
   `https://cafecoffea.in/menu/?table=4`
3. When a diner taps their phone:
   - The menu immediately opens in their browser.
   - The table number ("Table 4" / "طاولة ٤") appears in the header and banner.
   - When the diner taps "Call Waiter" or "WhatsApp", their table number is automatically included in the message so staff know exactly where to go.

### Printing Table Cards & Programming NFC Tags

Open `table-qr-generator.html` in your browser to:
- Generate printable standee cards for tables 1 through 20+
- Print physical tent cards or sticker sheets (`Ctrl + P`)
- Copy NFC payloads directly for apps like **NFC Tools** (iOS & Android)

## To Update Menu Items

Edit `js/menuData.js`:

1. **Add a new item** — Add an object to `MENU_DATA` array:
```js
{
  id: "unique-id",
  category_en: "Category Name",
  category_ar: "اسم الفئة",
  name_en: "Item Name",
  name_ar: "اسم العنصر",
  price: 250,
  description_en: "English description",
  description_ar: "الوصف بالعربي",
  isVeg: true,        // true = vegetarian indicator shown
  isChefSpecial: true // true = appears in Chef's Specials section
}
```

2. **Edit a price** — Find the item by `id` and update `price`
3. **Change categories** — Update `category_en` and `category_ar`

## Configuration

At the top of `js/menuData.js`, update `SITE_CONFIG`:

```js
const SITE_CONFIG = {
  // ⚠️ Replace with actual Google Review URL when available:
  googleReviewUrl: "REPLACE_WITH_DIRECT_GOOGLE_REVIEW_URL",
  
  // WhatsApp number (international format, no +):
  whatsappNumber: "919876543210",
  
  // Contact details:
  phone: "+91 XXXXX XXXXX",
  address: "Kottakkal, Malappuram, Kerala",
  ...
};
```

## Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from project folder
cd cafe-coffea-nfc
vercel

# For production deployment:
vercel --prod
```

## Items Flagged for Owner Review

See comments in `js/menuData.js`. Key items:

1. **Google Review URL** — Replace `REPLACE_WITH_DIRECT_GOOGLE_REVIEW_URL` in `SITE_CONFIG`
2. **WhatsApp number** — Add phone number to `SITE_CONFIG.whatsappNumber`
3. **Desserts pricing** — Some dessert prices (cookies, donuts, choco lava) may need verification
4. **Popcorn Shake description** — PDF was unclear; description inferred from fragments
5. **Chef's Specials selection** — Owner to confirm which items should be marked `isChefSpecial: true`
6. **Contact details** — Add correct phone, email to `SITE_CONFIG`

## Future Online Ordering

The architecture is prepared. See stubbed `Cart` object in `js/app.js`.
When ready, add backend API calls to:
- `Cart.submitOrder()` — POST to kitchen notification endpoint
- `Cart.trackOrder(orderId)` — GET order status
- ✅ Table number detection via URL parameter: `?table=5` (completed)
