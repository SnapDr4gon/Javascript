const fs = require('fs');
const readline = require('readline');
let map = new Map();
//Interfaz para leer lineas
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//Interfaz para leer archivitos
const fr = readline.createInterface({
    input: fs.createReadStream('./DATOS.DAT'),
    crlfDelay: Infinity
});

fr.on('line', (line) => {
    let obj = JSON.parse(line);
    map.set(obj.id, obj);
    //console.log(map);

    rl.question('Enter ID : ', (answer) => {
        console.log(map.get(answer))
        rl.close();
    });
});