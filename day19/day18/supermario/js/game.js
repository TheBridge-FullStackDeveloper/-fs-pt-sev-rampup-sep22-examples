const Game = {
    // Configuraciones que nos interesa tener a mano como desarrolladores
    canvas: undefined,
    ctx: undefined,
    fps: 60,

    // Inicializa el juego desde index.js
    init: function() {
        console.log("Inicializando juego");

        this.canvas = document.getElementById('canvas')
        this.ctx = canvas.getContext('2d')

        this.canvas.width = window.innerWidth
        this.canvas.height = window.innerHeight

        this.start()
    },

    start: function() {

        // Reinicia el estado del juego
        this.reset()
        console.log("Comienza el juego");

        // Loop que borra y pinta el canvas this.fps veces por segundo
        setInterval(() => {

            // Pinta y mueve el fondo cada 60 segundos
            this.background.draw()
            this.background.move()

        }, 1000 / this.fps)

    },

    reset: function() {
        this.background = new Background(this.canvas.width, this.canvas.height, this.ctx) 
    }
}