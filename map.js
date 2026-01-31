// Inicializácia mapy – Slovensko
const map = L.map("map").setView([48.7, 19.5], 7);

// Podkladová mapa
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap"
}).addTo(map);

// Jednoduché dáta hradov
const castles = [
  {
    name: "Hrad Trenčín",
    lat: 48.8946,
    lng: 18.0443
  },
  {
    name: "Spišský hrad",
    lat: 49.0007,
    lng: 20.7683
  },
  {
    name: "Oravský hrad",
    lat: 49.2614,
    lng: 19.3569
  },
  {
    name: "Hrad Devín",
    lat: 48.1736,
    lng: 16.9784
  },
  {
    name: "Hrad Beckov",
    lat: 48.7893,
    lng: 17.8984
  }
];

// Pridanie markerov
castles.forEach(castle => {
  L.marker([castle.lat, castle.lng])
    .addTo(map)
    .bindPopup(`<strong>${castle.name}</strong>`);
});
