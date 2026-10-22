# Osama Othman — Portfolio

Personal site of Osama Othman, Full-Stack Software Engineer in Riyadh (Full-Stack Developer at the change cue).

**Live:** https://os4ma.me

## Stack

- React 18 + Vite, prerendered at build time for SEO
- Framer Motion, Lucide icons
- Bilingual: English and Arabic (RTL)
- Deployed on Vercel

## Run locally

```bash
npm install
npm run dev
```

```bash
npm run build     # client build + SSR prerender into dist/index.html
npm run preview   # serve the production build
```

## Structure

```
src/
  components/   page sections and UI primitives
  content/      all copy, in en.js and ar.js
  context/      language state
  styles/       global.css (design tokens + layout)
scripts/
  prerender.mjs injects the server-rendered page into dist/index.html
public/         CVs, icons, robots.txt, sitemap.xml
```

To update experience, projects or stats, edit `src/content/en.js` and `src/content/ar.js`.

## Author

[Osama Othman](https://github.com/Osamaaaothman) · [LinkedIn](https://www.linkedin.com/in/osamaaothman/)
