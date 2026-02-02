console.log("Načítané hrady:", castles.length);

const map = L.map("map").setView([48.7, 19.5], 7);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap"
}).addTo(map);

castles.forEach(castle => {
  if(typeof castle.lat !== "number" || typeof castle.lng !== "number") return;
  L.marker([castle.lat, castle.lng])
    .addTo(map)
    .bindPopup(`<strong>${castle.name}</strong><br>${castle.desc}`);
});
