/**
 * En un juego de pelea recibimos un array (generarlo) con 10 golpes aleatorios que recibe un personaje, 
 * mostrar todos los valores y luego buscar cual es el golpe mas fuerte que se dio.
 */
const DB_GOLPES = [
    ["barrido",20],
    ["cross",30],
    ["jab",40],
    ["volea",40],
    ["patada de hacha",50],
    ["roundhuose kick",50],
    ["hook",60],
    ["crochet",60],
    ["swing",70],
    ["patada de gancho",80],
    ["uppercut",90],
], cantidad_golpes = 10;

let puntaje_golpe_recibido=[], confirmacion = confirm('¿Desea comenzar el juego?'),max =0, golpeEncontrado; 
while (confirmacion) {
    for (let index = 0; index < cantidad_golpes; index++) {
        let posicion = numeroRandom(0,10);
        alert(`GOLPE RECIBIDO: ${DB_GOLPES[posicion][0]} - PUNTAJE: ${DB_GOLPES[posicion][1]}`);
        puntaje_golpe_recibido.push(DB_GOLPES[posicion][1]);
    }
    confirmacion = confirm('¿Desea volver a jugar?');
}
max = Math.max(...puntaje_golpe_recibido); 
golpeEncontrado = DB_GOLPES.find(element => element[1]== max); 
alert(`EL PUNTAJE MAXIMO ES: ${max} -${golpeEncontrado[0]}`);

function numeroRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


