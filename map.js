const map = L.map("map").setView([48.7, 19.5], 7);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap",
}).addTo(map);

const castles = [
  {
    name: "Oravský hrad",
    lat: 49.261,
    lng: 19.357,
    desc: "Jeden z najkrajších hradov Slovenska."
  },
  {
    name: "Trenčiansky hrad",
    lat: 48.894,
    lng: 18.044,
    desc: "Dominanta Považia."
  }
];

castles.forEach(castle => {
  L.marker([castle.lat, castle.lng])
    .addTo(map)
    .on("click", () => {
      document.getElementById("castle-name").textContent = castle.name;
      document.getElementById("castle-desc").textContent = castle.desc;
      document.getElementById("audioBtn").disabled = false;
      document.getElementById("arBtn").disabled = false;
    });
});
