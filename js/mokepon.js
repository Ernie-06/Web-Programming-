let ataqueJugador;
let ataqueEnemigo;

// Esta funcion se llama iniciar juego y tiene varios botones con eventos de escuchar y selectionar ciertos id del DOM
function iniciarJuego() {
  let botonMascotaJugador = document.getElementById("boton-mascota");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.addEventListener("click", ataqueFuego);
  let botonAgua = document.getElementById("boton-agua");
  botonAgua.addEventListener("click", ataqueAgua);
  let botonTierra = document.getElementById("boton-tierra");
  botonTierra.addEventListener("click", ataqueTierra);
}

function seleccionarMascotaJugador() {
  // Estas lineas de codigo son mis variables
  let inputHipodoge = document.getElementById("hipodoge");
  let inputCapipepo = document.getElementById("capipepo");
  let inputRatigueya = document.getElementById("ratigueya");
  let spanMascotaJugador = document.getElementById("mascota-jugador");

  if (inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = "Hipodoge";
  } else if (inputCapipepo.checked) {
    spanMascotaJugador.innerHTML = "Capipepo";
  } else if (inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = "Ratigueya";
  } else {
    alert("Selecciona una mascota");
  }
  seleccionarMascotaEnemigo();
}
function seleccionarMascotaEnemigo() {
  let mascotaAleatoria = aleatorio(1, 3);
  let spanMascotaEnemigo = document.getElementById("mascota-enemigo");

  if (mascotaAleatoria == 1) {
    spanMascotaEnemigo.innerHTML = "Hipodoge";
  } else if (mascotaAleatoria == 2) {
    spanMascotaEnemigo.innerHTML = "Capipepo";
  } else {
    spanMascotaEnemigo.innerHTML = "Ratigueya";
  }
}

function ataqueFuego() {
  ataqueJugador = "FUEGO";
  ataqueAletorioEnemigo();
}

function ataqueAgua() {
  ataqueJugador = "AGUA";
  ataqueAletorioEnemigo();
}

function ataqueTierra() {
  ataqueJugador = "TIERRA";
  ataqueAletorioEnemigo();
}

function ataqueAletorioEnemigo() {
  let ataqueAletorio = aleatorio(1, 3);
  if (ataqueAletorio == 1) {
    ataqueEnemigo = "FUEGO";
  } else if (ataqueAletorio == 2) {
    ataqueEnemigo = "AGUA";
  } else {
    ataqueEnemigo = "TIERRA";
  }
  crearMensajes();
}

function crearMensajes() {
  let sectionMensajes = document.getElementById("mensajes");
  let parrafo = document.createElement("p");
  parrafo.innerHTML =
    "Tu Mascota Ataco con " +
    ataqueJugador +
    " La Mascota del Enemigo Ataco con " +
    ataqueEnemigo;
  sectionMensajes.appendChild(parrafo);
}

// Esta function me crea un numero aleatorio
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Esta evento permite que primero se inicie mi HTML!
window.addEventListener("load", iniciarJuego);
