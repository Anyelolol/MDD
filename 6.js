//Crea un array de objetos,
// donde cada objeto tenga un nombre,
// y una edad. Luego,
// muestra en consola,
// el nombre de cada persona usando forEach.

class Datos {
    constructor(nombre, edad) {
        this.nombre = String(nombre);
        this.edad = Number(edad);
    }

    static MostrarNombre(personas) {
        personas.forEach(dato => {
            console.log(dato.nombre);
        });
    }
}

var datosParaAgregar = [
    new Datos('Refri', 5),
    new Datos('Termo', 3),
    new Datos('Horno', 22)
];

Datos.MostrarNombre(datosParaAgregar);
