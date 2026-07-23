// Service Worker minimal pour valider l'installation PWA
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  self.clients.claim();
});

// Laisse passer toutes les requêtes réseau normalement pour éviter tout blocage de caméra
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});