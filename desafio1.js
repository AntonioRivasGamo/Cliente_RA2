
// Comentario del compañer@: Iñaky Fernandez Montero
    /* Deja un espacio puedes empezar perfectamete en la segunda o tercera linea y el codigo se ve mejor no tan
    encasillado */

        //constantes

const PEON = 1;
const CABALLO = 3;
const ALFIL = 3;
const TORRE = 5;
const DAMA = 9;

        //variables
let puntosBlancas = 0;
let puntosNegras = 0;

        //simulacion de captura
puntosBlancas += PEON;

puntosNegras += CABALLO;

puntosBlancas += TORRE;

puntosNegras += DAMA;

        //variables 2
/* Comentario del compañer@: yo pondria todas las varibles siempre juntas osea en el mismo punto de la programacion
                             para asi tenerlo de forma más ordenada y limpia si puede ser arriba junto a las constantes
                             mejor pero sin que se mezclen */
let jugada = 15;

let esTurnoBlancas = jugada % 2 !== 0;
let turnoActual = esTurnoBlancas ? "Blancas" : "Negras";

        //comunicados
//Los comunicados ofrecen informacion sobre la aplicacion
console.log(`Número de jugada actual: ${jugada} (Tipo de dato:${typeof jugada})`);
console.log(`Turno correspondiente: ${turnoActual} (Tipo de dato:${typeof turnoActual})`);
console.log(`Puntuación acumulada Blancas: ${puntosBlancas} pts (Tipo de dato:${typeof puntosBlancas})`);
console.log(`Puntuación acumulada Negras: ${puntosNegras} pts (Tipo de dato:${typeof puntosNegras})`);