//Aplicacion para realizar reservas.

class cliente{
    constructor (nombreCompleto, correoElectronico, telefono){

        this.nombreCompleto    = nombreCompleto.toUpperCase();
        this.correoElectronico = correoElectronico.toUpperCase();
        this.telefono          = parseInt(telefono);

    }
}

const clientes = [];

let nombre = prompt("Bienvenido a la aplicación de reservas,\nPor favor ingrese su nombre completo:");
let correo = prompt("Por favor ingrese su correo electrónico:");
let tel    = prompt("Ingrese su número telefónico:");

clientes.push(new cliente(nombre, correo, tel));

do{
    if(nombre == ""){
        alert("Por favor ingrese su nombre.");
        nombre = prompt("Bienvenido a la aplicación de reservas,\nPor favor ingrese su nombre completo:");
        clientes.splice(0,1,nombre);
        clientes.splice(1,1,correo);
        clientes.splice(2,1,tel);}

        else if(correo == ""){
            alert("Por favor ingrese su correo.");
            correo = prompt("Por favor ingrese su correo electrónico:");
            clientes.splice(0,1,nombre);
            clientes.splice(1,1,correo);
            clientes.splice(2,1,tel);}

        else if((tel == "") || (isNaN(tel))){
            alert("Por favor ingrese un número de teléfono.");
            tel = prompt("Ingrese su número telefónico:");
            clientes.splice(0,1,nombre);
            clientes.splice(1,1,correo);
            clientes.splice(2,1,tel);}

        else{
            alert("Datos ingresados correctamente");
}
}while(nombre == "" || correo == "" || tel == "" || isNaN(tel));

console.log(clientes);

//Fin primera sección (toma de datos del cliente)


const alojamiento = [{tipo: "Carpa", tipo: "Cabaña", tipo: "Casa"}];


let tipoAlojamiento = prompt("Ingrese el tipo de alojamiento:" + "\n" + "- Carpa" + "\n" + "- Cabaña" + "\n" + "- Casa");
let cantidadPersonas = parseInt(prompt("Ingrese la cantidad de personas que van a hospedarse: "));
let datoEstadia = parseInt(prompt("Ingrese la cantidad de días que desea hospedarse: "));


//Fin segunda sección (toma de datos de la reserva)

//Validar datos de reserva

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
    let xPersonaPesos = pesosxDia / cantidadPersonas;
    let xPersonaDolar = dolarxDia / cantidadPersonas;
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
    alert("Hola " + nombre + ", estos son los detalles de la reserva: \n\nTipo de alojamiento seleccionado: " 
    + tipoAlojamiento + "\nCantidad de personas: " + cantidadPersonas + "\nEstadía: " + datoEstadia + 
    " días.\n\nDetalle de costos: \n\nCosto total por día en pesos: " + pesosxDia + 
    "\nCosto total por día en dólares: " + dolarxDia.toFixed(2) + "\nCosto total en pesos: " + calculo + " ( " + xPersonaPesos 
    + " pesos por persona, por día.) \nCosto total en dólares: " + calculoDolar.toFixed(2) + " ( " + xPersonaDolar.toFixed(2) + 
    " dólares x persona, por día.) \n\nGracias por su reserva.");
}

//Fin función de calcular costos

//Llamada de las funciones


validar(tipoAlojamiento, cantidadPersonas, datoEstadia);
calcular(tipoAlojamiento, cantidadPersonas, datoEstadia);
