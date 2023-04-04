const readlineSync = require('readline-sync');

let number = readlineSync.questionInt("Ingrese un numero: ");
let flag = true;

if (number <= 1) {
    flag = false;
} else {
    for (let i = 2; i < number; i++) {
        if ((number % i) === 0) {
            flag = false;
        }
    }
}

if (flag) {
    console.log(`El numero ${number} es primo`);
} else {
    console.log(`El numero ${number} no es primo`);
}