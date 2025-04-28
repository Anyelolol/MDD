function espera2Segundo() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('listo');
        }, 2000);
    });
}
async function ejecutarOperacion() {
    console.log('Inicio');
    const resultado = await espera2Segundo();
    console.log(resultado);
}

ejecutarOperacion();