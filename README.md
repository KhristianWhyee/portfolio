# Khristian Whyee — Portfolio

Digital portfolio of Khristian Whyee, an aspiring electrical engineer at Temple
University. Hardware, software, and the ideas in between.

Live site: deployed on [Vercel](https://vercel.com).

## Design

A "Signal Trace" theme grounded in the electrical-engineering world: a
PCB-substrate dark palette, copper + oscilloscope-phosphor accents, and a
reference-designator system (`U1`, `U2`, …) that labels each project the way
components are labeled on a board. The featured SpO₂ project shows the **actual
board**, rendered from the KiCad gerbers with a custom black-and-gold finish.

## Stack

- [Next.js 15](https://nextjs.org/) (App Router, static export)
- React 19 + TypeScript
- Tailwind CSS
- `next/font` — Space Grotesk (display), Inter (body), JetBrains Mono (data)

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Structure

```
app/            layout, page, global styles, favicon
components/      Nav, Hero trace, Projects (filterable), Reveal
lib/projects.ts single source of truth for the project list
public/board/   SpO2 board render (SVG) from the gerbers
public/gerbers/ downloadable manufacturing gerbers
.claude/skills/ frontend-design + ui-ux-pro-max design skills
```

## Deploy

Connected to Vercel via GitHub. Every push to the default branch triggers a new
deployment. To add a custom domain, add it under the Vercel project's Domains
settings.

---

Built by Khristian Whyee.
