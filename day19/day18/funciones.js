// HOISTING

console.log(suma(2,4))

// Declaración de funcion (hoisting)
function suma(a, b) {
    return a + b;
}

// Funciones como expresion (sin hoisting)
const resta = function (a, b) {
    console.log(a - b);
}

resta(4,3);

// Arrow functions (sin hoisting)
const multiplica = (a, b) => {
    console.log(a * b);
} 


// Ciudadanas de primera clase


function getName() {
    console.log("Gonzalo");
}

//console.log(getName)

//const otraFuncion = getName

// console.log(otraFuncion())

function saludo(nombre) {
    nombre()
}


// saludo es una HighOrder Function
saludo(getName)

const callback = function() {
    console.log("ey")
}


//setInterval(callback, 0)


// for (let i = 0; i < 10000; i++) {
//     console.log("FIIIIN");
// }


console.log("hola")

// const btnDOMEl = document.getElementById('btn')

const btnDOMEl = document.querySelector("#btn");





// btnDOMEl.addEventListener('click', () => {

// })

// console.log("Mantequilla");

// https://res.cloudinary.com/practicaldev/image/fetch/s--c0aEZX7m--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/b8euo2n7twvgh3dbuatd.jpeg
// Callback Hell
// setTimeout(() => {
//     setTimeout(() => {
//         setTimeout(() => {
//             console.log("hola")
//         }, 1000)
//     }, 2000)
// }, 1000)




// btnDOMEl.onclick = () => {
//      alert("Hola mundo")
// }

// btnDOMEl.onclick = () => {
//     console.log("vamos");
// }

const evento = function () {
    console.log("hola")
}

const evento2 = function () {
    console.log("de esto otro")
}

document.addEventListener('click', evento)
document.addEventListener('click', evento2)


document.removeEventListener('click', evento2)



const mirad = (lugar) => "Estamos mirando a la " + lugar


const resultado = mirad()
console.log(resultado);