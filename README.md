# Alfredo Park — Senior Software Engineer Portfolio

Welcome to my portfolio! This repository serves two purposes: it showcases my professional background and projects, and it stands as a direct demonstration of **how I write, structure, and think about my code**. 

Built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS v4**, this codebase focuses on clean architecture, the Single Responsibility Principle (SRP), and premium visual design engineering.

---

## 🛠️ Tech Stack & Technical Decisions

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
  - *Why*: Direct path to static optimization and search indexability (SEO), leveraging server rendering by default to keep the client bundle size minimal.
- **Language**: [TypeScript](https://www.typescript.org/)
  - *Why*: Strong compile-time safety, explicit type interfaces, and auto-completion. I avoid implicit `any` types and maintain centralized data models.
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
  - *Why*: Modern utility styling. Version 4 allows me to define custom theme variables (`@theme inline`) directly inside `globals.css`, keeping configuration close to the CSS imports and eliminating separate configuration files.
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
  - *Why*: Responsive physics-based animations, scroll-linked staggering, and clean entry/exit transition logic.
- **Package Manager**: [pnpm](https://pnpm.io/)
  - *Why*: Fast dependency resolution, disk-space caching, and strict lockfile constraints to maintain consistent builds.

---

## 📁 Repository Architecture & Design Philosophy

I design my codebases around the **Separation of Concerns (SoC)** and **Single Responsibility Principle (SRP)**. I believe components should be dumb render layers, state should be decoupled, and data models should have a single source of truth.

```
├── app/                  # Next.js App Router entrypoints, layouts, and global CSS theme
├── components/           # Decoupled UI modules (Render-only visual components)
├── constants/            # Static data structures (Isolating content and metadata from presentation)
├── context/              # Context providers (Client-side state management)
├── messages/             # Static localization dictionaries (English & Spanish)
├── public/               # Static assets (images, company logos, resume PDFs)
├── types/                # Centralized typescript model declarations
├── utils/                # General utility helper functions (dynamic URL resolution)
```

### 1. Separation of Content and Presentation (`constants/`)
To keep my UI components clean and readable, I never hardcode text, logos, or URLs. All static data (such as projects metadata, skills parameters, and falling background snippet text) is isolated in the `/constants` directory. When I need to update content, I edit a configuration array, leaving the component markup untouched.

### 2. Single Source of Truth for Types (`types/`)
All key TypeScript interfaces (like `Skill` and `Project`) are centralized inside `types/index.ts`. Centralizing these definitions prevents circular import chains, maintains a strict model contracts structure, and makes types globally accessible via Next.js path mapping alias (`@/types`).

### 3. Statically Optimized Internationalization (`messages/`)
For multi-language support (English and Spanish), I statically import dictionary JSON files from `/messages` directly into my client context. This avoids the latency of runtime database fetches or translation APIs, allowing Next.js to fully pre-render static HTML pages. This guarantees a near-instant **Largest Contentful Paint (LCP)**.

### 4. High-Performance Search Engine Optimization (SEO) & Structured Data
To maximize discoverability without adding client-side weight, I implemented a robust, search-engine-first indexing framework:
- **Centralized Metadata Configuration**: To keep the root layout (`app/layout.tsx`) completely decoupled from page-specific content, SEO properties—such as the site description, authors, social accounts, and dynamic keywords (which automatically compile from the central skill list in `constants/skills.ts`)—are centralized in `constants/metadata.ts`.
- **Dynamic Site Base Resolution**: Instead of hardcoding environment-specific URLs, a base URL resolver (`utils/url.ts`) dynamically resolves paths across local development (`localhost`), Vercel preview environments (`process.env.VERCEL_URL`), and custom production domains (`process.env.NEXT_PUBLIC_SITE_URL`).
- **Dynamic Site Configurations (`sitemap.ts` and `robots.ts`)**: Instead of relying on hardcoded XML files, I use Next.js file-based metadata hooks to dynamically generate sitemaps (complete with alternate language links) and crawler rule patterns on compilation.
- **Rich Snippet Schema Markup (JSON-LD)**: I inject structured JSON-LD data inside `app/page.tsx` defining `ProfilePage` and `Person` entities. It draws directly from the contact information and metadata constants, giving crawlers a machine-readable representation of my skills, profiles, and job titles.
- **Bilingual Lang Attribute Syncing**: Since translations are client-managed to support static page builds, I handle language shifts dynamically inside the `LanguageProvider` with a React `useEffect` hook that synchronizes the DOM `<html>` element's `lang` attribute dynamically to keep screen readers and crawlers aligned.

### 5. Cohesive UX & Design Engineering (`components/`)
I approach styling with the mindset of a design engineer. To prevent design drift across sections:
- **Visual Rhythm**: The page backgrounds strictly alternate between `bg-background` and `bg-accents-1` to create natural visual sections without heavy dividers.
- **Typography & Details**: I standardized all section titles to use a minimalist left-aligned uppercase subtitle, followed by a unified divider line (`h-[2px] w-10 bg-foreground/30`).
- **Tactile Transitions**: Hover transitions on cards, badges, and icon buttons are consolidated to use a custom Apple-style transition curve (`ease-[cubic-bezier(0.16,1,0.3,1)]`) with synchronized durations to ensure page micro-interactions feel organic and responsive.

---

## 🚀 Getting Started

### Installation

```bash
pnpm install
```

### Running the Development Server

```bash
pnpm run dev
```

### Production Build

```bash
pnpm run build
```
