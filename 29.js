let diceOne; 
let diceTwo;

let sum;
let count = 0;

for (let i = 0; i < 100; i++) {
    diceOne = Math.floor(Math.random() * 6) + 1;
    diceTwo = Math.floor(Math.random() * 6) + 1;

    sum = diceOne + diceTwo;

    if (sum === 10) {
        count ++;
    }
}

console.log(`El numero de veces que la suma de los dados dio 10 fue de ${count}`);