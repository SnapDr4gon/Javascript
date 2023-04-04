const readlineSync = require(`readline-sync`);
const nameArray = [];
let name;

for (let i = 0; i < 20; i++) {
    name = readlineSync.question("Ingrese el nombre: ");
    nameArray.push(name);
}

for (let j = 0; j < 20; j++) {
    console.log(nameArray[j]);
}