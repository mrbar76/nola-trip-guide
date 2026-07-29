# nola-trip-guide — deploy

Static site (plain HTML/JS/PWA). No build step.

## Put these files in the repo root
index.html, data.js, manifest.webmanifest, sw.js,
icon-192.png, icon-512.png, apple-touch-icon.png, favicon-32.png, nola_guide.html

## Connect to Vercel (one time)
1. vercel.com → your project `nola-trip-guide` → Settings → Git →
   "Connect Git Repository" → pick `mrbar76/nola-trip-guide`.
2. Framework preset: "Other". Build command: none. Output dir: leave blank (root).
3. Deploy. Every future `git push` to main auto-deploys to nola-trip-guide.vercel.app.
