# nola-trip-guide

A mobile trip companion for New Orleans — maps, eat-safe restaurants, neighborhood history, and day-by-day plans. Built as an installable PWA for a July 31 – August 3, 2026 trip.

## What's inside

- **Home** — countdown, next-up event, quick links, and the day-by-day plan.
- **Map** — every restaurant and sight pinned (Leaflet + OpenStreetMap), filterable by neighborhood or eat-only.
- **Eat** — curated restaurants with orderable menu items, ratings, tags, and directions.
- **Neighborhoods** — history, secrets, and self-guided walks for 5 districts.
- **Plan** — bookings checklist, fixed times, still-to-book, deals, and budget.
- **Satchmo SummerFest** — best set times.
- Favorites and checklist state persist locally (`localStorage`). Works offline once loaded (service worker app-shell cache).

## Tech

Plain HTML/CSS/JS — **no build step, no dependencies to install**. A single-file SPA (`index.html`) with a hash router; all content lives in `data.js` (`window.DATA`). Leaflet and map tiles load from CDN at runtime.

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000/
```

Serve from the repo root (a plain `file://` open won't register the service worker).

## Deploy

Static site, no build. See [`VERCEL_SETUP.md`](./VERCEL_SETUP.md) — connect the repo to Vercel with framework preset "Other" and every push to `main` auto-deploys.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | App shell, styles, router, views |
| `data.js` | All trip content (`window.DATA`) |
| `manifest.webmanifest` | PWA manifest |
| `sw.js` | Service worker (offline cache) |
| `icon-*.png`, `apple-touch-icon.png`, `favicon-32.png` | Icons |
| `nola_guide.html` | Legacy redirect to `./` |
