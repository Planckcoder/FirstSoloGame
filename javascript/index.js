const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
const player = canvas.getContext('2d')

canvas.width = 1024;
canvas.height = 576;



const player1 = new Player()

function animate() {
    window.requestAnimationFrame(animate)

    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height);

    player1.draw()
    player1.update()


}

animate()