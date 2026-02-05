const map = L.map("map").setView([48.7, 19.5], 7);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap"
}).addTo(map);

const audioPlayer = document.getElementById("audioPlayer");

castles.forEach(castle => {
  const marker = L.marker([castle.lat, castle.lng]).addTo(map);

  marker.on("click", () => {
    audioPlayer.src = castle.audio;
    audioPlayer.play();
  });

  marker.bindPopup(`
    <strong>${castle.name}</strong><br>
    <img src="${castle.image}" style="width:100%;max-width:200px;margin-top:5px;"><br>
    <small>${castle.desc}</small>
  `);
});
