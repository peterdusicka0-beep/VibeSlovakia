const downloadCastleBtn = document.getElementById("downloadCastleBtn");

downloadCastleBtn.addEventListener("click", async () => {
  const castle = castles[0]; // príklad – môžeš meniť dynamicky
  const audioResp = await fetch(castle.audio_sk);
  const audioBlob = await audioResp.blob();
  const audioUrl = URL.createObjectURL(audioBlob);
  localStorage.setItem(`castleAudio_${castle.id}`, audioUrl);

  const modelResp = await fetch(castle.ar_model_url);
  const modelBlob = await modelResp.blob();
  const modelUrl = URL.createObjectURL(modelBlob);
  localStorage.setItem(`castleModel_${castle.id}`, modelUrl);

  alert("Hrad stiahnutý pre offline použitie!");
});

function playAudio(castleId, lang="sk") {
  const audio = document.getElementById("castleAudio");
  const audioUrl = localStorage.getItem(`castleAudio_${castleId}`) || castles[castleId][`audio_${lang}`];
  audio.src = audioUrl;
  audio.play();
}

function generateQRCode(castle) {
  const qrDiv = document.getElementById("qrContainer");
  qrDiv.innerHTML = "";
  new QRCode(qrDiv, {
    text: `${window.location.href}?castle=${castle.id}&zone=${castle.zone_id}`,
    width: 128,
    height: 128
  });
}

