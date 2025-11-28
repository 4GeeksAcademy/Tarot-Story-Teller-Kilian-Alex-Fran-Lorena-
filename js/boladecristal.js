const glassball = document.getElementById("glassball");
glassball.onclick = reproducirSonidoBola;

function reproducirSonidoBola() {
  const sound = new Audio("Proyect/media/rolling-ball.mp3");
  sound.play().catch(error => {
    console.log("No se pudo reproducir el sonido:", error);
  });
};
