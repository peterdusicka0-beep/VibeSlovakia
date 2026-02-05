// Inicializácia mapy
const map = L.map("map").setView([48.7, 19.5], 7);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap"
}).addTo(map);

// Referencie na HTML prvky
const audioPlayer = document.getElementById("audioPlayer");
const searchInput = document.getElementById("searchInput");
const castleList = document.getElementById("castleList");

// Úložisko markerov
const markers = [];

// Funkcia: zobrazenie hradu
function showCastle(castle) {
  map.setView([castle.lat, castle.lng], 12);

  if (castle.audio) {
    audioPlayer.src = castle.audio;
    audioPlayer.play().catch(() => {});
  }
}

// Vytvorenie markerov + zoznamu
castles.forEach(castle => {
  // Marker
  const marker = L.marker([castle.lat, castle.lng]).addTo(map);

  marker.bindPopup(`
    <strong>${castle.name}</strong><br>
    <img src="${castle.image}" style="width:100%;max-width:200px;margin-top:5px;"><br>
    <small>${castle.desc}</small>
  `);

  marker.on("click", () => showCastle(castle));

  markers.push({ castle, marker });

  // Zoznam hradov
  const li = document.createElement("li");
  li.textContent = castle.name;
  li.style.cursor = "pointer";
  li.addEventListener("click", () => showCastle(castle));
  castleList.appendChild(li);
});

// Vyhľadávanie
searchInput.addEventListener("input", e => {
  const query = e.target.value.toLowerCase();

  markers.forEach(({ castle, marker }) => {
    if (castle.name.toLowerCase().includes(query)) {
      marker.addTo(map);
    } else {
      map.removeLayer(marker);
    }
  });

  castleList.innerHTML = "";

  castles
    .filter(c => c.name.toLowerCase().includes(query))
    .forEach(castle => {
      const li = document.createElement("li");
      li.textContent = castle.name;
      li.style.cursor = "pointer";
      li.addEventListener("click", () => showCastle(castle));
      castleList.appendChild(li);
    });
});
