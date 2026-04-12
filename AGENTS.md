# AGENTS.md — zenorocha.com

> A guide for AI agents (and human engineers) contributing to this codebase.

---

## Project Overview

This is **Zeno Rocha's personal website** — a Next.js 16 / React 19 application deployed on Vercel. It serves as a blog, portfolio, and personal hub. The site is content-heavy (199+ Markdown articles) and UI-light, with a dark, minimalist aesthetic.

**Live site:** https://zenorocha.com  
**Stack:**

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19, Tailwind CSS v4 |
| Content | Markdown + `gray-matter` + `next-mdx-remote` |
| Animation | Framer Motion, Lottie (`lottie-react`) |
| Command palette | `cmdk` + Radix UI Dialog |
| Email | Resend API via `/api/email` route |
| Code highlighting | `rehype-prism-plus` |
| Linting | ESLint (Next.js + TypeScript presets) + Prettier |
| Deployment | Vercel (`npm run deploy`) |

---

## Repository Structure

```
zenorocha.com/
├── app/                  # Next.js App Router pages and API routes
│   ├── [slug]/           # Dynamic route — renders individual articles
│   ├── about/
│   ├── articles/         # Article listing page
│   ├── contact/
│   ├── investing/
│   ├── podcasts/
│   ├── projects/
│   ├── reminder/
│   ├── talks/
│   ├── uses/
│   ├── api/
│   │   ├── email/        # POST /api/email — sends contact email via Resend
│   │   └── inbound/      # Inbound email webhook handler
│   ├── globals.css       # Global styles (Tailwind base + custom tokens)
│   ├── layout.js         # Root layout (fonts, GA, CommandBar provider)
│   ├── page.js           # Home page
│   └── template.js       # Page transition wrapper (Framer Motion)
│
├── articles/             # Markdown content for every blog post (~199 files)
│
├── components/           # Reusable React components
│   ├── CommandBar.js     # ⌘K global command palette (cmdk + Radix Dialog)
│   ├── Navbar.js
│   ├── Footer.js
│   ├── Post.js           # Post layout primitives (PostMain, PostContent, etc.)
│   ├── ListItem.js       # Article list row
│   ├── FeaturedArticle.js
│   ├── Toast.js          # Radix UI toast notification
│   ├── AnimatedIcon.js   # Lottie icon wrapper
│   └── shared/           # Lower-level shared atoms
│
├── data/                 # Static JS data files (no CMS)
│   ├── about.js
│   ├── investments.js
│   ├── podcasts.js
│   ├── projects.js
│   ├── talks.js          # Largest data file (~49 KB, 450+ talks)
│   └── uses.js
│
├── layouts/
│   ├── Base.js           # Generic section layout (title, tagline, color props)
│   └── Blogpost.js       # Blog post layout (hero image or plain header)
│
├── lib/
│   ├── blog.js           # getPostSlugs / getPostBySlug / getAllPosts (Node FS)
│   ├── json-ld.js        # Structured data generators (Person, Article, etc.)
│   ├── gtag.js           # Google Analytics tracking ID export
│   └── strip-html.js     # Utility to strip HTML tags from strings
│
└── public/
    └── static/
        ├── css/          # prism.css (syntax highlight theme)
        ├── fonts/        # Self-hosted: Biotif, Neuzeit Grotesk, Fira Code
        ├── icons/        # Lottie JSON animations (one per CommandBar action)
        └── images/       # Page OG images, post images, etc.
```

---

## Development Commands

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Lint & auto-fix (ESLint + Prettier)
npm run lint

# Build for production (only when explicitly needed)
npm run build

# Deploy to Vercel production
npm run deploy
```

> **Do not run `npm run build` or `npm run deploy` unless asked.** Use `npm run dev` for all local verification.

---

## Content: Writing & Editing Articles

Articles live in `articles/` as Markdown files. Use `gray-matter` frontmatter.

### Frontmatter schema

```markdown
---
title: 'Your Post Title'           # Required. Displayed as <h1> on the post page.
description: 'Short summary.'      # Optional. Used for meta tags and article listings.
image: /static/img/posts/hero.jpg  # Optional. Enables full-screen hero layout in Blogpost.js.
slug: your-post-slug               # Optional. Defaults to the filename (without .md).
date: '2024-01-01'                 # Required. ISO 8601 date string. Used for sort order.
lang: pt-BR                        # Optional. Marks bilingual content (most posts are English).
skip: true                         # Optional. Hides post from the article listing page.
---
```

### Adding a new article

1. Create `articles/my-new-post.md` with the frontmatter above.
2. The filename (without `.md`) becomes the URL slug: `/my-new-post/`.
3. To excerpt content on listing cards, add `<!-- more -->` anywhere in the body.
4. Images go in `public/static/img/posts/`; reference them as `/static/img/posts/filename.jpg`.
5. No build step needed — `lib/blog.js` reads the filesystem at request time.

### Updating static data pages

Non-article pages (Projects, Talks, Podcasts, Investing, Uses) are driven by plain JS arrays in `data/`. Edit the relevant file there — no Markdown involved.

---

## Component Conventions

- All components are **plain `.js` files** (no `.tsx`). TypeScript types are available via `@types/react` but JSDoc is preferred over TS syntax.
- Mark client components explicitly: `'use client';` at the top of the file.
- Server components (the majority of page files) have no directive.
- **Tailwind v4 utility classes** are used inline. Follow the existing pattern — no arbitrary `style={}` props unless strictly required (e.g., dynamic background images).
- If adding a new icon to the CommandBar, provide a matching Lottie JSON file in `public/static/icons/` and register it in `CommandBar.js`.

---

## CommandBar (`components/CommandBar.js`)

The `⌘K` command palette is the primary navigation mechanism. It uses:
- **`cmdk`** for the fuzzy-search UI
- **Radix UI Dialog** for the accessible modal overlay
- **`react-hotkeys-hook`** for keyboard shortcuts
- **Lottie** (`lottie-react`) for animated icons

### Adding a new command

1. Import the Lottie JSON: `import myIcon from '../public/static/icons/my-icon.json';`
2. Add the action object to the correct section in `actionsBySection`.
3. Define a unique shortcut in `shortcutCombos`.
4. Register the hotkey with `useHotkeys(...)`.
5. Add a corresponding route in `app/` if it's a new page.

---

## API Routes

| Route | Method | Description |
|---|---|---|
| `/api/email` | `POST` | Sends a contact form email via **Resend**. Reads `RESEND_API_KEY` and `RESEND_DESTINATION_EMAIL` from env. |
| `/api/inbound` | — | Handles inbound email webhooks. |

### Environment variables required

```
RESEND_API_KEY=re_...
RESEND_DESTINATION_EMAIL=your@email.com
```

Add these to `.env.local` for local development (not committed to the repo).

---

## Fonts

Three self-hosted font families are loaded via `next/font/local` in `app/layout.js`:

| CSS Variable | Font | Weights |
|---|---|---|
| `--font-sans` | Biotif | 400, 400i, 500, 700 |
| `--font-display` | Neuzeit Grotesk | 700 |
| `--font-mono` | Fira Code | 400 |

Do not add Google Fonts or third-party font CDN links — use `public/static/fonts/` and register through `next/font/local`.

---

## Linting & Code Style

The project uses **ESLint + Prettier**. Run `npm run lint` to fix all issues automatically.

Key rules enforced:
- **Import sorting**: `eslint-plugin-simple-import-sort` — imports must be alphabetically sorted by module path.
- **Curly braces**: always required, even for single-statement `if` bodies.
- **Prettier**: `singleQuote: true`, `trailingComma: 'none'`, `tabWidth: 2`.
- Prettier formats Tailwind class order via `prettier-plugin-tailwindcss`.

> Always run `npm run lint` before finishing any code change.

---

## SEO & Metadata

Every page exports a `metadata` object (Next.js App Router convention):

```js
export const metadata = {
  title: 'Page Title',
  description: 'Page description',
  openGraph: {
    title: 'Page Title // Zeno Rocha',
    url: 'https://zenorocha.com/page',
    images: ['/static/images/page-bw.jpg']
  }
};
```

- The root layout sets `metadataBase: new URL('https://zenorocha.com')`.
- The title template is `'%s // Zeno Rocha'`.
- Structured data (JSON-LD) is generated by `lib/json-ld.js` and injected via `<script type="application/ld+json">` in Server Components.

---

## Common Gotchas

| Situation | Guidance |
|---|---|
| `getAllPosts` returns empty | Check that files in `articles/` have `.md` extension and valid frontmatter. |
| New page not appearing in nav | Update `CommandBar.js` (actions + hotkeys) and add to `Navbar.js` links. |
| Image not loading | Images must live under `public/`. Reference them from root: `/static/images/...`. `next.config.js` has `images.unoptimized: true`, so no `<Image>` optimisation is applied. |
| Hydration mismatch warning | `<body suppressHydrationWarning>` is intentional — browser extensions can mutate the DOM. |
| Lottie icons not animating | Ensure the icon JSON file is imported and the `iconId` is registered in `iconRefsMap` inside `CommandBar.js`. |

---

## Deployment

The site deploys automatically on Vercel when changes are pushed to `main`. To deploy manually:

```bash
npm run deploy  # Runs: vercel --prod
```

No CI/CD config files exist in this repo — Vercel handles build and deployment.

---

## Out of Scope for AI Agents

- **Do not modify** `public/static/fonts/` — font files are binary assets.
- **Do not delete** any existing `articles/*.md` files without explicit user instruction.
- **Do not add** a database or CMS integration — the site intentionally uses the filesystem as its content store.
- **Do not change** the Tailwind v4 configuration approach unless the user explicitly requests migrating CSS strategy.
