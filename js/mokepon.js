// Estas son variables globales
let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;
// Esta funcion se llama iniciar juego y tiene varios botones con eventos de escuchar y seleccionar ciertos id del DOM
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

// Esta funcion permite que puedes seleccionar una mascota
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

// Esta funcion permite que el enemigo tenga un numero aleatorio y se elija por si solo
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
// Esta funcion es la que manipulamos con la variable global y hace que cuando el jugador presione click se eliga fuego y despues de eso el pc haga la misma eleccion pero aleatoria
function ataqueFuego() {
  ataqueJugador = "FUEGO";
  ataqueAletorioEnemigo();
}
// Esta funcion es la que manipulamos con la variable global y hace que cuando el jugador precione click se eliga agua  y despues de eso el pc haga la misma eleccion pero aleatoria

function ataqueAgua() {
  ataqueJugador = "AGUA";
  ataqueAletorioEnemigo();
}
// Esta funcion es la que manipulamos con la variable global y hace que cuando el jugador precione click se eliga tierra y despues de eso el pc haga la misma eleccion pero aleatoria
function ataqueTierra() {
  ataqueJugador = "TIERRA";
  ataqueAletorioEnemigo();
}
// Esta funcion permite que el enemigo tenga un numero aleatorio y se elija por si solo los ataques
function ataqueAletorioEnemigo() {
  let ataqueAletorio = aleatorio(1, 3);
  if (ataqueAletorio == 1) {
    ataqueEnemigo = "FUEGO";
  } else if (ataqueAletorio == 2) {
    ataqueEnemigo = "AGUA";
  } else {
    ataqueEnemigo = "TIERRA";
  }
  combate();
}

// Esta funcion es la logica de mi combate
function combate() {
  let spanVidasJugador = document.getElementById("vidas-jugador");
  let spanVidasEnemigo = document.getElementById("vidas-enemigo");

  if (ataqueEnemigo == ataqueJugador) {
    crearMensajes("EMPATE");
  } else if (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") {
    crearMensajes("GANASTE");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
    crearMensajes("GANASTE");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
    crearMensajes("GANASTE");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else {
    crearMensajes("PERDISTE");
    vidasJugador--;
    spanVidasJugador.innerHTML = vidasJugador;
  }
}
// Esta funcion crea un mensaje donde concatenamos variables y creamos elementos the HTML
function crearMensajes(resultado) {
  let sectionMensajes = document.getElementById("mensajes");
  let parrafo = document.createElement("p");
  parrafo.innerHTML =
    "Tu Mascota Ataco con " +
    ataqueJugador +
    " La Mascota del Enemigo Ataco con " +
    ataqueEnemigo +
    "-" +
    resultado;
  sectionMensajes.appendChild(parrafo);
}

// Esta function me crea un numero aleatorio
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Esta evento permite que primero se inicie mi HTML!
window.addEventListener("load", iniciarJuego);
