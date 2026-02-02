// Skontrolujeme, či sú dáta načítané
if (typeof castles === "undefined") {
  console.error("CHYBA: Súbor castles.js sa nenačítal!");
} else {
  // Inicializácia mapy
  const map = L.map("map").setView([48.7, 19.5], 7);

  // Pridanie mapových podkladov
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap"
  }).addTo(map);

  // Vykreslenie hradov
  castles.forEach(castle => {
    // POZOR: Tu používame castle.lat a castle.lng presne podľa tvojho castles.js
    L.marker([castle.lat, castle.lng])
      .addTo(map)
      .bindPopup(`<b>${castle.name}</b><br>${castle.desc}`);
  });
}
