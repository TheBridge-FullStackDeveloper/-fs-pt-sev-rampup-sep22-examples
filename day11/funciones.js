
function saluda() {
   console.log("hola mundo");
}

function dameTablas() {
    for (let tabla = 1; tabla <= 10; tabla++) {
        console.log("----- LA TABLA DEL " + tabla + "-------");
        for (let i = 1; i <= 10; i++) {
            console.log(tabla + " * " + i + " = " + i * tabla)
        }
    }
}

saluda()
saluda();
saluda()
saluda()
saluda()

dameTablas()


function suma2mas3() {
    console.log(2+3);

    return 2 + 3;
}


console.log(suma2mas3())

let resultado = suma2mas3();

console.log(resultado)

console.log(resultado + suma2mas3())

//x= 10
// f(x) = 2x + 5 // 25

function f(x) {
    console.log(x)
}

f("hola")
f("adios")
f(3)

function suma(numero1, numero2) {
    return numero1 + numero2
}

console.log(suma(2,6) + suma(1,1))


let result = suma(20,30)
console.log(result)

console.log(Math.random())


function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const colores = ["rojo", "verde", "azul", "rosa", "purpura", "madalena"]


console.log(colores[randomInt(0,colores.length - 1)]);



function saludo(nombre) {
    console.log("Buen día caballero " + nombre);
}

saludo("Ivan")
saludo("Sergio")
saludo("Gonzalo")
saludo("Antonio")