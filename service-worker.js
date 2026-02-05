const CACHE_NAME = "vibeslovakia-v1";

const ASSETS_TO_CACHE = [
  "./",
  "./index.html",
  "./style.css",

  "./data/castles.js",
  "./js/map.js",

  "./assets/audio/placeholder.mp3",

  "./assets/images/bratislava_ai.webp",
  "./assets/images/spis_ai.webp",
  "./assets/images/orava_ai.webp",
  "./assets/images/trencin_ai.webp",
  "./assets/images/bojnice_ai.webp",

  "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css",
  "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS_TO_CACHE))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

