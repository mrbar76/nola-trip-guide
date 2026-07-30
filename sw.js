/* NOLA Guide service worker.
   Strategy:
   - App shell (HTML) + data.js: NETWORK-FIRST, cache as fallback. Content updates
     land automatically on the next load; the app still opens offline.
   - Icons + CDN libs: cache-first (stable, versioned URLs).
   - Map tiles: network-only with cache fallback; never bulk-cached.
   Bump VERSION on release to purge older caches. */
const VERSION = 'nola-v3';

// Precached individually (NOT addAll — that's atomic and one bad URL kills the whole batch).
const PRECACHE = [
  './',
  './index.html',
  './data.js',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png',
  './favicon-32.png',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
];

const isTile = (url) => /tile\.openstreetmap\.org|basemaps|tiles/.test(url.host + url.pathname);

// Things that must stay fresh: the document itself and the trip data.
function isFreshFirst(request, url) {
  if (request.mode === 'navigate') return true;
  if (url.origin !== location.origin) return false;
  return /(^|\/)(index\.html|data\.js)$/.test(url.pathname) || url.pathname.endsWith('/');
}

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(VERSION).then((c) =>
      // allSettled so a single unreachable URL (e.g. offline CDN) can't void the precache
      Promise.allSettled(PRECACHE.map((u) => c.add(new Request(u, { cache: 'reload' }))))
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Let the page trigger an immediate takeover or a cache purge.
self.addEventListener('message', (e) => {
  const msg = e.data;
  if (msg === 'SKIP_WAITING') self.skipWaiting();
  if (msg === 'PURGE') {
    e.waitUntil(caches.keys().then((keys) => Promise.all(keys.map((k) => caches.delete(k)))));
  }
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);

  // Map tiles: always try the network, fall back to whatever we happen to have.
  if (isTile(url)) {
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
    return;
  }

  // Shell + data: network-first so updates are picked up without a manual purge.
  if (isFreshFirst(e.request, url)) {
    e.respondWith(
      fetch(e.request)
        .then((res) => {
          if (res && res.ok) {
            const copy = res.clone();
            caches.open(VERSION).then((c) => c.put(e.request, copy)).catch(() => {});
          }
          return res;
        })
        .catch(() => caches.match(e.request).then((hit) => hit || caches.match('./index.html')))
    );
    return;
  }

  // Everything else (icons, CDN libs): cache-first.
  e.respondWith(
    caches.match(e.request).then((hit) => {
      if (hit) return hit;
      return fetch(e.request).then((res) => {
        if (res && res.ok && (url.origin === location.origin || /unpkg\.com/.test(url.host))) {
          const copy = res.clone();
          caches.open(VERSION).then((c) => c.put(e.request, copy)).catch(() => {});
        }
        return res;
      }).catch(() => caches.match('./index.html'));
    })
  );
});
