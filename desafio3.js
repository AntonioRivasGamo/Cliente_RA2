
// Comentario del compañer@: Iñaky Fernandez Montero
/* Comentario del compañer@: Deja un espacio puedes empezar perfectamete en la segunda o tercera linea y el codigo se ve mejor no tan
encasillado*/

        //constantes
const COLUMNAS = ['a','b','c','d','e','f','g','h'];

        //bucle recorre filas y columnas
for(let fila = 8; fila <= 1; fila --) { //por cada fila empezando desde la ultima
    for(let colIndex = 0; colIndex < COLUMNAS.length; colIndex++) { //recorremos cada posicion dentro de columna
        const col = COLUMNAS[colIndex];//sacamos la letra de la columna segun el indice
        const coordenada = `${col}${fila}`; //lo juntamos en un string
        const tipoCasilla = (fila + colIndex) % 2 === 0 ? 'Clara' : 'Oscura'; //vemos si es clara o oscura
        console.log(`Casilla: ${coordenada}, Color: ${tipoCasilla}`); //lo decimos
    }
}
        //constantes  Comentario del compañer@:al igual que los anteriores yo lo hubiera puesto con el resto de constantes
const HISTORIAL = ['e4', 'e5', 'Nf3', '{apertura italiana}', 'Nc6', 'Bc4', 'Qxf7#', 'd6'];
let jugadasValidas = 0; //contador de jugadas validas
                                //variable  Comentario del compañer@:yo la hubiera puesto debajo de las constantes pero apartadas

//recirremos cada posicion del array historial
for(const jugada of HISTORIAL) {
    if(jugada.startsWith('{')) procesarComentario(jugada); //si empieza con {
    else if(jugada.includes('#')) { //si empieza con #
        terminarPartida(jugada);
        break;
    }
    else procesarJugada(jugada);
}

function procesarComentario(comentario) {
    console.log(`Comentario detectado: ${comentario}`); //informa el comentario
}

function procesarJugada(jugada) { //suma jugadas validas y enseña el comentario
    jugadasValidas++;
    console.log(`Jugada numero ${jugadasValidas}: ${jugada}`);
}

function terminarPartida(fin) {
    console.log(`Jaque mate en la jugada ${fin}`); //saca el jaque
}