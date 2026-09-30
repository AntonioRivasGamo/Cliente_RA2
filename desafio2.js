const reyMovido = false;
const torreMovida = false;
const enJaque = false;

if (!reyMovido && !torreMovida && !enJaque) {
    console.log("El enroque es legal.");
} else {
    console.log("El enroque no está permitido.");
}

let pieza = "torre";

switch (pieza.toLowerCase()) {
    case "torre":
        console.log("Se mueve cualquier cantidad de casillas en línea recta.");
        break;
    case "alfil":
        console.log("Se mueve cualquier cantidad de casillas en diagonal.");
        break;
    case "dama":
        console.log("Combina el movimiento de la torre y el alfil.");
        break;
    case "caballo":
        console.log("Se mueve en forma de 'L' pudiendo saltar piezas.");
        break;
    case "rey":
        console.log("Se mueve una sola casilla en cualquier dirección.");
        break;
    case "peon":
        console.log("Avanza una casilla hacia adelante, dos en su primer movimiento, y captura en diagonal.");
        break;
    default:
        console.log("No hay pieza seleccionada.");
        break;
}

const filaAlcanzada = 8;
const piezaResultado = filaAlcanzada == 8 ? '♕' : '♙';
console.log(`Promoción completada a la pieza. Resultado: ${piezaResultado}`)