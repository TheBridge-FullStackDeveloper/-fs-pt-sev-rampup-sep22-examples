class Background {
    constructor(w, h, ctx){
        console.log("Background creado");

        this.ctx = ctx

        this.img = new Image()
        this.img.src = "./img/bg.png"

        // Tamaño imagen
        this.w = w
        this.h = h

        // Posición inicial
        this.x = 0
        this.y = 0

        this.dx = 10
    }

    draw() {
        this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }

    move() {
        this.x -= this.dx
    }


    
}
