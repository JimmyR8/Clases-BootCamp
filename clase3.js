
//Mostrar una posicion dada y mostrar la especie
var mascotas = [
    { nombre: "Negra", especie: "Perro", edad: 9 },
    { nombre: "Brayan", especie: "Loro", edad: 76 },
    { nombre: "Jimmy", especie: "Toro", edad: 89 },
    { nombre: "Pealo", especie: "Tigre", edad: 736 },
    { nombre: "Jose", especie: "Gallina", edad: 1 },
    { nombre: "Vhifu", especie: "Gusano", edad: 98 },
    { nombre: "Koi", especie: "Conejo", edad: 48 },
    { nombre: "Pollito", especie: "Pollo", edad: 58 },
    { nombre: "Kloi", especie: "Gato", edad: 8 },
    { nombre: "Fish", especie: "Pescado", edad: 9 },

]

console.log(mascotas[1].especie);

//Mostrar todas las mascotas

var mascotas = [
    { nombre: "Negra", especie: "Perro", edad: 9 },
    { nombre: "Brayan", especie: "Loro", edad: 76 },
    { nombre: "Jimmy", especie: "Toro", edad: 89 },
    { nombre: "Pealo", especie: "Tigre", edad: 736 },
    { nombre: "Jose", especie: "Gallina", edad: 1 },
    { nombre: "Vhifu", especie: "Gusano", edad: 98 },
    { nombre: "Koi", especie: "Conejo", edad: 48 },
    { nombre: "Pollito", especie: "Pollo", edad: 58 },
    { nombre: "Kloi", especie: "Gato", edad: 8 },
    { nombre: "Fish", especie: "Pescado", edad: 9 },

]

console.log(mascotas);

//Mostrar todas las mascotas

var mascotas = [
    { nombre: "Negra", especie: "Perro", edad: 9 },
    { nombre: "Brayan", especie: "Loro", edad: 7 },
    { nombre: "Jimmy", especie: "Toro", edad: 89 },
    { nombre: "Pealo", especie: "Tigre", edad: 736 },
    { nombre: "Jose", especie: "Gallina", edad: 1 },
    { nombre: "Vhifu", especie: "Gusano", edad: 98 },
    { nombre: "Koi", especie: "Conejo", edad: 48 },
    { nombre: "Pollito", especie: "Pollo", edad: 58 },
    { nombre: "Kloi", especie: "Gato", edad: 8 },
    { nombre: "Fish", especie: "Pescado", edad: 9 },

]

for (i = 0; i <= mascotas.length - 1; i++) {
    console.log(mascotas[i]);
}

//Mostrar solo la especie

var mascotas = [
    { nombre: "Negra", especie: "Perro", edad: 9 },
    { nombre: "Brayan", especie: "Loro", edad: 76 },
    { nombre: "Jimmy", especie: "Toro", edad: 89 },
    { nombre: "Pealo", especie: "Tigre", edad: 736 },
    { nombre: "Jose", especie: "Gallina", edad: 1 },
    { nombre: "Vhifu", especie: "Gusano", edad: 98 },
    { nombre: "Koi", especie: "Conejo", edad: 48 },
    { nombre: "Pollito", especie: "Pollo", edad: 58 },
    { nombre: "Kloi", especie: "Gato", edad: 8 },
    { nombre: "Fish", especie: "Pescado", edad: 9 },

]

for (i = 0; i <= mascotas.length - 1; i++) {
    console.log(mascotas[i]).especie;
}

//Mostrar la especies que sean Gatos

var mascotas = [
    { nombre: "Negra", especie: "Perro", edad: 9 },
    { nombre: "Brayan", especie: "Loro", edad: 76 },
    { nombre: "Jimmy", especie: "Toro", edad: 89 },
    { nombre: "Pealo", especie: "Tigre", edad: 736 },
    { nombre: "Jose", especie: "Gallina", edad: 1 },
    { nombre: "Vhifu", especie: "Gusano", edad: 98 },
    { nombre: "Koi", especie: "Conejo", edad: 48 },
    { nombre: "Pollito", especie: "Pollo", edad: 58 },
    { nombre: "Kloi", especie: "Gato", edad: 8 },
    { nombre: "Fish", especie: "Pescado", edad: 9 },

]

for (i = 0; i <= mascotas.length - 1; i++) {
    if (mascotas[i].especie == "Gato");

}
console.log(mascotas[i])

// Aumentar los salarios

var companiaA = [
    { nombre: "Jimmy", salario: 300 },
    { nombre: "Jose", salario: 400 },
    { nombre: "Ramirez", salario: 250 },
]
function amutarSalario(aumento) {
    for (i = 0; i <= companiaA.length - 1; i++) {
        companiaA[i].salario = companiaA[i].salario + aumento
    }
}
amutarSalario(200)
console.log(companiaA)


var companiaB = [
    { nombre: "Garcia", salario: 1000 },
    { nombre: "Rey", salario: 1200 },
    { nombre: "Lander", salario: 900 },
]
function amutarSalario(aumento) {
    for (i = 0; i <= companiaB.length - 1; i++) {
        companiaB[i].salario = companiaB[i].salario + aumento
    }
}

amutarSalario(20)
console.log(companiaB)

//Totalice la nomina de la compania

var data = [
    { nombre: "Jimmy", salario: 300 },
    { nombre: "Jose", salario: 400 },
    { nombre: "Ramirez", salario: 250 },
]
var nomina = 0
for (i = 0; i <= data.length - 1; i++) {
    nomina = nomina + data[i].salario
}
console.log(nomina)

//Halle el promedio de salarios

var data = [
    { nombre: "Jimmy", salario: 300 },
    { nombre: "Jose", salario: 400 },
    { nombre: "Ramirez", salario: 250 },
]
var suma = 0
for (i = 0; i <= data.length - 1; i++) {
    suma = suma + data[i].salario
}
console.log(suma / data.length)

// Mostrar la cantidad de habitantes de cada cuidad
var data = [
    { cuidad: "Madrid", habitantes: 248732 },
    { cuidad: "Barcelona", habitantes: 248732 },
    { cuidad: "España", habitantes: 248732 },
    { cuidad: "Basil", habitantes: 248732 },
    { cuidad: "Colombia", habitantes: 248732 },
]

for (i = 0; i <= data.length; i++) {
    console.log("Esta es la cuidad de ", data[i].cuidad, "con", data[i].habitantes)
}

// Cambiar una cuidad

var data = [
    { cuidad: "Madrid", habitantes: 248732 },
    { cuidad: "Barcelona", habitantes: 248732 },
    { cuidad: "España", habitantes: 248732 },
    { cuidad: "Basil", habitantes: 248732 },
    { cuidad: "Colombia", habitantes: 248732 },
]
    data[2].cuidad = data[2].cuidad = "Venezuela"
    console.log(data[2])

// Agregar otro objeto   (data.push)
var data = [
    { cuidad: "Madrid", habitantes: 248732 },
    { cuidad: "Barcelona", habitantes: 248732 },
    { cuidad: "España", habitantes: 248732 },
    { cuidad: "Basil", habitantes: 248732 },
    { cuidad: "Colombia", habitantes: 248732 },
]

    data.push({cuidad: "Castilla la nueva", habitantes: 784984875})
    console.log(data)


