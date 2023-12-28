const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tasaDeCambio = 0.85;

console.log('Bienvenido al Convertidor de Moneda');
console.log('Este programa convierte una cantidad en dólares a euros.');

rl.question('Ingrese la cantidad en dólares: ', (dolares) => {
  const euros = dolares * tasaDeCambio;
  console.log(`${dolares} dólares son ${euros} euros.`);
  rl.close();
});
