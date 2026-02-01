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
}, 500);
