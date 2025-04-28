let pedidos = [
    { id: 1, producto: "Dona", entregado: false },
    { id: 2, producto: "Brazo de reina", entregado: false },
    { id: 3, producto: "Pizza", entregado: true }
];

function procesarPedido(pedido) {
    return new Promise((listo, espera) => {
        setTimeout(() => {
            if (pedido.entregado) {
                listo(`Pedido ${pedido.id} (${pedido.producto}) ya entregado.`);
            } else {
                espera(`Pedido ${pedido.id} (${pedido.producto}) pendiente.`);
            }
        }, 1000);
    });
}

async function procesarPedidos() {
    for (let pedido of pedidos) {
        try {
            const resultado = await procesarPedido(pedido);
            console.log(resultado);
        } catch (error) {
            console.log(error);
        }
    }
}

procesarPedidos();
