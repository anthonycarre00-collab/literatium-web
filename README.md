# Design Tests — Literatium Hotel

Boutique literature-themed hotel website design preview for **Literatium** in Mompox, Colombia (UNESCO World Heritage town that inspired García Márquez's Macondo).

## What's in this repo

```
Design-Tests/
├── index.html          ← Self-contained preview (all images embedded as base64 data URIs — 14MB, works ANYWHERE)
├── index-external.html ← Same design but references ./assets/ folder (smaller, for Vercel/local server)
├── assets/             ← Full image library from the original hotel repo (245 files, 176MB)
├── vercel.json         ← Vercel deployment config
└── README.md
```

## Two ways to view

### 1. `index.html` — bulletproof, self-contained (RECOMMENDED for preview)
- Every image is embedded as a base64 data URI
- No external file dependencies
- Works in: preview panels, iframes, file://, anywhere HTML renders
- Size: 14MB (loads once, then cached)

### 2. `index-external.html` — for Vercel/local server
- References `./assets/filename.webp` etc.
- Much smaller HTML (~110KB)
- Requires the `assets/` folder to be served alongside it
- Works on Vercel, Netlify, or any static host

## Design concept — "El Códice del Río" (The Codex of the River)

A book that opens like a cover, whose spine is the Magdalena River, and whose pages drift downstream. Eight folios (chapters):

1. **Frontispiece** — Hero with moody hotel facade at night, floating polaroids, candle-flicker
2. **La Casa** — The house story, spaces mosaic, Martica (the manager)
3. **Café** — Huila coffee from the family farm, breakfast plates
4. **Habitaciones** — 5 themed rooms as fanned book cards
5. **Mompox** — The WOW chapter: drone parallax, Gabo quote materializing from mist, self-drawing hand-drawn river map with traveling boat, lily-pad stat cards, festival calendar
6. **Sabores y Senderos** — Momposino food + 6 excursions
7. **Cartas** — Wall of guest stories
8. **Colofón** — Booking + wax seal stamp

## Features

- **Book cover opens on click** (3.2s 3D rotation with vellum back face) — auto-opens after 4.5s if no interaction
- **River spine** on left edge — glowing trail + brass pin follows scroll, click for ripples
- **Bookmark ribbon** on right edge — short ribbon descends with scroll
- **Page-corner-curls** on every folio — click to turn to next chapter
- **Candle-flicker** bloom behind hero title
- **Materializing text** — Gabo quotes appear word-by-word from a blur mist
- **Self-drawing river map** — path draws itself, pins illuminate, boat travels on scroll
- **Yellow butterfly** cursor-follower in Mompox + Cartas sections (Gabo reference)
- **Wax seal stamp** at the colofón
- **Marginalia** — handwritten margin notes with pencil badges
- **Drifting polaroid gallery** — two rows, opposite directions, pause on hover
- **Illuminated drop caps** in burgundy on gold-leaf

## Vercel deployment

1. Go to [vercel.com](https://vercel.com) → New Project
2. Import this repo: `anthonycarre00-collab/Design-Tests`
3. Framework Preset: **Other** (static site)
4. Root Directory: `./` (default)
5. Build Command: leave empty (no build step)
6. Output Directory: `./` (default)
7. Deploy

Vercel will serve `index.html` by default. The 14MB file will load once and be cached by Vercel's CDN.

## Original repo

The original hotel website (Next.js 16 + TypeScript + Tailwind 4) is at:
`https://github.com/anthonycarre00-collab/literatium-hotel`

This `Design-Tests` repo is a design experiment — a self-contained HTML preview of a proposed redesign. All real content (hotel info, images, stories, locations, amenities, blogs, guides, maps, festivals, dictionary) is retained from the original.

## Contact

**Literatium** · Calle 21 #2-47, Santa Cruz de Mompox, Bolívar, Colombia
WhatsApp: +57 315 538 2112 · Instagram: [@literatium](https://www.instagram.com/literatium/)
