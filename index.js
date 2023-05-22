const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
const player = canvas.getContext('2d')

canvas.width = 1024;
canvas.height = 576;

class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100,
        
        }

        this.width = 100
        this.height = 100
        this.sides = {
            bottom: this.position.y 
        }
    }

    draw() {
        player.fillStyle = 'blue';
        player.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update() {
        if (bottom < canvas.height) {
            y++
            bottom = y + height
        }
    }
}

const player1 = new Player()



// let bottom = y + height

function animate() {
    window.requestAnimationFrame(animate)

    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height);

    player1.draw()



}

animate()