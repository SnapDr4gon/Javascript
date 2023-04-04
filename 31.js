const readlineSync = require('readline-sync');

function numeroPrimo (n) {

    if (n <= 1) {
        return false;
    } else {
        for (let i = 2; i < n; i++) {
            if ((n % i) === 0) {
                return false;
            }
        }   
    }

    return true;
}

function factorial (n) {
    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact *= i;
    }

    return fact;
}

function tabla (n) {
    console.log("La tabla de multiplicar del numero es la siguiente: \n");

    for (let i = 0; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}

let number = readlineSync.question("Ingrese un numero: ");
let option = 1;

while ((option >= 1) && (option <= 3)) {
    console.log("1.- Comprobar si es numero primo");
    console.log("2.- Obtener el factorial");
    console.log("3.- Obtener la tabla de multiplicar");
    console.log("4.- Salir");
    option = readlineSync.questionInt("Ingrese el numero de opcion que desea realizar: ");

    if (option === 1) {
        if (numeroPrimo(number)) {
            console.log("El numero es primo");
        } else {
            console.log("El numero no es primo");
        }
    } else if (option === 2) {
        console.log(`El factorial del numero es: ${factorial(number)}`);
    } else if (option === 3) {
        tabla(number);
    } else if (option === 4) {
        console.log("Vuelva pronto");
    }
}