const ball = document.createElement('div')
const ballRadius = 30
const windowHeight = window.innerHeight
const windowWidth = window.innerWidth
let ballYPosition = windowWidth/2 - ballRadius
let ballXPosition = windowWidth/2 - ballRadius
document.body.appendChild(ball)
const Lpadel = document.
let ballSpeed = 5
let ballxDirection =
const LPadel = document.createElement('div')
document.body.appendChild(LPadel)
let LPadelWidth = 10
let LPadelHeight = 100
let LPadelSpeed = 5
let

setInterval(moveBall, 10)

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

LPadel.addEventListener('keyup', (event) => {
    if(event.key == 'w') {
    if(LPadel)
    LPadelYPosition = LPadelYPosition - LPadelSpeed
    }
    if(event.key == 's') {
        if(LPadelYPosition >= windowHeight - LPadelHeight) {
            LPadelYPosition = LPadelYPosition - LPadelHeight
    }
    }
    LPadel.style.top = `${LPadelYPosition}px`
    })
