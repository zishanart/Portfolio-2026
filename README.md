# Zishan Khan — Portfolio 2026 🚀

> **High-Performance Scrollytelling Creative Portfolio for Graphic Designer & Social Media Manager Zishan Khan.**  
> Live Website: [https://zishankhan.vercel.app/](https://zishankhan.vercel.app/)

---

## 🌟 Overview

A modern, high-performance personal portfolio built for **Zishan Khan**, a professional graphic designer and social media strategist based in Bhopal, Madhya Pradesh, India. 

The website blends cinematic visual storytelling with technical precision: a 75-frame canvas-driven scroll animation, curated portfolio categories, optimized responsive imagery, and comprehensive SEO/AEO metadata tailored for search engines and AI discovery.

---

## ⚡ Key Highlights & Architecture

### 1. Buttery-Smooth Canvas Scrollytelling
- **Off-Main-Thread Decoding**: Frames preloaded asynchronously using `createImageBitmap` with automatic fallback to standard `Image()`.
- **Zero Buffer Reallocation**: Canvas resolution is bound exclusively on mount and debounced resize (300ms), eliminating jank and visual stutter during scrolling.
- **RAF-Batched Renders**: Scroll progress updates are batched with the browser's display refresh cycle using `requestAnimationFrame`.
- **GPU-Accelerated**: Styled with hardware acceleration hints (`will-change: transform`).

### 2. Synchronized Hero Architecture
- Shared scroll progress boundary (`HeroSection`) coordinating both the canvas frame sequence and floating typography overlays.
- Seamless, proportional scroll transitions between the hero storytelling container and the portfolio showcase grid.

### 3. Curated Work Galleries
- **Social Media Creatives**: High-impact brand storytelling, carousel slides, and viral campaigns (`/social-media`).
- **Thumbnails**: High-converting, click-optimized YouTube and media thumbnails (`/thumbnails`).
- **Brand Identities & Logos**: Distinctive vector-grade logos and brand marks (`/logos`).
- **Typography & Lettering**: Expressive custom lettering, font pairings, and editorial layouts (`/typography`).
- **Complete Archive**: Comprehensive showcase of past works, posters, and design experiments (`/archive`).

### 4. Next-Gen Image Optimization
- All galleries migrated to `next/image` with modern formats (`AVIF`, `WebP`).
- Responsive `sizes` attributes for dynamic viewport switching.
- Clean, human-readable semantic alt descriptions generated from source assets.
- Lazy-loaded assets with smooth CSS hover scales.

### 5. Search Engine (SEO) & Answer Engine (AEO) Optimization
- Complete JSON-LD `Person` schema markup conforming to Schema.org standards.
- Hidden semantic descriptors optimized for AI LLMs, retrieval engines, and local search queries.
- OpenGraph and Twitter summary cards with dynamic page title templating (`%s | Zishan Khan – Graphic Designer`).
- Valid static `sitemap.xml` and `robots.txt` automatically serving crawler rules.

### 6. Accessibility & Inclusivity (a11y)
- Accessible Skip-to-Content navigation link (`#main-content`).
- WCAG compliant `:focus-visible` styling with custom focus rings.
- Reduced-motion accessibility fallback (`prefers-reduced-motion`) for smooth animations.
- Screen-reader friendly labels (`aria-label`, `aria-hidden`) across all interactive cards and canvas layers.

### 7. Security & Cache Hardening
- HTTP Security Headers: Content-Security-Policy (CSP), `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, and strict `Permissions-Policy`.
- 1-Year immutable caching for static assets, sequence frames, and portfolio images.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, React 18, Server Components)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & PostCSS
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Iconography**: [Lucide React](https://lucide.dev/) & Handcrafted SVG icons
- **Type Safety**: [TypeScript 5](https://www.typescriptlang.org/)
- **Hosting**: [Vercel](https://vercel.com)

---

## 📁 Project Structure

```text
├── public/
│   ├── logos/              # Brand identity and logo showcase assets
│   ├── sequence/           # 75-frame WebP canvas scrollytelling sequence
│   ├── social-media/       # Social media design works
│   ├── thumbnails/         # High-converting thumbnail designs
│   ├── typography/         # Custom typography and lettering projects
│   ├── work/               # General portfolio archive images
│   ├── robots.txt          # Search engine crawler directives
│   └── sitemap.xml         # XML sitemap for search indexation
├── src/
│   ├── app/
│   │   ├── archive/        # Full archive masonry gallery
│   │   ├── logos/          # Logos & branding grid
│   │   ├── social-media/   # Social media portfolio gallery
│   │   ├── thumbnails/     # YouTube & media thumbnails gallery
│   │   ├── typography/     # Typography & lettering gallery
│   │   ├── globals.css     # Global styles, dark scrollbars, animations
│   │   ├── layout.tsx      # Root layout, fonts, JSON-LD, SEO metadata
│   │   └── page.tsx        # Homepage composing hero, projects & contact
│   ├── components/
│   │   ├── Contact.tsx     # Direct contact cards, social icons & copyright
│   │   ├── HeroSection.tsx # Unified container syncing canvas & overlay scroll
│   │   ├── Overlay.tsx     # Floating text reveals and philosophy cards
│   │   ├── Projects.tsx    # Selected works section with accessible links
│   │   └── ScrollyCanvas.tsx # 60fps canvas animation engine
│   └── lib/
│       └── utils.ts        # Class merging utilities (clsx + tailwind-merge)
├── next.config.mjs         # Image optimization, caching & security headers
├── tailwind.config.ts      # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm or yarn or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/zishanart/Portfolio-2026.git

# Navigate into the project directory
cd Portfolio-2026

# Install dependencies
npm install
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site with hot-reload enabled.

### Building for Production

```bash
npm run build
```

### Starting the Production Server

```bash
npm run start
```

---

## 📬 Contact & Inquiries

- **Designer**: Zishan Khan
- **Phone**: [+91 91319 43006](tel:+919131943006)
- **Personal Email**: [mdkhanzishan03@gmail.com](mailto:mdkhanzishan03@gmail.com)
- **Business Inquiries**: [orvixa.media@gmail.com](mailto:orvixa.media@gmail.com)
- **Portfolio**: [https://zishankhan.vercel.app/](https://zishankhan.vercel.app/)

---

© 2026 Zishan Khan. All rights reserved.
