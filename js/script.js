const nombreCompleto   = document.getElementById('nombre');
const userEmail        = document.getElementById('userEmail');
const tipoAlojamiento  = document.querySelector('.tipo:checked');
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

function datosCliente () {
    nombreCompleto.value;
    userEmail.value;
    console.log(nombreCompleto.value, userEmail.value);
}

function storageCliente (nombreCompleto, userEmail) {
    localStorage.setItem('nombreCompleto', nombreCompleto);
    localStorage.setItem('userEmail', userEmail);
}

function alojamientoSeleccionado () {
    const tipoAlojamiento = document.querySelector('.tipo:checked');
    switch (tipoAlojamiento.value) {
        case "Carpa":
            tipoAlojamiento.value = alojamientos[0].precio;
            console.log(tipoAlojamiento.value);
            break;
        case "Cabaña":
            tipoAlojamiento.value = alojamientos[1].precio;
            console.log(tipoAlojamiento.value);
            break;
        case "Casa":
            tipoAlojamiento.value = alojamientos[2].precio;
            console.log(tipoAlojamiento.value);
            break;
    }
}

function estadia (fechaIngreso, fechaSalida) {
    const fecha1     = new Date(fechaIngreso);
    const fecha2     = new Date(fechaSalida);
    const diferencia = fecha2.getTime() - fecha1.getTime();
    const dias       = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    console.log(dias);
}

function inquilinos () {
    cantidadPersonas.value;
    console.log(cantidadPersonas.value);
}

function dataStorge (tipoAlojamiento, fechaIngreso, fechaSalida, cantidadPersonas) {
    sessionStorage.setItem('tipoAlojamiento',  JSON.stringify(tipoAlojamiento));
    sessionStorage.setItem('fechaIngreso',     JSON.stringify(fechaIngreso));
    sessionStorage.setItem('fechaSalida',      JSON.stringify(fechaSalida));
    sessionStorage.setItem('cantidadPersonas', JSON.stringify(cantidadPersonas));
}

btnConfirmacion.addEventListener('click',() => {
    datosCliente();
    storageCliente(nombreCompleto.value, userEmail.value);
    alojamientoSeleccionado(tipoAlojamiento);
    estadia(fechaIngreso.value, fechaSalida.value);
    inquilinos();
    dataStorge(tipoAlojamiento.value, fechaIngreso.value, fechaSalida.value, cantidadPersonas.value);
    console.log(datosCliente, alojamientoSeleccionado, estadia, inquilinos);
    costoEstadia();
    datosReserva.classList.remove('ocultar');
    datosReserva.classList.add('mostrar');
    mostrarDatosReserva();
});

function costoEstadia () {
    const fecha1     = new Date(fechaIngreso.value);
    const fecha2     = new Date(fechaSalida.value);
    const diferencia = fecha2.getTime() - fecha1.getTime();
    const dias       = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const personas   = cantidadPersonas.value;
    const costo      = tipoAlojamiento.value * dias * personas;
    console.log(costo);
}

function mostrarDatosReserva(){
    let info = datosReserva.querySelectorAll('div ul');
    info[0].innerHTML = `<li>Su Nombre y Apellido: ${nombreCompleto.value}</li>
                        <li>Su Email: ${userEmail.value}</li>
                        <li>Costo del Alojamiento seleccionado por día por persona: $${tipoAlojamiento.value}</li>
                        <li>Fecha de Ingreso: ${fechaIngreso.value}</li>
                        <li>Fecha de Salida: ${fechaSalida.value}</li>
                        <li>Días de estadía: ${estadia(fechaIngreso.value, fechaSalida.value)}</li>
                        <li>Cantidad de Personas: ${cantidadPersonas.value}</li>
                        <li>Costo Total: ${costoEstadia()}</li>`;
}
