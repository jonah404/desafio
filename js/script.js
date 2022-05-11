
alert("Aplicacion para reservas.")

function alojamiento(){
    let tipoAlojamiento = prompt("Ingrese el tipo de alojamiento:" + "\n" + "- Carpa" + "\n" + "- Cabaña" + "\n" + "- Casa");
    switch (tipoAlojamiento) {
        case "Carpa":
            tipoAlojamiento = 100;
            break;
        case "Cabaña":
            tipoAlojamiento = 200;
            break;
        case "Casa":
            tipoAlojamiento = 300;
        console.log(tipoAlojamiento);
        }
    
}

function cantidad(){
    let cantidadPersonas = parseInt(prompt("Ingrese la cantidad de personas que van a hospedarse: "));
    console.log(cantidadPersonas);
    return cantidadPersonas;
    
}

function estadia(){
    let estadia = parseInt(prompt("Ingrese la cantidad de días que desea hospedarse: "));
    console.log(estadia);
    return estadia;
}

//Acá creo está el error pero ya no se que cambiar

function calcular(tipoAlojamiento, cantidadPersonas, estadia){ 
    calculo = tipoAlojamiento + cantidadPersonas * estadia
    alert(calculo);
}

cantidad();
estadia();
alojamiento();
calcular();
















































// function costoTipo(tipoAlojamiento){
//     if (tipoAlojamiento != "Carpa" && tipoAlojamiento != "Cabaña" && tipoAlojamiento != "Casa"){
//         alert("Debe ingresar una de las siguientes opciones: " + "\n" + "- Carpa" + "\n" + "- Cabaña" + "\n" + "- Casa");
//     }else{
//     switch (tipoAlojamiento) {
//         case "Carpa":
//             tipoAlojamiento = 100;
//             break;
//         case "Cabaña":
//             tipoAlojamiento = 200;
//             break;
//         case "Casa":
//             tipoAlojamiento = 300;
//             break;
//         default:
//             alert("Debe ingresar una de las siguientes opciones: " + "\n" + "- Carpa" + "\n" + "- Cabaña" + "\n" + "- Casa")
//             break;
//         }
//     }
// }

// function costoPersona(personas,estadia){
//     if (personas<1){
//         alert("Debe ingresar al menos una persona.")
//     }else if (estadia<1){
//         alert("Debe ingresar al menos un día de estadía.")

//     }else if (tipoAlojamiento!="Carpa" && tipoAlojamiento!="Cabaña" && tipoAlojamiento!="Casa"){
//         alert("Debe ingresar un tipo de alojamiento válido. (Carpa, Cabaña o Casa)")
//     }else{
//         let valorXpersona = 50 * personas * estadia + tipoAlojamiento;
//         return valorXpersona;
//     }
// }

// function checkOut(costoPersona){
//     alert("El costo total de " + estadia + " días de estadía en " + tipoAlojamiento + " para un total de " + personas + " personas es de " + costoPersona + ".")
// }


// checkOut(costoPersona(personas,estadia));