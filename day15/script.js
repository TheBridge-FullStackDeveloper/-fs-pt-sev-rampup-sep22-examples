
const nombre = "Sergio"
let age = 31

function saludo(nombre) {
    console.log(traeApellido())

    function traeApellido() {

        console.log("Pedro")

        return "Lucas"
    }
}

saludo(nombre)

let i = 0

setTimeout(function() {
    console.log("Tiempo1")
}, 0)


setTimeout(function() {
    console.log("Tiempo2")
}, 0)

setTimeout(function() {
    console.log("Tiempo3")
}, 0)
setTimeout(function() {
    console.log("Tiempo4")
}, 0)
setTimeout(function() {
    console.log("Tiempo5")
}, 0)


const idIntervalo = setInterval(function() {
    console.log("TIEMPO PARCIAL" + i++)
    if(i > 15) {
        clearInterval(idIntervalo)
    }
}, 0)

console.log("Vamos Rafa")