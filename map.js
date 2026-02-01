// 1. Inicializácia mapy
const map = L.map("map").setView([48.7, 19.7], 7);

// 2. Podkladová mapa
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap"
}).addTo(map);

// 3. DÁTA – HRADY (všetky musia mať čísla, nie text s čiarkou)
const castles = [
  {
    name: "Trenčiansky hrad",
    lat: 48.8946,
    lng: 18.0396,
    desc: "Dominanta Považia"
  },
  {
    name: "Spišský hrad",
    lat: 49.0009,
    lng: 20.7686,
    desc: "Najväčší hradný komplex v strednej Európe"
  },
  {
    name: "Oravský hrad",
    lat: 49.2614,
    lng: 19.3573,
    desc: "Dráma na skale"
  },
  {
    name: "Devín",
    lat: 48.1737,
    lng: 16.9784,
    desc: "Symbol slovenskej histórie"
  }
];

// 4. KONTROLA – povinná diagnostika
console.log("Počet hradov:", castles.length);
console.table(castles);

// 5. MARKERY – SPRÁVNY CYKLUS (žiadny return, žiadna chyba)
castles.forEach(castle => {

  if (
    typeof castle.lat !== "number" ||
    typeof castle.lng !== "number"
  ) {
    console.error("Zlé súradnice:", castle);
    return;
  }

  const marker = L.marker([castle.lat, castle.lng]).addTo(map);

  marker.bindPopup(`
    <strong>${castle.name}</strong><br>
    ${castle.desc}
  `);
});

// 6. Finálna kontrola
setTimeout(() => {
  console.log(
    "Vykreslené markery:",
    document.querySelectorAll(".leaflet-marker-icon").length
  );
}, 500);
