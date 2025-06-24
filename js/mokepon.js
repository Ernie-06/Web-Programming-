function iniciarJuego() {

    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
}



function seleccionarMascotaJugador() {

    let inputHipodoge = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatigueya = document.getElementById("ratigueya")

    if (inputHipodoge.checked) {
        alert("Elegiste a Hipodoge")
    } else if (inputCapipepo.checked) {
        alert("Elegiste a Capipepo")
    } else if (inputRatigueya.checked) {
        alert("Elegiste a Ratigueya")
    } else {
        alert("Selecciona una mascota")
    }
}


window.addEventListener("load", iniciarJuego)