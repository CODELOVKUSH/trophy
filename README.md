# PROMENTO — Custom Trophy & Awards

A modern, animated, production-ready marketing site for **Promento Custom Trophy & Awards**, a Mumbai-based premium custom trophy studio. Built to feel like a high-end product studio — luxury awards, corporate gifting and craftsmanship.

> **Crafting Your Pride**

---

## ✨ Features

- **Cinematic hero** — GSAP letter-by-letter wordmark reveal, animated gold shimmer, floating showpiece trophy with scroll parallax.
- **Filterable product gallery** — tabbed collections with Framer Motion layout animations.
- **Location & Theme Awards** — dedicated page with line-art landmark motifs per city (Goa, Jaipur, Malaysia, Kochi, Mumbai, Sri Lanka, Delhi).
- **"Crafting Your Pride" process** — GSAP ScrollTrigger pinned horizontal timeline on desktop, graceful vertical stack on mobile.
- **Animated contact form** — staggered field entrance + trophy-confetti success state.
- **Floating WhatsApp** click-to-chat, smooth scrolling (Lenis), page transitions, fully responsive & reduced-motion aware.
- **Image-free** — every trophy is a procedural SVG, so the site is fast and has no asset dependencies.

## 🧱 Tech Stack

| Purpose | Library |
| --- | --- |
| Framework | React 18 + Vite |
| Styling | Tailwind CSS (custom theme) |
| UI motion | Framer Motion |
| Scroll / hero animation | GSAP + ScrollTrigger |
| Smooth scroll | Lenis |
| Routing | React Router |
| Icons | lucide-react |
| Fonts | Sora · Poppins · Inter (Google Fonts) |

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Production build
npm run build

# 4. Preview the production build locally
npm run preview
```

Requires **Node 18+**.

## 📁 Project Structure

```
src/
├── components/       # Reusable UI (Navbar, Footer, ProductCard, TrophyGraphic, ContactForm, …)
├── sections/         # Home-page sections (Hero, ValueProp, Categories, Process, Testimonials, CTA)
├── pages/            # Routed pages (Home, Products, ThemeAwards, About, Contact, NotFound)
├── data/
│   ├── products.js   # Catalogue — add/edit awards here, layouts read from this file
│   └── contact.js    # Business contact details (phone, email, address, WhatsApp)
├── hooks/            # useLenis (smooth scroll + ScrollTrigger)
├── App.jsx           # Routes + page transitions
├── main.jsx          # Entry
└── index.css         # Tailwind layers + brand utilities
```

## ✏️ Customising

- **Add / edit products:** edit [`src/data/products.js`](src/data/products.js). Each item's `form` (`ring`, `tower`, `star`, `shield`, `wave`, `theme`) and `palette` drive its generated SVG — no layout code to touch.
- **Business details:** edit [`src/data/contact.js`](src/data/contact.js) (phone, email, Instagram, address, WhatsApp number).
- **Brand colours & fonts:** [`tailwind.config.js`](tailwind.config.js) (`gold`, `ink` palettes, animations) and the font `<link>` in [`index.html`](index.html).
- **Contact form:** [`src/components/ContactForm.jsx`](src/components/ContactForm.jsx) is a front-end demo — wire `handleSubmit` to your email service / CRM / form endpoint.

## 🎨 Brand

- **Wordmark:** `PRO` (white) + `MENTO` (gold)
- **Signature gold:** `#F5C518` → `#FFCC29`
- **Ink black:** `#0A0A0A`
- **Tagline:** Custom Trophies & Awards · **Positioning:** Crafting Your Pride

## 📍 Contact

- **Phone:** +91 816 951 1202
- **Email:** sales@promentocustomawards.com
- **Instagram:** [@pro_mento](https://instagram.com/pro_mento)
- **Studio:** Ganesh Chl, Siddhi Vinayak Ngr, Koknipada, S K Marg, Dahisar (E), Opp N.G. Park, Mumbai 400068

## 🌐 Deployment

Static SPA — deploy the `dist/` folder anywhere. SPA route rewrites are pre-configured for **Netlify** (`public/_redirects`) and **Vercel** (`vercel.json`).

---

© Promento Custom Trophy & Awards. All designs are the intellectual property of Promento Custom Trophy & Awards.
# trophy
