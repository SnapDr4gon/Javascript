const readlineSync = require('readline-sync');
const matrix = [];

let n = readlineSync.questionInt("Ingrese el numero de filas de la matriz: ");
let m = readlineSync.questionInt("Ingrese el numero de columnas de la matriz: ");

for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
        const number = Math.floor(Math.random() * 50) + 1;
        row.push(number);
    }
    matrix.push(row);
}

console.log(matrix);

function shellSort(column) {
    const n = column.length;

    for (let i = 1; i < n; i++) {
        const key = column[i];
        let j = i - 1;

        while (j >= 0 && column[j] > key) {
            column[j + 1] = column[j];
            j--;
        }

        column[j + 1] = key;
    }

    return column
}

const firstColumn = matrix.map(row => row[0]);
const sortedColumn = shellSort(firstColumn);

for (let i = 0; i < m; i++) {
    matrix[i][0] = sortedColumn[i];
}

console.log(matrix);