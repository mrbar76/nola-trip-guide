/* NOLA Guide service worker.
   Strategy:
   - App shell (HTML) + data.js: STALE-WHILE-REVALIDATE. The cached copy is served
     immediately (instant open, works offline) while a fresh copy is fetched in the
     background. If the fresh copy differs, clients are told so the app can offer a
     reload. Network-first was tried here and made every launch wait on the network.
   - Icons + CDN libs: cache-first (stable, versioned URLs).
   - Map tiles: network-only with cache fallback; never bulk-cached.
   Bump VERSION on release to purge older caches. */
const VERSION = 'nola-v4';

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
  // Leaflet is self-hosted, so it precaches reliably and works fully offline.
  './vendor/leaflet.css',
  './vendor/leaflet.js',
  './vendor/images/marker-icon.png',
  './vendor/images/layers.png'
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

function versionTag(res) {
  if (!res) return null;
  return res.headers.get('etag') || res.headers.get('last-modified') || res.headers.get('content-length');
}

async function notifyContentUpdated() {
  const clients = await self.clients.matchAll({ type: 'window' });
  clients.forEach((c) => c.postMessage('CONTENT_UPDATED'));
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(VERSION);
  const hit = await cache.match(request);

  const revalidate = fetch(request).then(async (res) => {
    if (res && res.ok) {
      const changed = hit && versionTag(hit) && versionTag(res) && versionTag(hit) !== versionTag(res);
      await cache.put(request, res.clone()).catch(() => {});
      if (changed) notifyContentUpdated();
    }
    return res;
  });

  if (hit) {
    revalidate.catch(() => {});   // background refresh; failure is fine, we already answered
    return hit;
  }
  try {
    return await revalidate;
  } catch (e) {
    return (await cache.match('./index.html')) || Response.error();
  }
}

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);

  // Map tiles: always try the network, fall back to whatever we happen to have.
  if (isTile(url)) {
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
    return;
  }

  // Shell + data: stale-while-revalidate — instant from cache, refreshed behind the scenes.
  if (isFreshFirst(e.request, url)) {
    e.respondWith(staleWhileRevalidate(e.request));
    return;
  }

  // Everything else (icons, CDN libs): cache-first.
  e.respondWith(
    caches.match(e.request).then((hit) => {
      if (hit) return hit;
      return fetch(e.request).then((res) => {
        if (res && res.ok && url.origin === location.origin) {
          const copy = res.clone();
          caches.open(VERSION).then((c) => c.put(e.request, copy)).catch(() => {});
        }
        return res;
      }).catch(() => caches.match('./index.html'));
    })
  );
});
