// Mostrar las personas que sean de sexo M
const data = [
    { nombre: "Juan", edad: 18, sexo: "M", acceso: null },
    { nombre: "Pedro", edad: 10, sexo: "M", acceso: null },
    { nombre: "Ana", edad: 25, sexo: "F", acceso: null },
    { nombre: "Luis", edad: 12, sexo: "M", acceso: null },
    { nombre: "Maria", edad: 22, sexo: "F", acceso: null },
    { nombre: "Carlos", edad: 28, sexo: "M", acceso: null },
]
for (i = 0; i <= data.length - 1; i++) {
    if (data[i].sexo == "M") {
        console.log(data[i])
    }

}

//Mostar solo las personas cuya edad sea superior a 25

const dataa = [
    { nombre: "Juan", edad: 18, sexo: "M", acceso: null },
    { nombre: "Pedro", edad: 10, sexo: "M", acceso: null },
    { nombre: "Ana", edad: 25, sexo: "F", acceso: null },
    { nombre: "Luis", edad: 12, sexo: "M", acceso: null },
    { nombre: "Maria", edad: 22, sexo: "F", acceso: null },
    { nombre: "Carlos", edad: 28, sexo: "M", acceso: null },
]
for (i = 0; i <= dataa.length - 1; i++) {
    if (dataa[i].edad >= 25) {
        console.log(dataa[i])
    }
}

//Sumar la edad de todas las personas

var suma = 0;
const dataaa = [
    { nombre: "Juan", edad: 18, sexo: "M", acceso: null },
    { nombre: "Pedro", edad: 10, sexo: "M", acceso: null },
    { nombre: "Ana", edad: 25, sexo: "F", acceso: null },
    { nombre: "Luis", edad: 12, sexo: "M", acceso: null },
    { nombre: "Maria", edad: 22, sexo: "F", acceso: null },
    { nombre: "Carlos", edad: 28, sexo: "M", acceso: null },
]
for (i = 0; i <= dataaa.length - 1; i++) {
    suma = suma + dataaa[i].edad
}
console.log(suma)


//Promedio de edad de todas las personas

const dataaaa = [
    { nombre: "Juan", edad: 18, sexo: "M", acceso: null },
    { nombre: "Pedro", edad: 10, sexo: "M", acceso: null },
    { nombre: "Ana", edad: 25, sexo: "F", acceso: null },
    { nombre: "Luis", edad: 12, sexo: "M", acceso: null },
    { nombre: "Maria", edad: 22, sexo: "F", acceso: null },
    { nombre: "Carlos", edad: 28, sexo: "M", acceso: null },
]
for (i = 0; i <= dataaaa.length - 1; i++) {
    suma = suma + dataaaa[i].edad / dataaa.length
}
console.log(suma)


//Encontrar la persona con mayor edad

const data5 = [
    { nombre: "Juan", edad: 18, sexo: "M", acceso: null },
    { nombre: "Pedro", edad: 10, sexo: "M", acceso: null },
    { nombre: "Ana", edad: 25, sexo: "F", acceso: null },
    { nombre: "Luis", edad: 12, sexo: "M", acceso: null },
    { nombre: "Maria", edad: 22, sexo: "F", acceso: null },
    { nombre: "Carlos", edad: 28, sexo: "M", acceso: null },
]
data5.sort((a, b) => b.edad - a.edad)
console.log(data[0])

//Encontrar la persona con menor edad

const data6 = [
    { nombre: "Juan", edad: 18, sexo: "M", acceso: null },
    { nombre: "Pedro", edad: 10, sexo: "M", acceso: null },
    { nombre: "Ana", edad: 25, sexo: "F", acceso: null },
    { nombre: "Luis", edad: 12, sexo: "M", acceso: null },
    { nombre: "Maria", edad: 22, sexo: "F", acceso: null },
    { nombre: "Carlos", edad: 28, sexo: "M", acceso: null },
]
data6.sort((a, b) => a.edad - b.edad)
console.log(data[0])

//Actulizar el campo "acceso" si la persona tiene mas o igual edad a 18 ano, entonces asigna al campo valor de "ingreso"

const data7 = [
    { nombre: "Juan", edad: 18, sexo: "M", acceso: null },
    { nombre: "Pedro", edad: 10, sexo: "M", acceso: null },
    { nombre: "Ana", edad: 25, sexo: "F", acceso: null },
    { nombre: "Luis", edad: 12, sexo: "M", acceso: null },
    { nombre: "Maria", edad: 22, sexo: "F", acceso: null },
    { nombre: "Carlos", edad: 28, sexo: "M", acceso: null },
]
for (i = 0; i <= data7.length - 1; i++) {
    if (data7[i].edad >= 18) {
        data7[i].acceso = "Ingreso";

    }
}
console.log(data7)

//Crear una funcion que reciba de parametro la edad limite (18) y volver probar el punto anterior

const data8 = [
    { nombre: "Juan", edad: 18, sexo: "M", acceso: null },
    { nombre: "Pedro", edad: 10, sexo: "M", acceso: null },
    { nombre: "Ana", edad: 25, sexo: "F", acceso: null },
    { nombre: "Luis", edad: 12, sexo: "M", acceso: null },
    { nombre: "Maria", edad: 22, sexo: "F", acceso: null },
    { nombre: "Carlos", edad: 28, sexo: "M", acceso: null },
]
function verificarIngreso(limite) {
    for (i = 0; i <= data8.length - 1; i++) {
        if (data8[i].edad >= limite) {
            data8[i].acceso = "Ingreso";
        }
    }
}
console.log(verificarIngreso(21))

//Gestionar todo usando try y catch

const data9 = [
    { nombre: "Juan", edad: 18, sexo: "M", acceso: null },
    { nombre: "Pedro", edad: 10, sexo: "M", acceso: null },
    { nombre: "Ana", edad: 25, sexo: "F", acceso: null },
    { nombre: "Luis", edad: 12, sexo: "M", acceso: null },
    { nombre: "Maria", edad: 22, sexo: "F", acceso: null },
    { nombre: "Carlos", edad: 28, sexo: "M", acceso: null },
]
try {
    for (i = 0; i <= data9.length - 1; i++) {
    }
}
catch (error) {
    console.log(error);
}

//               ARRAYS.JS  
//ORDENAR UN ARREY. (***.sort(a,b)=>a.** - b.**)
const data10 = [
    { nombre: "Juan", edad: 18, sexo: "M", acceso: null },
    { nombre: "Pedro", edad: 10, sexo: "M", acceso: null },
    { nombre: "Ana", edad: 25, sexo: "F", acceso: null },
    { nombre: "Luis", edad: 12, sexo: "M", acceso: null },
    { nombre: "Maria", edad: 22, sexo: "F", acceso: null },
    { nombre: "Carlos", edad: 28, sexo: "M", acceso: null },
]
data10.sort((a, b) => a.edad - b.edad)
console.log(data10);

//FILTRAR ALGUNOS OBJETOS DE LA ARREY Y CREAR UN NUEVA ARREY CON ESOS OBJETOS FILTRADOS DE LA ARREY PRINCIPAL, Y DEJA LA ARREY ORIGINAL IGUAL NI MODIFICAR CADA. **.filter(item=> item.** ><= *)

const data11 = [
    { nombre: "Juan", edad: 18, sexo: "M", acceso: null },
    { nombre: "Pedro", edad: 10, sexo: "M", acceso: null },
    { nombre: "Ana", edad: 25, sexo: "F", acceso: null },
    { nombre: "Luis", edad: 12, sexo: "M", acceso: null },
    { nombre: "Maria", edad: 22, sexo: "F", acceso: null },
    { nombre: "Carlos", edad: 28, sexo: "M", acceso: null },
]
const estudiantesAprobados = data11.filter(item => item.edad >= 3);
console.log(data11);
console.log(estudiantesAprobados);

// ARA CADA OBJETO DEL ARREGLO HAGA ALGO **.forEach(item=>item.***+1)

const data12 = [
    { nombre: "Juan", edad: 18, sexo: "M", acceso: null },
    { nombre: "Pedro", edad: 10, sexo: "M", acceso: null },
    { nombre: "Ana", edad: 25, sexo: "F", acceso: null },
    { nombre: "Luis", edad: 12, sexo: "M", acceso: null },
    { nombre: "Maria", edad: 22, sexo: "F", acceso: null },
    { nombre: "Carlos", edad: 28, sexo: "M", acceso: null },
]
data12.forEach(item => item.edad + 2);
console.log(data12);

//