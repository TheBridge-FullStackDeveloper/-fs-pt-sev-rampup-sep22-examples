const listas = [
    {
        titulo: "la compra",
        items : ["La playStation", "Pollo", "Arroz", "Atún", "Chuletón", "Tocinido de cielo"]
    },
    {
        titulo: "canciones favoritas",
        items : ["Corazón partido", "Libre"]
    },
    {
        titulo: "lenguajes",
        items : ["html", "css", "javascript", "cobol", "php", "ruby", "python", "c", "go", "java", "list", "bash", "rust"]
    },
]

function imprimirListas(listas) {
    let resultadoListas = ""

    for (let i = 0; i < listas.length; i++)
        resultadoListas += imprimirLista(listas[i])

    return resultadoListas
}

function imprimirLista(lista) {
    let resultadoLista = ""

    resultadoLista += imprimirTituloLista(lista)
    resultadoLista += imprimirOpcionesLista(lista.items)

    return resultadoLista
}

function imprimirTituloLista(lista) {
    return `<h2>Lista de ${lista.titulo}</h2>`
}

function imprimirOpcionesLista(opciones) {
    let resultadoOpciones = "" 

    for (let i = 0; i < opciones.length; i++)
        resultadoOpciones += imprimirOpcion(opciones[i])

   return `<ul>${resultadoOpciones}</ul>`
}

function imprimirOpcion(opcion) {
    let button = "<button>Borrar</button>"

    return `<li>${opcion} ${button}</li>`
}

document.getElementById('container').innerHTML = imprimirListas(listas)
