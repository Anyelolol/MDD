// -3. Crea una función que reciba
// un nombre como parámetro
// y devuelva un saludo como string.

function Saludar(nombre) {
    console.log('Hola ' + nombre + ' como estas');
}

const readline = require('readline');
const tomar = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

tomar.question('Como te llamai?', function(Ingreso){
    Saludar(Ingreso);
    tomar.close();
});

