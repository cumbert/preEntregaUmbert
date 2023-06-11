
/* constantes */
const TARIFA_A_DOMICILIO = 1000.00;
const TARIFA_OTROS_PUNTOS = 500.00;
const TAZA_1 = 1;
const TAZA_2 = 1.30;
const TAZA_3 = 1.5929;
const TAZA_4 = 1.9514;
const TAZA_5 = 2.0325;
const TAZA_6 = 2.12632;
const PAGO_1 = 1;
const PAGO_2 = 3;
const PAGO_3 = 6;
const PAGO_4 = 9;
const PAGO_5 = 10;
const PAGO_6 = 12;



/* variables */
let precioProducto = 1000;
let opcion = null;
let retiro = null;
let payMode = null;
let total = 0;


/* funciones */

/* calculo de cuota */

function valorCuota(precioP, taza, cantCuotas) {

    return (precioP * taza) / cantCuotas;

}

/* Cálculos para totalizar el producto + el tipo de recepción */

function opcionRecepcionProducto(opcion) {

    let total = 0;

    switch (retiro) {

        case "A":
            alert("Usted ha elegido la opción de envio a domicilio.");
            total = precioProducto + TARIFA_A_DOMICILIO;
            break;

        case "B":
            alert("Usted ha elegido la opción de retirar en punto de entrega.");
            total = precioProducto + TARIFA_OTROS_PUNTOS;
            break;
        default:

    }

    return total;
}

/* Notificación del modo de pago elegido */

function modoPago(opcion) {

    switch (opcion) {

        case "A":
            alert("Usted ha elegido la opción Tarjeta de Débito.");
            break;

        case "B":
            alert("Usted ha elegido la opción tarjeta de Crédito (puede poseer recargo).");
            break;

        case "C":
            alert("Usted ha elegido la opción de pago en efectivo.");
            break;

    }


}

/* MAIN */

do {
    opcion = prompt("Usted esta ingrensado a la sección para definir el medio de pago y retiro del la compra. Ingrese: \nA - para continuar, \nB - para salir");
    opcion = opcion.toUpperCase();

} while (opcion != "A" && opcion != "B");



if (opcion == "A") {

    /* Sección para determinar cómo recibir el producto. */

    do {

        retiro = prompt("¿Cómo quiere recibir compra?. \nA - Llega a tu domicilio por $" + TARIFA_A_DOMICILIO + ".\nB - Retiro en correo y otros puntos por $" + TARIFA_OTROS_PUNTOS);
        retiro = retiro.toUpperCase();

        total = opcionRecepcionProducto(opcion);

    } while (retiro != "A" && retiro != "B");



    /* Sección para determinar el modo de pago del producto. */

    do {

        payMode = prompt("¿Cómo quieres pagar?. \nA - Tarjeta de Débito.\nB - Tarjeta de Crédito.\nC - Pago en efectivo en puntos habilitados.");
        payMode = payMode.toUpperCase();

        modoPago(payMode);

    } while (payMode != "A" && payMode != "B" && payMode != "C");


    /*Sección para determinar la cantidad de pagos para obtener el producto. */


    if (payMode == "B") {

        let pago1 = valorCuota(precioProducto, TAZA_1, PAGO_1).toFixed(2);
        let pago2 = valorCuota(precioProducto, TAZA_2, PAGO_2).toFixed(2);
        let pago3 = valorCuota(precioProducto, TAZA_3, PAGO_3).toFixed(2);
        let pago4 = valorCuota(precioProducto, TAZA_4, PAGO_4).toFixed(2);
        let pago5 = valorCuota(precioProducto, TAZA_5, PAGO_5).toFixed(2);
        let pago6 = valorCuota(precioProducto, TAZA_6, PAGO_6).toFixed(2);

        do {

            let payments = prompt("¿En cuantas Cuotas?\nA - 1x $" + pago1 + "\nB - 3x $" + pago2 + "\nC - 6x $" + pago3 + " \nD - 9x $" + pago4 + "\nE - 10x $" + pago5 + "\nF - 12x $" + pago6);
            payments = payments.toUpperCase();


            switch (payments) {

                case "A":
                    alert("Usted ha elegido la opción A");
                    total += (pago1*PAGO_1);
                    break;

                case "B":
                    alert("Usted ha elegido la opción B.");
                    total += (pago2*PAGO_2);
                    break;

                case "C":
                    alert("Usted ha elegido la opción C.");
                    total += (pago3*PAGO_3);
                    break;

                case "D":
                    alert("Usted ha elegido la opción D.");
                    total += (pago4*PAGO_4);
                    break;

                case "E":
                    alert("Usted ha elegido la opción.E");
                    total += (pago5*PAGO_5);
                    break;

                case "F":
                    alert("Usted ha elegido la opción F.");
                    total += (pago6*PAGO_6);
                    break;

            }

            /* Salidas */

            alert("El costo total de la compra es de $" + total + "\n ");

        } while (retiro != "A" && retiro != "B");        

    }else{
        alert("El costo total de la compra es de $" + total + "\n ");        
    }

    alert("Gracias por confiar en nosotros. En breve le estará llegando un mail con los detalles de su compra.");

} else {
    alert("ud ha decidido salir de la sección.");
}











