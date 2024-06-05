
alert("Bienvenido/a 'DE USA A TU CASA'");

function precioEnvio(gramos) {
    if (gramos <= 10000) {
        alert("Tu envío será por avión y te saldrá en " + (gramos * 0.02));
        alert("Gracias por usar nuestros servicios, ten un lindo día");
    } else if (gramos >= 10001 && gramos < 50001) {
        alert("Tu envío será por barco y te saldrá en " + (gramos * 0.015));
        alert("Gracias por usar nuestros servicios, ten un lindo día");
    } 
    else if (gramos >= 50001) {
        alert("No es posible enviar tu producto, ya que supera el peso permitido por la aerolínea");
        alert("Gracias por usar nuestros servicios, ten un lindo día");
    } 
    else {
        alert("Los datos ingresados son incorrectos (No son números)");
        alert("Gracias por usar nuestros servicios, Inténtalo nuevamente");
    }
}

let gramos = "";

while (gramos !== "salir") {
    gramos = prompt("Ingresa el peso en gramos del producto que deseas enviar, o ingresa 'salir' para cerrar el sistema");

    if (gramos !== "salir") {
        gramos = parseInt(gramos);
        precioEnvio(gramos);
    } else {
        alert("Gracias por usar nuestros servicios, ten un lindo día");
    }
}