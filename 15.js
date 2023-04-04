const readlineSync = require('readline-sync');

let numberOne = readlineSync.questionInt("Ingrese el primer numero: ");
let numberTwo = readlineSync.questionInt("Ingrese el segundo numero: ");

let countEven = 0;
let countNaturalNumbers = 0;
let sumOddNumbers = 0

console.log("Los numeros naturales entre estos dos numeros son: ");

for (let i = numberOne; i <= numberTwo; i++) {
    console.log(i);
    countNaturalNumbers++;
    if ((i % 2) === 0) {
        countEven++;
    }

    if ((i % 2) !== 0) {
        sumOddNumbers += i;
    }
}

console.log(`La cantidad de numeros naturales que hay entre el intervalo es: ${countNaturalNumbers}`);
console.log(`La cantidad de numeros pares que hay en el intervalo es: ${countEven}`);
console.log(`La suma de los numeros impares del intervalo es: ${sumOddNumbers}`);