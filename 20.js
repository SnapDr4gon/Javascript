const readlineSync = require('readline-sync');

function factorial (n) {
    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact *= i;
    }

    return fact;
}

let number = readlineSync.questionInt("Ingrese el numero del cual desea saber el factorial: ");

console.log(`El factorial de ${number} es ${factorial(number)}`);