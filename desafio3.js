const COLUMNAS = ['a','b','c','d','e','f','g','h'];

for(let fila = 8; fila <= 1; fila --) {
    for(let colIndex = 0; colIndex < COLUMNAS.length; colIndex++) {
        const col = COLUMNAS[colIndex];
        const coordenada = `${col}${fila}`;
        const tipoCasilla = (fila + colIndex) % 2 === 0 ? 'Clara' : 'Oscura';
        console.log(`Casilla: ${coordenada}, Color: ${tipoCasilla}`);
    }
}

const HISTORIAL = ['e4', 'e5', 'Nf3', '{apertura italiana}', 'Nc6', 'Bc4', 'Qxf7#', 'd6'];
let jugadasValidas = 0;

for(const jugada of HISTORIAL) {
    if(jugada.startsWith('{')) procesarComentario(jugada);
    else if(jugada.includes('#')) {
        terminarPartida(jugada);
        break;
    }
    else procesarJugada(jugada);
}

function procesarComentario(comentario) {
    console.log(`Comentario detectado: ${comentario}`);
}

function procesarJugada(jugada) {
    jugadasValidas++;
    console.log(`Jugada numero ${jugadasValidas}: ${jugada}`);
}

function terminarPartida(fin) {
    console.log(`Jaque mate en la jugada ${fin}`);
}