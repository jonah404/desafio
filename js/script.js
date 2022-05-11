alert("Aplicacion para reservas.")

let tipoAlojamiento = prompt("Ingrese el tipo de alojamiento:" + "\n" + "- Carpa" + "\n" + "- Cabaña" + "\n" + "- Casa");
let cantidadPersonas = parseInt(prompt("Ingrese la cantidad de personas que van a hospedarse: "));
let datoEstadia = parseInt(prompt("Ingrese la cantidad de días que desea hospedarse: "));

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

function calcular(tipoAlojamiento, cantidadPersonas, datoEstadia){ 
    let calculo = (tipoAlojamiento + (cantidadPersonas*50)) * datoEstadia
    let calculoDolar = calculo / 117.09
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
    alert("Detalles de la reserva: \n\nTipo de alojamiento seleccionado: " + tipoAlojamiento + 
    "\nCantidad de personas: " + cantidadPersonas + "\nEstadía: " + datoEstadia + 
    " días.\n\nDetalle de costos: \n\nCosto total por día en pesos: " + calculo/datoEstadia + 
    "\nCosto total por día en dólares: " + calculoDolar/datoEstadia + "\nCosto total en pesos: " + calculo + 
    "\nCosto total en dólares: " + calculoDolar + "\n\nGracias por su reserva.");
}


validar(tipoAlojamiento, cantidadPersonas, datoEstadia);
calcular(tipoAlojamiento, cantidadPersonas, datoEstadia);
