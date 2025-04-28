// Crea una función asincrónica,
// que espere 2 segundos,
// y luego devuelva un mensaje.
// Usa await para esperar su resultado,
// e imprimirlo.

async function ejecutar() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('listo');
}

ejecutar();
