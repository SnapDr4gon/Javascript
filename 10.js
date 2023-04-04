const readlineSync = require('readline-sync');

let number = parseInt(readlineSync.question("Ingrese un numero: "));

if ((number % 2) === 0) {
    console.log("El numero es par");
} else {
    console.log("El numero es impar");
}