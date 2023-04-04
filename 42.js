const fs = require('fs');
const readlineSync = require('readline-sync');

let archivo = './DATOS.DAT'
let id = readlineSync.questionInt("Ingrese el id de la persona que quiere dar de baja: ");

const contenidoOriginal = fs.readFileSync(archivo, 'utf-8');

const lineas = contenidoOriginal.split('\n');

let contenidoModificado = '';

for (let i = 0; i < lineas.length; i++) {
    if (!lineas[i].startsWith(id)) {
        contenidoModificado += lineas[i] + '\n';
    }
}

fs.writeFile(archivo, contenidoModificado, function(err) {
    if (err) throw err;
    console.log(`Usuario ${id} dado de baja`);
});