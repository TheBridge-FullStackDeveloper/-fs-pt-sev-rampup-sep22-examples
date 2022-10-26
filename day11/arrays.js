
let edad = 4;

const sexo = "M";
const sexo2 = "M"


const numeros = [1,2,3,4,5] // Crea un valor array
const numeros2 = [1,2,3,4,5] // Crea otro valor array diferente

if (numeros === numeros2) {
    console.log("ES IGUAL");
} else {
    console.log("NO ES IGUAL")
}


let sexo3 = sexo2;
sexo3 = "F";

console.log(sexo3)
console.log(sexo2)

let numero3 = numeros;

const coleccion = ["gonzalo", "ivan", 3, true, [2,3, [true, false, true]]]

if (sexo === sexo2) {
    console.log("ES IGUAL");
}

const frutas = ["PERAS", "MANZANAS", "NARANJAS", "MELONES"]

// ACCEDO

console.log(frutas)

console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[4])

// MODIFICO
frutas[0] = -3;

console.log(frutas[0])


// ASIGNO VALOR ARRAY A NUEVA VARIABLE
let frutas2 = frutas;

console.log(frutas2)

// ASIGNO VALOR A NUEVA POSICION
frutas2[4] = "Azul";
frutas2[44] = "Azul";

// REASIGNO VARIABLE
frutas2 = NaN
console.log(frutas) // Ha mutado el valor
console.log(frutas2) // SE HA A REASIGNADO


// ¿QUE ES UN ARRAY?
// 1. ES UN VALOR
// 2. ES UNA COLECCION DE VALORES DE CUALQUIER TIPO
// 3. ES UNA COLECCION ORDENADA
// 4. LOS INDICES O CLAVES PARA ACCEDER A CADA POSCION SON NUMERICOS Y EMPIEZAN POR 0
// 5. SE CONSTRUYE UN VALOR CON EL LITERAL []
// 5. SE ACCEDE A UN VALOR DE LA COLECCION con nombreArray[INDICE]


const colores = ["rojo", "verde", "azul", "rosa"]

const notasRampup = [
    ["Antonio", [8,3,12,5,2,7,9]], 
    ["Gonzalo", [1,6,9,2,8,3,2,3]], 
    ["Sergio", [9,6,3,4,1,3,6,3]],
    ["ivan", [9,6,3,4,1,3,6,3]],
    ["Manuel", [9,6,3,4,1,3,6,3]],
    ["Manuel2", [9,6,3,4,1,3,6,3]],
    ["Manuel3", [9,6,3,4,1,3,60,3]],
]

console.log(notasRampup[2][1][7])

console.log(notasRampup.length)

for(let i = 0; i < notasRampup.length; i++) {
    console.log(notasRampup[i][0])

    let suma = 0

    for(let j = 0; j < notasRampup[i][1].length; j++) {
        suma += notasRampup[i][1][j]
    }

    console.log("Media es: " + suma / notasRampup[i][1].length)
}


let tablaDel = 1;


for (let tabla = 1; tabla <= 10; tabla++) {
    console.log("----- LA TABLA DEL " + tabla + "-------");
    for (let i = 1; i <= 10; i++) {
        console.log(tabla + " * " + i + " = " + i * tabla)
    }
}

// console.log("1 * " + tablaDel + " = " + 1 * tablaDel);
// console.log("2 * " + tablaDel + " = " + 2 * tablaDel);
// console.log("3 * " + tablaDel + " = " + 3 * tablaDel);
// console.log("4 * " + tablaDel + " = " + 4 * tablaDel);
// console.log("5 * " + tablaDel + " = " + 5 * tablaDel);
// console.log("6 * " + tablaDel + " = " + 6 * tablaDel);
// console.log("7 * " + tablaDel + " = " + 7 * tablaDel);
// console.log("8 * " + tablaDel + " = " + 8 * tablaDel);
// console.log("9 * " + tablaDel + " = " + 9 * tablaDel);
// console.log("10 * " + tablaDel + " = " + 10 * tablaDel);

