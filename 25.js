const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

function convertirARomano(numero) {
  const romanos = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  if (numero >= 5000) {
    throw new Error('El número debe ser menor que 5000');
  }

  let resultado = '';

  for (const letra in romanos) {
    const valor = romanos[letra];
    while (numero >= valor) {
      resultado += letra;
      numero -= valor;
    }
  }

  return resultado;
}

readline.question('Introduce un número: ', (numero) => {
  const romano = convertirARomano(numero);
  console.log(romano);
  readline.close();
});