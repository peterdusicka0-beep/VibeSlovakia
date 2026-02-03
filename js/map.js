
// 1. Inicializácia mapy na stred Slovenska
const map = L.map('map').setView([48.66, 19.33], 7);

// 2. Načítanie dlaždíc mapy
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// 3. Prepojenie na HTML element zoznamu
const listElement = document.getElementById('castle-list');

// 4. Cyklus, ktorý prejde všetky hrady z castles.js
castles.forEach(castle => {
    // Pridanie značky (markeru) na mapu
    const marker = L.marker([castle.lat, castle.lng]).addTo(map);
    marker.bindPopup(`<b>${castle.name}</b><br>${castle.description}`);

    // Pridanie hradu do zoznamu pod mapou
    if (listElement) {
        const li = document.createElement('li');
        li.innerHTML = `<strong>🏰 ${castle.name}</strong>`;
        li.style.cursor = "pointer";
        li.style.padding = "10px";
        li.style.borderBottom = "1px solid #ddd";

        // Akcia po kliknutí v zozname (priblíženie mapy)
        li.addEventListener('click', () => {
            map.setView([castle.lat, castle.lng], 13);
            marker.openPopup();
        });

        listElement.appendChild(li);
    }
});