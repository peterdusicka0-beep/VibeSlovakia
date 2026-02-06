const map = L.map("map").setView([48.7, 19.5], 7);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap"
}).addTo(map);

castles.forEach(castle => {
  const marker = L.marker([castle.lat, castle.lng]).addTo(map);

  marker.on("click", () => {
    window.location.href = `castle.html?id=${castle.id}`;
  });
});
