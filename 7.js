let count = 0;
const readlineSync = require('readline-sync');

let phrase = readlineSync.question("Ingrese algun texto o presione enter para salir: ");

while (phrase !== '') {
    count++;
    phrase = readlineSync.question("Ingrese algun texto o presione enter para salir: ");
}

console.log(`El numero de frases que ingreso fue de ${count}`);