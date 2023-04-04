const readlineSync = require('readline-sync');
const array = [];

let sum = 0;
let grade;

for (let i = 0; i < 10; i++) {
    grade = readlineSync.questionInt(`Ingrese la calificacion que obtuvo en la materia ${i + 1}: `);
    array.push(grade);
    sum += grade;
}

let finalGrade = sum / 10;

console.log(`La media de las calificaciones es ${finalGrade}`);