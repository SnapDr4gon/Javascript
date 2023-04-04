const readlineSync = require('readline-sync');

let phrase = readlineSync.question("Ingrese la frase: ");
let letter = readlineSync.question("Ingrese la letra que desea buscar: ");
let countLetter = 0;

for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] === letter) {
        countLetter++;
    }
}

console.log(`El numero de veces que la letra \"${letter}\" aparece en la frase es: ${countLetter}`);