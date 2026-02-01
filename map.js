// 1️⃣ Inicializácia mapy
const map = L.map("map").setView([48.7, 19.5], 7);

// 2️⃣ Podkladová mapa
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap"
}).addTo(map);

// 3️⃣ Kontrola dát (POVINNÉ)
console.log("Počet hradov:", castles.length);
console.table(castles);

// 4️⃣ Vykreslenie markerov
castles.forEach(castle => {

  // tvrdá validácia – ak niečo chýba, marker sa nevytvorí
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

// 5️⃣ Finálna kontrola
setTimeout(() => {
  console.log(
    "Markery na mape:",
    document.querySelectorAll(".leaflet-marker-icon").length
  );
}, 500);  // Pred použitím musíš mať dáta, napr.:
const castles = [
  { name: "Bratislavský hrad", lat: 48.1421, lng: 17.1001, desc: "Dominanta hlavného mesta" },
  { name: "Spišský hrad", lat: 48.9989, lng: 20.7683, desc: "Najväčší hrad strednej Európy" },
  { name: "Oravský hrad", lat: 49.2631, lng: 19.3597, desc: "Gotický hrad nad riekou Orava" }
  // ... ďalšie hrady
];

