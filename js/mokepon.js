// Estas son variables globales
let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
let sectionReiniciar = document.getElementById("reiniciar");
let botonMascotaJugador = document.getElementById("boton-mascota");
let botonFuego = document.getElementById("boton-fuego");
let botonAgua = document.getElementById("boton-agua");
let botonTierra = document.getElementById("boton-tierra");
let botonReiniciar = document.getElementById("boton-reiniciar");
let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota");

let inputHipodoge = document.getElementById("hipodoge");
let inputCapipepo = document.getElementById("capipepo");
let inputRatigueya = document.getElementById("ratigueya");
let spanMascotaJugador = document.getElementById("mascota-jugador");
let spanMascotaEnemigo = document.getElementById("mascota-enemigo");
let spanVidasJugador = document.getElementById("vidas-jugador");
let spanVidasEnemigo = document.getElementById("vidas-enemigo");

let ataquesDelJugador = document.getElementById("ataques-del-jugador");
let ataquesDelEnemigo = document.getElementById("ataques-del-enemigo");
let sectionMensajes = document.getElementById("resultado");

let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;
// Esta funcion se llama iniciar juego y tiene varios botones con eventos de escuchar y seleccionar ciertos id del DOM
function iniciarJuego() {
  sectionSeleccionarAtaque.style.display = "none";
  sectionReiniciar.style.display = "none";
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
  botonFuego.addEventListener("click", ataqueFuego);
  botonAgua.addEventListener("click", ataqueAgua);
  botonTierra.addEventListener("click", ataqueTierra);
  botonReiniciar.addEventListener("click", reiniciarJuego);
}

// Esta funcion permite que puedes seleccionar una mascota
function seleccionarMascotaJugador() {
  sectionSeleccionarMascota.style.display = "none";

  sectionSeleccionarAtaque.style.display = "flex";

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
  revisarVidas();
}
// Esta funcion se encarga de que cuando las vidas lleguen a 0 se dispare el mensaje perdiste o ganaste!
function revisarVidas() {
  if (vidasEnemigo == 0) {
    crearMensajeFinal("Ganaste Felicidades :)");
  } else if (vidasJugador == 0) {
    crearMensajeFinal("Lo siento, Perdiste :(");
  }
}
// Esta funcion crea un mensaje donde concatenamos variables y creamos elementos the HTML
function crearMensajes(resultado) {
  let nuevoAtaqueDelJugador = document.createElement("p");
  let nuevoAtaqueDelEnemigo = document.createElement("p");
  sectionMensajes.innerHTML = resultado;
  nuevoAtaqueDelJugador.innerHTML = ataqueJugador;
  nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo;
  ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
  ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}
// Esta funcion es para crear nuestro resultado final
function crearMensajeFinal(resultadoFinal) {
  sectionMensajes.innerHTML = resultadoFinal;
  botonFuego.disabled = true;
  botonAgua.disabled = true;
  botonTierra.disabled = true;
  sectionReiniciar.style.display = "block";
}
// Esta funcion activa el boton de reiniciar
function reiniciarJuego() {
  location.reload();
}
// Esta function me crea un numero aleatorio
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Esta evento permite que primero se inicie mi HTML!
window.addEventListener("load", iniciarJuego);
