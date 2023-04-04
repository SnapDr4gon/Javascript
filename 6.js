const readlineSync = require('readline-sync');

let n = parseInt(readlineSync.question("Ingrese hasta que numero quiere ver los numero naturales: "));

for (let i = 1; i < (n + 1); i++) {
    console.log(i);
}