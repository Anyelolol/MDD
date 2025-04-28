// -2. Crea dos variables numéricas
// y muestra en consola su suma, resta, multiplicación y división.

function Sumar(a,b){return a + b;}
function Restar(a,b){return a - b;}
function Multiplicar(a,b){return a * b;}
function Dividir(a,b){return a / b;}

const readline = require('readline');
const tomar = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

tomar.question('Opciones :\n1 Sumar\n2 Restar\n3 Multiplicar\n4 Dividir\n', function(opcion) {
    tomar.question('primer número: ', function(num1) {
        tomar.question('segundo número: ', function(num2) {
            const a = Number(num1);
            const b = Number(num2);
            let resultado;

            switch (opcion) {
                case '1':
                    resultado = Sumar(a, b);
                    break;
                case '2':
                    resultado = Restar(a, b);
                    break;
                case '3':
                    resultado = Multiplicar(a, b);
                    break;
                case '4':
                    resultado = Dividir(a, b);
                    break;
                default:
                    resultado = 'Opción no válida.';
                    break;
            }

            console.log('Resultado: ' + resultado);
            tomar.close();
        });
    });
});