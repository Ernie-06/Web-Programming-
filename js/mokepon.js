function iniciarJuego() {
  let botonMascotaJugador = document.getElementById("boton-mascota");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
}

function seleccionarMascotaJugador() {
  // Mi primer variable manda a llamar el elemento de mi HTML hipodoge.
  let inputHipodoge = document.getElementById("hipodoge");
  // Esta variable manda a traer mi segun elemento de capipepo
  let inputCapipepo = document.getElementById("capipepo");

  //
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

window.addEventListener("load", iniciarJuego);
