const matrix = [];

for (let i = 0; i < 4; i++) {
    const row = [];
    for (let j = 0; j < 5; j++) {
        row.push(Math.floor(Math.random() * 100) + 1);
    }
    matrix.push(row);
}

console.log(matrix);