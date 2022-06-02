const nombreCompleto   = document.getElementById('nombre');
const userEmail        = document.getElementById('userEmail');
const tipoAlojamiento  = document.getElementsByClassName('.tipo');
const fechaIngreso     = document.getElementById('checkin');
const fechaSalida      = document.getElementById('checkout');
const cantidadPersonas = document.getElementById('cantidadPersonas');
const btnConfirmacion  = document.getElementById('confirmacion'); 
const datosReserva     = document.querySelector('.mostrarDatos');

const alojamientos = 
[{
    tipo: "Carpa",
    precio: 100,
},
{
    tipo: "Cabaña",
    precio: 200,
},
{
    tipo: "Casa",
    precio: 300,
}];

class Reservar {
    constructor(nombreCompleto, userEmail, tipoAlojamiento, fechaIngreso, fechaSalida, cantidadPersonas) 
    {
        this.nombreCompleto   = (nombreCompleto);
        this.userEmail        = (userEmail);
        this.tipoAlojamiento  = (tipoAlojamiento);
        this.fechaIngreso     = new Date(fechaIngreso + "T00:00:00");
        this.fechaSalida      = new Date(fechaSalida + "T23:59:59");
        this.cantidadPersonas = parseInt(cantidadPersonas);
    }
}

function cargarReserva () {
    const reserva = new Reservar
    (
        nombreCompleto.value, 
        userEmail.value, 
        tipoAlojamiento.checked, 
        fechaIngreso.value, 
        fechaSalida.value, 
        cantidadPersonas.value
    );
    console.log(reserva);
}

function diasEstadia (fechaIngreso, fechaSalida) {
    const fecha1= new Date(fechaIngreso);
    const fecha2= new Date(fechaSalida);
    const dias = (fecha2 - fecha1) / (1000 * 60 * 60 * 24);
    console.log(Number(dias));
}


btnConfirmacion.addEventListener('click', diasEstadia);
