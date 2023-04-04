const readlineSync = require('readline-sync');

let letter = '';

while ((letter !== 'S') && (letter !== 'N')) {
    letter = readlineSync.question("Ingrese la letra S o la letra N: ");
}

console.log(`La letra es ${letter}`);