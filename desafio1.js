const PEON = 1;
const CABALLO = 3;
const ALFIL = 3;
const TORRE = 5;
const DAMA = 9;

let puntosBlancas = 0;
let puntosNegras = 0;

puntosBlancas += PEON;

puntosNegras += CABALLO;

puntosBlancas += TORRE;

puntosNegras += DAMA;

let jugada = 15;

let esTurnoBlancas = jugada % 2 !== 0;
let turnoActual = esTurnoBlancas ? "Blancas" : "Negras";

console.log(`Número de jugada actual: ${jugada} (Tipo de dato:${typeof jugada})`);
console.log(`Turno correspondiente: ${turnoActual} (Tipo de dato:${typeof turnoActual})`);
console.log(`Puntuación acumulada Blancas: ${puntosBlancas} pts (Tipo de dato:${typeof puntosBlancas})`);
console.log(`Puntuación acumulada Negras: ${puntosNegras} pts (Tipo de dato:${typeof puntosNegras})`);