//Variables
let numeroMaximoPosible = 4;
let listaNumerosSorteados = [];
let intentos = 0;

let numeroSecreto = 0;

let asignarTextos = (elemento, texto) => {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
};

let verificarIntento = () => {
  let numeroDeUsuario = parseInt(
    document.getElementById("numeroIntento").value
  );
  if (numeroDeUsuario === numeroSecreto) {
    asignarTextos(
      "p",
      `Acertaste el numero secreto en ${intentos} ${
        intentos === 1 ? "vez" : "veces"
      }`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
    document.getElementById("intento").setAttribute("disabled", "true");
  } else {
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextos("p", "El numero secreto es menor");
    } else {
      asignarTextos("p", "El numero secreto es mayor");
    }
    intentos++;
    //limpiarCaja();
    limpiarPiazarra();
  }
  return;
};

let limpiarPiazarra = () => {
  document.querySelector("#numeroIntento").value = "";
};

let numeroRandom = () => {
  return Math.floor(Math.random() * numeroMaximoPosible) + 1;
};

function randomNumber() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximoPosible) + 1;

  if (listaNumerosSorteados.length == numeroMaximoPosible) {
    asignarTextos("p", "Ya se sortearon todos los numeros posibles");
    document.getElementById("reset").removeAttribute("disabled");
  } else {
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return randomNumber();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

let condicionelIniciales = () => {
  asignarTextos("h1", "Juego del número secreto!");
  asignarTextos("p", `Indica un número del 1 al ${numeroMaximoPosible}`);
  numeroSecreto = randomNumber();
  intentos = 1;
  console.log(numeroSecreto);
  console.log(listaNumerosSorteados);
};

let reiniciarJuego = () => {
  //limpiar caja
  limpiarPiazarra();
  //Indicar mensaje de intervalo de números
  //Generar el número aleatorio
  //Inicializar el número intentos
  condicionelIniciales();
  //Deshabilitar el botón de nuevo juego
  document.getElementById("reiniciar").setAttribute("disabled", "true");
  document.getElementById("intento").removeAttribute("disabled");
};

let resetJuego = () => {
  limpiarPiazarra();
  condicionelIniciales();
  document.getElementById("reiniciar").setAttribute("disabled", "true");
  document.getElementById("intento").removeAttribute("disabled");
  document.getElementById("reset").setAttribute("disabled", "true");
  listaNumerosSorteados = [];
  //resetJuego();
};

condicionelIniciales();
