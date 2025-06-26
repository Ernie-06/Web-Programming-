function iniciarJuego() {
  let botonMascotaJugador = document.getElementById("boton-mascota");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
}

function seleccionarMascotaJugador() {
  // Estas lineas de codigo son mis variables
  let inputHipodoge = document.getElementById("hipodoge");
  let inputCapipepo = document.getElementById("capipepo");
  let inputRatigueya = document.getElementById("ratigueya");

  if (inputHipodoge.checked) {
    alert("Elegiste a Hipodoge");
  } else if (inputCapipepo.checked) {
    alert("Elegiste a Capipepo");
  } else if (inputRatigueya.checked) {
    alert("Elegiste a Ratigueya");
  } else {
    alert("Selecciona una mascota");
  }
}
// Esta evento permite que primero se inicie mi HTML
window.addEventListener("load", iniciarJuego);
