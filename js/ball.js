

const ball = document.createElement('div')
const ballRadius = 30
const windowHeight = window.innerHeight
const windowWidth = window.innerWidth
let ballYPosition = windowWidth/2 - ballRadius
let ballXPosition = windowWidth/2 - ballRadius
document.body.appendChild(ball)
const Lpadel = document.
let ballSpeed = 5
let ballXDirection = 1
let ballYDirection = 1
const LPadel = document.createElement('div')
document.body.appendChild(LPadel)
let LPadelWidth = 10
let LPadelHeight = 100
let LPadelSpeed = 5


function moveBall(){
    ballXPosition = ballXPosition + ballSpeed * ballXDirection
    ballYPosition = ballYPosition + ballSpeed * ballYDirection
    ball.style.left = `${ballXPosition}px'
    ball.style.top = `${ballYPosition}px`
    if (ballYPosition < 0 || ballYPosition > windowWidth - 2 * ballRadius){
    ballYDirection = ballYDirection * -1
    }
    if (ballXPosition < 0 || ballXPosition > windowWidth - 2 * ballRadius){
    ballXDirection = ballXDirection * -1
    }
}

let ballTop = ballYPosition
let ballBottom = ballYPosition + 2 * ballRadius
let ballLeft = ballXPosition
let LPaddleTop = LPaddleYPosition
let LPaddleBottom = LPaddleYPosition + LPaddleHeight
let LPaddleRight = LPaddleXPosition + LPaddelWidth

if(
    (ballBottom >= LPaddleTop) &&
    (ballTop <= LPaddleBottom) &&
    (ballLeft <= LPaddleRight) &&
    (ballXDirection == -1)
) {
    ballXDirection = ballXDirection *
    }

createBall()

function createBall(){
    ball.style.height = `${2 * ballRadius}`
    ball.style.width = `${2 * ballRadius}`
    ball.style.borderRadius = "50%"
    ball.style.backgroundColor = "Lavender"
    ball.style.position = "absolute"
    ball.style.top = `${windowHeight/2 - ballRadius}px`
    ball.style.left = `${windowWidth/2 - ballRadius}px`
}

create LPadel() {
LPadel.style.height = `${LPadelHeight}px`
LPadel.style.width = `${LPadelWidth}px`
LPadel.style.backgroundColor = 'pink'
LPadel.style.position = 'absolute'
LPadel.style.left = "50px"
LPadel.style.top = `${windowHeight / 2 - LPadelHeight / 2}px`
}

document.addEventListener('keydown', (event) => {
    if (event.key == 'w') {
        wKey = true
    }
    if (event.key == 's') {
        sKey = true
    }
})

document.addEventListener('keyup', (event) => {
    if (event.key == 'w') {
        wKey = false
    }
    if (event.key == 's') {
        sKey = false
    }
})

function moveLPaddle() {
    if (wKey == true && LPaddleYPosition > 0) {
    LPaddleYPosition = LPaddleYPosition - LPaddleSpeed
    }
    if (sKey == true && LPaddleYPosition < windowHeight - LPaddleHeight) {
    LPaddleYPosition = LPaddleYPosition + LPaddleSpeed
    }
    LPaddle.style.top = `${LPaddleYPosition}px`
}

//replacement for set interval
function animate() {
    moveBall()
    moveLPaddle()
    requestAnimationFrame(animate)
}
animate()

