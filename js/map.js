// bezpečnostná kontrola
if (!Array.isArray(castles)) {
  throw new Error("Castles data not loaded!");
}

// inicializácia mapy
const map = L.map("map").setView([48.7, 19.5], 7);

// podkladová mapa
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors"
}).addTo(map);

// kontrola dát
console.log("Počet hradov:", castles.length);
console.table(castles);

// vykreslenie markerov
castles.forEach(castle => {

  if (
    typeof castle.lat !== "number" ||
    typeof castle.lng !== "number"
  ) {
    console.error("Zlé súradnice:", castle);
    return;
  }

  L.marker([castle.lat, castle.lng])
    .addTo(map)
    .bindPopup(
      `<strong>${castle.name}</strong><br>${castle.desc}`
    );
});

// finálna kontrola
setTimeout(() => {
  console.log(
    "Počet markerov:",
    document.querySelectorAll(".leaflet-marker-icon").length
  );
}, 500);
