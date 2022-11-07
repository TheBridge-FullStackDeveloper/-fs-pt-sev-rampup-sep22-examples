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

class Trabajador extends Persona {
    constructor(nombre, edad) {
        super(nombre, edad)

        this.sueldoBase = 1500
    }

    saluda() {
        super.saluda()
        console.log("Dame mi bocadillo")
    }
 }

 class Jefazo extends Persona {
    constructor(nombre, edad) {
        super(nombre, edad)
    }

    // Method overriding
    saluda() {
        super.saluda()
        console.log("Dame mi entrecot")
    }

    subirSueldo(trabajador, porcentaje){
        trabajador.sueldoBase += (trabajador.sueldoBase * porcentaje) / 100 
    }
 }
 
 const trabajador1 = new Trabajador("Emilio", 31);
 const jefazo1 = new Jefazo("Pedro", 20);
 
 trabajador1.saluda()

 console.log(trabajador1.sueldoBase)
 jefazo1.saluda()

 const trabajador2 = new Trabajador("Belén", 29);

 console.log(trabajador2.sueldoBase)


 jefazo1.subirSueldo(trabajador2, 20)


 console.log(trabajador2.sueldoBase)
 console.log(trabajador1.sueldoBase)

 jefazo1.subirSueldo(trabajador1, 25)

 console.log(trabajador1.sueldoBase)
 