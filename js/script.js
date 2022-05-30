//Aplicacion para realizar reservas.

//Toma de datos del cliente ↓

class cliente{
    constructor (nombreCompleto, correoElectronico, telefono){

        this.nombreCompleto    = nombreCompleto.toUpperCase();
        this.correoElectronico = correoElectronico.toUpperCase();
        this.telefono          = parseInt(telefono);

    }
}

const clientes = [];

const customerData = document.getElementById("continuar");
const nombre       = document.getElementById('name');
const correo       = document.getElementById('mail');
const tel          = document.getElementById('tel');

customerData.onclick = ()=>{
    nombre.value;
    correo.value;
    tel.value;
        clientes.push(new cliente(nombre, correo, tel));
            console.log(clientes);
}

// let datosCliente = document.getElementById("datosCliente");
// datosCliente.innerHTML = `'<h3>Datos del cliente:</h3>
//                             <p>Nombre: ${clientes[0]}</p>
//                             <p>Correo: ${clientes[1]}</p>
//                             <p>Teléfono: ${clientes[2]}</p>'`;

// console.log(clientes);

//Toma de datos de la reserva ↓

const alojamiento    = [{tipo: "Carpa", tipo: "Cabaña", tipo: "Casa"}];

const tipoAlojamiento  = document.querySelectorAll('.tipo');
const personas         = document.getElementById('personas');
const cantidadPersonas = document.getElementById('siguiente');
const ingreso          = document.getElementById("desde");
const egreso           = document.getElementById("hasta");
const estadia          = document.getElementById("calculoEstadia");

for (const tipo of tipoAlojamiento) {
    tipo.onclick = ()=>{tipoAlojamiento=tipo.value;
       switch (tipoAlojamiento) {
            case "Carpa":
             tipoAlojamiento = 100;
                    break;
            case "Cabaña":
                tipoAlojamiento = 200;
                    break;
            case "Casa":
                tipoAlojamiento = 300;
                    break;
            }
        console.log(tipoAlojamiento); 
    }
}

cantidadPersonas.onclick = ()=>{
    parseInt(personas.value);
    console.log(cantidadPersonas);}

estadia.onclick = ()=>{
    ingreso.value;
    egreso.value;
    estadia = parseInt(egreso) - parseInt(ingreso);
    console.log(estadia);
}

// (tipoAlojamiento) => tipoAlojamiento
//     {
//         switch (tipoAlojamiento) {
//             case "Carpa":
//             tipoAlojamiento = 100;
//             break;
//             case "Cabaña":
//             tipoAlojamiento = 200;
//             break;
//             case "Casa":
//             tipoAlojamiento = 300;
//         } 
//     }   
// console.log(tipoAlojamiento);

// let datosReserva = document.getElementById("datosReserva");
// datosReserva.innerHTML = `'<h3>Datos de la reserva:</h3>
//                             <p>Tipo de alojamiento: ${tipoAlojamiento}</p>
//                             <p>Cantidad de personas: ${cantidadPersonas}</p>
//                             <p>Cantidad de días: </p>'`;

//Convertir opción seleccionada a número ↓



//Fin del flujo de toma de datos.

//Comienza función de calcular costos ↓

function calcular(tipoAlojamiento, cantidadPersonas, datoEstadia){ 
    let calculo       = (tipoAlojamiento + (cantidadPersonas*50)) * datoEstadia
    let calculoDolar  = calculo / 117.09
    let dolarxDia     = calculoDolar / datoEstadia;
    let pesosxDia     = calculo / datoEstadia;
    let xPersonaPesos = pesosxDia / cantidadPersonas;
    let xPersonaDolar = dolarxDia / cantidadPersonas;
        // alert("Hola " + nombre + ", estos son los detalles de la reserva: \n\nTipo de alojamiento seleccionado: " 
        // + tipoAlojamiento + "\nCantidad de personas: " + cantidadPersonas + "\nEstadía: " + datoEstadia + 
        // " días.\n\nDetalle de costos: \n\nCosto total por día en pesos: " + pesosxDia + 
        // "\nCosto total por día en dólares: " + dolarxDia.toFixed(2) + "\nCosto total en pesos: " + calculo + " ( " + xPersonaPesos 
        // + " pesos por persona, por día.) \nCosto total en dólares: " + calculoDolar.toFixed(2) + " ( " + xPersonaDolar.toFixed(2) + 
        // " dólares x persona, por día.) \n\nGracias por su reserva.");
    
    let costos = document.getElementById("datosCosto");
    costos.innerHTML = `'<h3>Detalle de costos:</h3>
                        <p>Costo total por día en pesos: ${pesosxDia}</p>
                        <p>Costo total por día en dólares: ${dolarxDia.toFixed(2)}</p>
                        <p>Costo total en pesos: ${calculo} ( ${xPersonaPesos} pesos por persona, por día.) </p>
                        <p>Costo total en dólares: ${calculoDolar.toFixed(2)} ( ${xPersonaDolar.toFixed(2)} dólares x persona, por día.) </p>'`;
    
    }
 
//Ejecución ↓

calcular(tipoAlojamiento, cantidadPersonas);
