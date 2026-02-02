const map = L.map("map").setView([48.7, 19.5], 7);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap"
}).addTo(map);

castles.forEach(castle => {
  L.marker([castle.lat, castle.lng])
    .addTo(map)
    .bindPopup(`<b>${castle.name}</b><br>${castle.desc}`);
});