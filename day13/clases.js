
const persona1 = {
    nombre: "Pablo",
    edad: 39,
    altura: 1.8,
    nacionalidades: ["España, Rumania"], 
    comer() {
        console.log("Estoy comiendo")
    },
    andar() {
        console.log("Estoy andando")
    },

    decirNombre() {
        console.log(this)
        this.andar()
    }
} 

persona1.decirNombre() 

persona1.comer()


class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad;

        this.nacionalidades = null
    }

    saluda() {
        console.log("Hola soy " + this.nombre + " ¿cómo estás?")
    }
}

 const gonzalo = new Persona("Gonzalo", 21)


 console.log(gonzalo.nombre)

 const sergio = new Persona("Sergio", 89)
 const ivan = new Persona("Ivan", 101)

 console.log(sergio.nombre)
 console.log(ivan.nombre)
 
 sergio.saluda()
 gonzalo.saluda()
 ivan.saluda()
 

 class Trabajador extends Persona {
    constructor(nombre, edad) {
        super(nombre, edad)
    }
 }


 