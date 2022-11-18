const canvasDOMEl = document.getElementById('canvas')
const ctx = canvasDOMEl.getContext('2d')


const w = window.innerWidth
const h = window.innerHeight

const h2 = h / 2
const w2 = w / 2

canvasDOMEl.width = w
canvasDOMEl.height = h

function drawLine() {
    ctx.beginPath()
    ctx.strokeStyle = "rgba(255, 0, 0, 1)";
    ctx.moveTo(30, 50)
    ctx.lineTo(150, 300)
    ctx.stroke(); 
    ctx.closePath()
}

//drawLine()


function drawBall() {
    ctx.beginPath()
    ctx.strokeStyle = "rgba(255, 0, 0, 1)";
    ctx.arc(w2, h2, 20, 0, 2 * Math.PI);
    ctx.stroke(); 
    ctx.fillStyle = "rgba(255, 0, 0, .2)";
    ctx.fill(); 
    ctx.closePath()
}

//drawBall()


function moveLine() {


    let posX = w2
    let posY = h2


    const idInterval = setInterval(function () {
        ctx.clearRect(0, 0, w, h);

        if (posY <= h2 - 200){
            clearInterval(idInterval)
        }
       
        if(posX <= w2 + 200) {
           ++posX
        } else {
            --posY
        }
            ctx.beginPath()
            ctx.strokeStyle = "rgba(255, 0, 0, 1)";
            ctx.moveTo(w2, h2)
            ctx.lineTo(posX, h2)
            ctx.stroke()
            ctx.closePath()
        

            ctx.beginPath()
            ctx.strokeStyle = "rgba(255, 0, 0, 1)";
            ctx.moveTo(posX, h2)
            ctx.lineTo(posX, posY)
            ctx.stroke()
            ctx.closePath()
    }, 10)

    
}


//moveLine()



function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomFloat(min, max) {
    return Math.random() * (max - min) + min;
  }


function drawBall() {

    const radio = randomInt(20, 100)
    ctx.beginPath()
    ctx.strokeStyle = `rgba(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomFloat(0, 1)})`;
    ctx.arc(
            randomInt(radio, w - radio), // x
            randomInt(radio, h - radio), // y
            radio, // radio
            0,  // startAngle
            2 * Math.PI); // endAngle
    ctx.stroke(); 
    ctx.fillStyle = `rgba(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomFloat(0, 1)})`;
    ctx.fill(); 
    ctx.closePath()
}



// for( let i = 1; i <= 10; i++) {
//     drawBall()
// }


function otherBall() {

    
    let radio = 20

    let posX = radio
    let vx = 5
    let sense = 1

    setInterval(function() {
        ctx.clearRect(0,0, w,h)
        vx += 0.1 * sense

        if (posX >= w - radio && sense > 0) {
            sense = -1
        } else if (posX <= radio && sense < 0) {
            sense = 1
        }

        posX += vx * sense

        ctx.beginPath()
        ctx.arc(posX, h2 + 100 * Math.cos(posX * Math.PI / 180), radio += sense, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255, 0, 0, 1)`; 
        ctx.fill(); 
        ctx.closePath()
    }, 1000 / 60)

    
}

otherBall()

otherBall()

otherBall()




