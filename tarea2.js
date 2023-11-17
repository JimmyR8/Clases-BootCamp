var productos = [12, 3, 4, 20, 5.5]
function calcularImpuesto(rango, impuesto) {
    for (i = 0; i <= productos.length - 1; i++) {
        if (productos[i] > rango)
            productos[i] = productos[i] + impuesto
    }
}
calcularImpuesto(19, 5)

console.log(productos)

