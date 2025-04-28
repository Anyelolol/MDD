class Datos
{
    constructor(nombre, edad, mascotas)
    {
        this.nombre = String(nombre);   // String
        this.edad = Number(edad);       // Number
        this.mascotas = Boolean(mascotas); // Booleano
    }

    MostrarDatos()
    {
        console.log('Su nombre es ' + this.nombre + ' y tiene ' + this.edad+ ' años');

        if(this.mascotas === true)
        {
            console.log('Tiene mascotas');

        }else{

            console.log('No tiene mascotas');
        }
    }
}

const datos = new Datos("Mauricio", 20, true);
datos.MostrarDatos();
