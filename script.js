document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  app.innerHTML = `
    <header>VibeSlovakia</header>

    <main>
      <div class="card">
        <h2>Vitaj v aplikácii</h2>
        <p>Objav slovenské hrady cez príbeh, zvuk a obraz.</p>
        <a class="button" href="#">Začať</a>
      </div>

      <div class="card">
        <h3>Funkcie</h3>
        <ul>
          <li>🎧 Audio sprievodca</li>
          <li>🗺️ Mapa hradov</li>
          <li>🛡️ Fotka v brnení</li>
          <li>📴 Offline režim</li>
        </ul>
      </div>
    </main>
  `;
});

