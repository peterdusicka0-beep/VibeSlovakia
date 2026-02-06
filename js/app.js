const listEl = document.getElementById("castle-list");
const searchEl = document.getElementById("search");

// kontrola – AK TOTO NEVIDÍŠ, NIEČO JE ZLE
console.log("Načítané hrady:", castles);

// inicializácia
castles.forEach(castle => {
    addMarker(castle);

    const li = document.createElement("li");
    li.textContent = castle.name;
    li.onclick = () => {
        map.setView([castle.lat, castle.lng], 13);
    };
    listEl.appendChild(li);
});

// vyhľadávanie
searchEl.addEventListener("input", () => {
    const q = searchEl.value.toLowerCase();
    listEl.innerHTML = "";

    castles
        .filter(c => c.name.toLowerCase().includes(q))
        .forEach(castle => {
            const li = document.createElement("li");
            li.textContent = castle.name;
            li.onclick = () => {
                map.setView([castle.lat, castle.lng], 13);
            };
            listEl.appendChild(li);
        });
});

