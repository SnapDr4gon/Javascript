let count = 0;

console.log("Los numero impares hasta el 100 son: ");

for (let i = 0; i < 101; i++) {
    if ((i % 2) !== 0) {
        console.log(i);
        count++;
    }
}

console.log("El numero de impares hasta el 100 son: " + count);