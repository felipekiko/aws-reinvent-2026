// Cache para uso offline. Ao atualizar a agenda, troque a versão (e o ?v= do data.js no index.html).
const CACHE = "ri26-v14";
const FILES = ["./", "index.html", "data.js?v=14", "manifest.webmanifest", "icon.svg", "qr-linkedin.svg", "qr-site.svg"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES.map(f => new Request(f, { cache: "reload" })))));
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});

// Rede primeiro, ignorando o cache HTTP do navegador (GitHub Pages usa max-age=600); cache se estiver offline.
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(
    fetch(e.request, { cache: "no-cache" })
      .then(r => { if (r.ok) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); } return r; })
      .catch(() => caches.match(e.request).then(r => r || caches.match("index.html")))
  );
});
