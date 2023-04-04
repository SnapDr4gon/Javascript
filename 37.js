const readlineSync = require('readline-sync');

let numCourses = readlineSync.question("Ingrese el numero de cursos: ");
let numStudents = readlineSync.question("Ingrese el numero de alumnos por curso: ");

const gradesPerCourse = [];

for (let i = 0; i < numCourses; i++) {
    const students = [];
    for (let j = 0; j < numStudents; j++) {
        const grade = readlineSync.questionFloat(`Ingrese la nota que obtuvo el alumno ${j + 1} en la materia ${i + 1}: `);
        students.push(grade);
    }
    gradesPerCourse.push(students);
}

console.log(gradesPerCourse);