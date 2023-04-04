const readlineSync = require('readline-sync');

let numberOne = readlineSync.questionInt("Ingrese el primer numero: ");
let numberTwo = readlineSync.questionInt("Ingrese el segundo numero: ");

let option = 1;

while ((option >= 1) && (option <= 4)) {
    console.log("1.- Suma");
    console.log("2.- Resta");
    console.log("3.- Multiplicacion");
    console.log("4.- Division");
    console.log("5.- Salir");
    option = readlineSync.questionInt("Ingrese el numero de opcion que desea realizar: ");

    if (option === 1) {
        let suma = numberOne + numberTwo;
        console.log(`La suma de los dos numeros es: ${suma}`);
    } else if (option === 2) {
        let resta = numberOne - numberTwo;
        console.log(`La suma de los dos numeros es: ${resta}`);
    } else if (option === 3) {
        let multiplicacion = numberOne * numberTwo;
        console.log(`La multiplicacion de los dos numeros es: ${multiplicacion}`);
    } else if (option === 4) {
        let division = numberOne / numberTwo;
        console.log(`La division de los dos numeros es: ${division}`);
    } else if (option === 5) {
        console.log("Vuelva pronto");
    }
}