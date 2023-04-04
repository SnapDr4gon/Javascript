const readlineSync = require('readline-sync');
const fs = require('fs');

fs.writeFile('./DATOS.DAT', '', function(err) {
    if (err) throw err;
    console.log('Archivo creado satisfactoriamente');
});

let id = readlineSync.questionInt("Ingrese el ID: ");
let nombre = readlineSync.question("Ingrese el nombre: ");
let apellido = readlineSync.question("Ingrese el apellido: ");
let direccion = readlineSync.question("Ingrese la direccion: ");
let estado = readlineSync.question("Ingrese el estado ");
let tags = "\tID\t\tNAME\t\tLAST NAME\t\tADDRESS\t\t\tSTATE\n";
fs.appendFile('./DATOS.DAT', tags, function(err) {
    if (err) throw err;
    console.log("Tags agregados correctamente");
});

let append = `\t${id}\t\t${nombre}\t\t${apellido}\t\t${direccion}\t\t\t${estado}\n`;

fs.appendFile('./DATOS.DAT', append, function(err) {
    if (err) throw err;
    console.log("Contenido agregado satisfactoriamente");
});