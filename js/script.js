alert("Aplicacion para reservas.")

class cliente{
    constructor (nombreCompleto, correoElectronico, telefono){

        this.nombreCompleto    = nombreCompleto;
        this.correoElectronico = correoElectronico;
        this.telefono          = telefono;

    }
   
}

const cliente1 = new cliente(prompt("Ingrese su nombre completo: "), prompt("Ingrese su correo electrónico: "), prompt("Ingrese su número telefónico: "));

    while (cliente1.nombreCompleto == "") {
        alert("Debe ingresar su nombre completo");
        cliente1.nombreCompleto = prompt("Ingrese su nombre completo: ");
}

    while (cliente1.correoElectronico == "") {
        alert("Debe ingresar su correo electronico");
        cliente1.correoElectronico = prompt("Ingrese su correo electronico: ");
}

    while(cliente1.telefono == "" || isNaN(cliente1.telefono)){
        alert("Debe ingresar su telefono");
        cliente1.telefono = prompt("Ingrese su telefono: ");
}

alert("Datos ingresados correctamente");

//Fin primera sección (toma de datos del cliente)

let tipoAlojamiento = prompt("Ingrese el tipo de alojamiento:" + "\n" + "- Carpa" + "\n" + "- Cabaña" + "\n" + "- Casa");
let cantidadPersonas = parseInt(prompt("Ingrese la cantidad de personas que van a hospedarse: "));
let datoEstadia = parseInt(prompt("Ingrese la cantidad de días que desea hospedarse: "));

//Fin segunda sección (toma de datos de la reserva)

//Comienza funcion de validar datos de reserva

function validar(){
    while(tipoAlojamiento != "Carpa" && tipoAlojamiento != "Cabaña" && tipoAlojamiento != "Casa"){
        alert("La opción de hospedaje " + tipoAlojamiento + " no es correcta, solo puede seleccionar Carpa, Cabaña o Casa, por favor intenta de nuevo.");
            tipoAlojamiento = prompt("Ingrese el tipo de alojamiento:" + "\n" + "- Carpa" + "\n" + "- Cabaña" + "\n" + "- Casa");
    }
    while(isNaN(cantidadPersonas) || cantidadPersonas < 1){
        alert("La cantidad de personas que desea hospedarse debe ser mayor a 0, por favor intenta de nuevo.");
            cantidadPersonas = prompt("La cantidad de personas que van a hospedarse debe ser mayor a 0, por favor intenta de nuevo.");
    }
    while(isNaN(datoEstadia) || datoEstadia < 1){
        alert("La cantidad de días que desea hospedarse debe ser mayor a 0, por favor intenta de nuevo.");
            datoEstadia = prompt("La cantidad de días que desea hospedarse debe ser mayor a 0, por favor intenta de nuevo.");
    }
    switch (tipoAlojamiento) {
        case "Carpa":
            tipoAlojamiento = 100;
            break;
        case "Cabaña":
            tipoAlojamiento = 200;
            break;
        case "Casa":
            tipoAlojamiento = 300;
        } 
}

//Fin función de validar datos de reserva

//Comienza función de calcular costos

function calcular(tipoAlojamiento, cantidadPersonas, datoEstadia){ 
    let calculo = (tipoAlojamiento + (cantidadPersonas*50)) * datoEstadia
    let calculoDolar = calculo / 117.09
    let dolarxDia    = calculoDolar / datoEstadia;
    let pesosxDia    = calculo / datoEstadia;
    switch (tipoAlojamiento) {
        case 100:
            tipoAlojamiento = "Carpa";
            break;
        case 200:
            tipoAlojamiento = "Cabaña";
            break;
        case 300:
            tipoAlojamiento = "Casa";
    }
    alert("Hola " + cliente1["nombreCompleto"]+ ", estos son los detalles de la reserva: \n\nTipo de alojamiento seleccionado: " 
    + tipoAlojamiento + "\nCantidad de personas: " + cantidadPersonas + "\nEstadía: " + datoEstadia + 
    " días.\n\nDetalle de costos: \n\nCosto total por día en pesos: " + pesosxDia + 
    "\nCosto total por día en dólares: " + dolarxDia.toFixed(2) + "\nCosto total en pesos: " + calculo + 
    "\nCosto total en dólares: " + calculoDolar.toFixed(2) + "\n\nGracias por su reserva.");
}

//Fin función de calcular costos

//Llamada de las funciones


validar(tipoAlojamiento, cantidadPersonas, datoEstadia);
calcular(tipoAlojamiento, cantidadPersonas, datoEstadia);
