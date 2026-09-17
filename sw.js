
const CACHE = "goiscope-v5";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css?v=2.1",
  "./app.js?v=2.1",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const req = event.request;

  // Always prefer the latest HTML/navigation from the network.
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req)
        .then(res => {
          const copy = res.clone();
          caches.open(CACHE).then(cache => cache.put("./index.html", copy));
          return res;
        })
        .catch(() => caches.open(CACHE).then(cache => cache.match("./index.html")))
    );
    return;
  }

  // Current cache only; if missing, fetch and update it.
  event.respondWith(
    caches.open(CACHE).then(async cache => {
      const cached = await cache.match(req);
      if (cached) return cached;
      const fresh = await fetch(req);
      if (req.method === "GET" && fresh.ok) cache.put(req, fresh.clone());
      return fresh;
    })
  );
});
