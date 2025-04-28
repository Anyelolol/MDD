// Crea un array de números,
// y usa reduce para obtener la suma total.

let Numeros = [ 7, 9, 4]; // da 20
let SumaTotal = Numeros.reduce((sum, num) => sum + num, 0);
console.log(SumaTotal);