import cipher from "./cipher.js";

//boton que realizara el cifrado
const botonCifrar = document.getElementById("botoncifrar");
botonCifrar.addEventListener("click", mostrarCifrado);

//boton que realiza descifrado//
const botonDescifrar = document.getElementById("botondescifrar");
botonDescifrar.addEventListener("click", mostrarDescifrado);

//boton que realiza borrar texto//
const botonBorrar = document.getElementById("botonBorrar");
botonBorrar.addEventListener("click", borrarTextos);


//transformacion a mayusculas
const textoEntrada = document.getElementById("textoentrada");
textoEntrada.addEventListener("keyup", transformarMayusculas);

function mostrarCifrado() {
  let desplazamientoCifrar = document.getElementById("entradaclave").value;
  let textoCifar = document.getElementById("textoentrada").value;

  if (desplazamientoCifrar == "") {
    alert("ingresar numero desplazamiento");
  } else if (textoCifar == "") {
    alert("ingresar texto a cifrar");
  } else {
    let mostarTextoCifrado = cipher.encode(
      textoCifar,
      parseInt(desplazamientoCifrar)
    );
    document.getElementById("textosalida").value = mostarTextoCifrado;
  }
}

function mostrarDescifrado() {
  let desplazamientoDescifrar = document.getElementById("entradaclave").value;
  let textoDescifrar = document.getElementById("textoentrada").value;

  if (desplazamientoDescifrar == "") {
    alert("ingresar numero desplazamiento");
  } else if (textoDescifrar == "") {
    alert("ingresar texto a descifrar");
  } else {
    let mostrartextoDescifrar = cipher.decode(
      textoDescifrar,
      parseInt(desplazamientoDescifrar)
    );
    document.getElementById("textosalida").value = mostrartextoDescifrar;
  }
}
function transformarMayusculas() {
  textoEntrada.value = textoEntrada.value.toUpperCase();
}

function borrarTextos() {
  document.getElementById("entradaclave").value = "";
  document.getElementById("textoentrada").value = "";
  document.getElementById("textosalida").value = "";
}

  

  