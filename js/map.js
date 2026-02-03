// js/map.js

// 1. Ochrana proti chybám – overíme, že Leaflet existuje
if (typeof L === "undefined") {
  console.error("Leaflet library is not loaded.");
}

// 2. Inicializácia mapy – stred Slovenska
const map = L.map("map", {
  center: [48.669, 19.699],
  zoom: 8,
  minZoom: 7,
  maxZoom: 18,
});

// 3. Základná mapová vrstva (OpenStreetMap)
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

// 4. Overenie dát
if (!Array.isArray(castles)) {
  console.error("Castles data not found or invalid.");
}

// 5. Vlastná ikona markeru
const castleIcon = L.icon({
  iconUrl: "assets/icons/castle-marker.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

// 6. Vykreslenie hradov na mapu
castles.forEach((castle) => {
  if (!castle.location || !castle.location.lat || !castle.location.lng) {
    return;
  }

  const marker = L.marker(
    [castle.location.lat, castle.location.lng],
    { icon: castleIcon }
  ).addTo(map);

  marker.bindPopup(`
    <strong>${castle.name}</strong><br>
    Región: ${castle.region}
  `);
});

// 7. Debug info
console.log(`Loaded ${castles.length} castles onto the map.`);
