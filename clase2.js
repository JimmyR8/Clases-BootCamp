//Suma de numeros

function sumar(numero1, numero2) {
    return numero1 + numero2
}
console.log(sumar(10, 76));

//Resta de numeros

function restar(numero1, numero2) {
    return numero1 - numero2
}
console.log(restar(8548, 849));

//Divicion de numeros 

function dividir(numero1, numero2) {
    return numero1 / numero2
}
console.log(dividir(541189, 2));

//Multiplicacion de numeros

function multiplicacion(numero1, numero2) {
    return numero1 * numero2
}
console.log(multiplicacion(10, 54))

//

function verificarUsuario(usuario, clave) {
    if (usuario == "admin" && clave == "12345") {
        return "{acceso: true}";
    }

    return "{acceso: false}";

}

console.log(verificarUsuario("administrador", "12345"))

// 
var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9.10]
for (i = 0; i <= numeros.length - 1; i++) {
    if (numeros[i] % 2 == 0);
    numeros[i] = "PAR"
}
console.log(numeros)

//

var productos = [12, 3, 4, 20, 5.5]
for (i = 0; i <= productos.length - 1; i++) {
    if (productos[i] > 10)
        productos[i] = productos[i] + 1
}
console.log(productos)

//


