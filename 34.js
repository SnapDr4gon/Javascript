const readlineSync = require('readline-sync');
const array = [];

let grade;

for (let i = 0; i < 10; i++) {
    grade = readlineSync.questionInt(`Ingrese la calificacion que obtuvo en la materia ${i + 1}: `);
    array.push(grade);
}

let key = readlineSync.questionInt("Cual calificacion quiere buscar?: ");
let flag;

for (let i = 0; i < array.length; i++) {
    if (key === array[i]) {
        flag = true;
        break;
    } else {
        flag = false;
    }
}

if (flag) {
    console.log("La calificacion existe en la lista: ");
} else {
    console.log("La calificacion no existe en la lista");
}