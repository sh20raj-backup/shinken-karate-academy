# 🥋 Shinken Karate Academy — Modern Martial Arts Web Platform

An authentic, ultra-fast, and responsive digital web application for **Shinken Karate Academy**, an authentic Japanese martial arts dojo in Bengaluru since 2010.

Cloned, restructured, and decoupled from Framer into a clean, modern, modular React 18 / Vite / TypeScript / Tailwind CSS architecture.

---

## ⚡ Key Highlights & Features

- **Blazing Fast Performance**: Zero-runtime Framer bloat; clean pure React 18 SPA with instantaneous client-side routing.
- **Rich Dojo Aesthetic**: Traditional Japanese color harmony (deep crimson red `#e33038`, warm gold/amber `#e7c355`, dark obsidian slate `#0d0b07`).
- **Complete Route Architecture**:
  - `/` — Hero banner, live dojo metrics, martial arts styles bento, weekly schedule table, verified testimonials, and FAQ accordion.
  - `/programs` — 4 youth and adult training camps, skills matrices, and interactive monthly/yearly pricing plan toggles (-17% discount).
  - `/our-story` — 15-year dojo heritage, Tokyo/Okinawa lineage, 2010–2026 historical milestones timeline, and master sensei profiles.
  - `/blog` — Filterable dojo journal across 5 categories (Training, Nutrition, Mindset, Competition, History) with full rich article reading views.
  - `/contact` — Interactive trial registration form, weekly hours breakdown, direct phone/email connections, and Bengaluru map directions.
- **High-Resolution Localized Imagery**: All 38 original photography and brand assets are localized in `/public/images`.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | Vite 5 + React 18 + TypeScript |
| **Routing** | React Router 6 (SPA with HTML5 history & fallback) |
| **Styling** | Tailwind CSS 3.4 + Custom Dojo Design System |
| **Icons** | Lucide React |
| **Deployment** | Surge.sh / Cloudflare Pages / Netlify |

---

## 🚀 Development & Build

```bash
# Install dependencies
bun install

# Run local development server
bun run dev

# Compile production bundle
bun run build

# Preview distribution build
bun run preview
```

---

## 🌐 Live Deployment

Published live to:
- **Surge.sh**: [https://shinken-karate.surge.sh](https://shinken-karate.surge.sh)
- **ScriptlyStore Catalog**: [https://scriptly.store](https://scriptly.store)
