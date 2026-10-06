
// Comentario del compañer@: Iñaky Fernandez Montero
/* Comentario del compañer@: Deja un espacio puedes empezar perfectamete en la segunda o tercera linea y el codigo se ve mejor no tan
encasillado*/

        //constantes
const reyMovido = false;
const torreMovida = false;
const enJaque = false;

        //condicional para permitir enroque

if (!reyMovido && !torreMovida && !enJaque) {
    console.log("El enroque es legal.");
} else {
    console.log("El enroque no está permitido.");
}

        //varibles
//  Comentario del compañer@: lo anterior prueba a poner las constantes y variables en la misma parte del codigo
let pieza = "torre";

        //Switch o transformaciones
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

        //constantes
// Comentario del compañer@: Yo los pondria al inicio del script
const filaAlcanzada = 8;
const piezaResultado = filaAlcanzada == 8 ? '♕' : '♙';

        //Comunicados
console.log(`Promoción completada a la pieza. Resultado: ${piezaResultado}`)