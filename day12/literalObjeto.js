
let otroNombre = "hola mundo"

let numeroLiteral = 3 
let numberoLiteral = "3"
let booleano = true 

let array = [3,true,"3"] 







// console.log(array[0])
// curly brackets 

let coche = {
    marca: "Renault",
    modelo: "Megane",
    plazas: 5,
    color: "Negro",
    extras: ["Acc", "Nitro", "gps"], 

    arrancar: function() {
        console.log("Arrancando")
    },
    frenar: function() {
        console.log("Frenando")
    },
    girar: function (sentido) {
        console.log("girando hacia la " + sentido)
    }
}

console.log(coche.frenar())

coche.girar("derecha")
console.log(coche.marca)
console.log(coche.plazas)
coche.arrancar()
coche.girar("izquierda")
coche.arrancar()


coche.plazas = 9

console.log(coche)


coche.extras.push("Volante de f1")

console.log(coche);
console.log(coche.extras.length);