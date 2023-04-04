const readlineSync = require('readline-sync');

let number = readlineSync.question("Ingrese un numero: ");

if (number > 0) {
    console.log("El numero es positivo");
} else if (number < 0) {
    console.log("El numero es negativo");
} else {
    console.log("El numero es 0");
}