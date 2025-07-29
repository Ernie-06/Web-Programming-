// Estas son variables globales
const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
const sectionReiniciar = document.getElementById("reiniciar");
const botonMascotaJugador = document.getElementById("boton-mascota");
const botonFuego = document.getElementById("boton-fuego");
const botonAgua = document.getElementById("boton-agua");

const botonTierra = document.getElementById("boton-tierra");
const botonReiniciar = document.getElementById("boton-reiniciar");
const sectionSeleccionarMascota = document.getElementById(
  "seleccionar-mascota"
);

const inputHipodoge = document.getElementById("hipodoge");
const inputCapipepo = document.getElementById("capipepo");
const inputRatigueya = document.getElementById("ratigueya");
const spanMascotaJugador = document.getElementById("mascota-jugador");
const spanMascotaEnemigo = document.getElementById("mascota-enemigo");
const spanVidasJugador = document.getElementById("vidas-jugador");
const spanVidasEnemigo = document.getElementById("vidas-enemigo");

const ataquesDelJugador = document.getElementById("ataques-del-jugador");
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo");
const sectionMensajes = document.getElementById("resultado");
const contenedorTarjetas = document.getElementById("contenedorTarjetas");

let mokepones = [];
let ataqueJugador;
let ataqueEnemigo;
let opcionDeMokepones;
let vidasJugador = 3;
let vidasEnemigo = 3;

class Mokepon {
  constructor(nombre, foto, vida) {
    this.nombre = nombre;
    this.foto = foto;
    this.vida = vida;
    this.ataques = [];
  }
}

let hipodoge = new Mokepon("Hipodoge", "../images/hipodoge1.webp", 5);

let capipepo = new Mokepon("Capipepo", "../images/capipepo.webp", 5);

let ratigueya = new Mokepon("Ratigueya", "../images/ratigueya.webp", 5);

hipodoge.ataques.push(
  { nombre: "💧", id: "boton-agua" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🌱", id: "boton-tierra" }
);

capipepo.ataques.push(
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🔥", id: "boton-fuego" }
);

ratigueya.ataques.push(
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🌱", id: "boton-tierra" }
);

mokepones.push(hipodoge, capipepo, ratigueya);

// Esta funcion se llama iniciar juego y tiene varios botones con eventos de escuchar y seleccionar ciertos id del DOM
function iniciarJuego() {
  sectionSeleccionarAtaque.style.display = "none";
  sectionReiniciar.style.display = "none";

  mokepones.forEach((mokepon) => {
    opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `;
    contenedorTarjetas.innerHTML += opcionDeMokepones;
  });

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
