# Gagandeep Shivanna — Developer Portfolio

Personal portfolio of **Gagandeep Shivanna** — AI/ML Engineer & Backend Developer, Berlin.

Dark, minimal, projects-first. Built with:

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** for styling
- **Framer Motion** for purposeful, reduced-motion-aware animation
- **lucide-react** for icons
- No backend, no database — all content lives in typed modules under [`data/`](data/)

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Production build:

```bash
npm run build
npm start
```

## Edit content

All copy is data, not markup:

| File | Contains |
|---|---|
| `data/site.ts` | Name, title, contact links, availability line, SEO description, **production URL** |
| `data/projects.ts` | Featured project cards (order = display order) |
| `data/experience.ts` | Work timeline, education, publication |
| `data/skills.ts` | Skill chip groups |

## Assets (`public/`)

- `public/resume.pdf` — **replace the placeholder** with your real resume (keep the filename).
- Open Graph image is generated automatically at build time from `app/opengraph-image.tsx` — no PNG needed. To use a custom image instead, drop `public/og.png` (1200×630) and point `openGraph.images` in `app/layout.tsx` at it.
- Favicon is `app/icon.svg`.

## Deploy to Vercel

1. Push this folder to a GitHub repo:
   ```bash
   git init
   git add -A
   git commit -m "Portfolio"
   git branch -M main
   git remote add origin https://github.com/GagandeepS017/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new), import the repo. Framework preset **Next.js** is auto-detected — no configuration needed. Deploy.
3. After the first deploy, copy your production URL (e.g. `https://portfolio-xyz.vercel.app` or a custom domain) into `url` in `data/site.ts` and push again — this fixes canonical/OG/sitemap URLs.

Alternatively, from the CLI: `npx vercel` (preview) then `npx vercel --prod`.
