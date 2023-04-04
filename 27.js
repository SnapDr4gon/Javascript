const readlineSync = require('readline-sync');

let number = readlineSync.questionInt("Ingrese el numero: ");

console.log("La tabla de multiplicar del numero es la siguiente: \n");

for (let i = 0; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}