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

const scoreEl = document.getElementById('score')
const message = document.getElementById('message')
const timeEl = document.getElementById('time')

let seconds = 0
let score = 0 //display the score and increase the score by 1 every time the ball hits the paddle
let level = 1 //display the level and increase the level by 1 every time the score increases by 10
//as the levels increase, increase the ball speed (playable) (can increase paddle speed too or decrease the paddle size)
//if the ball gets past your paddle, end the game
//make the ball stop or disappear and then let the user know that the game is over
//optional things: sound effects or background music
//due on monday, reference the bug game


createBall()

function createBall(){
    ball.style.height = `${2 * ballRadius}px`
    ball.style.width = `${2 * ballRadius}px`
    ball.style.borderRadius = "50%"
    ball.style.backgroundColor = "Lavender"
    ball.style.position = "absolute"
    ball.style.top = `${windowHeight/2 - ballRadius}px`
    ball.style.left = `${windowWidth/2 - ballRadius}px`
}







function startGame() {
    setInterval(increaseTime, 1000)
}

function increaseTime() {
    let s = seconds % 60
    let m = Math.floor(seconds / 60)
    if (s < 10) {
        s = `0${s}`
    }
    if (m < 10) {
        m = `0${m}`
    }
    timeEl.innerHTML = `Time: ${m}:${s}`
    seconds = seconds + 1;
}

function hitBall() {
    increaseScore()
    this.classList.add(`hit`)
}

function increaseScore() {
    score = score + 1
    if (score == 10) {
        message.classList.add('visible')
    }
    scoreEl.innerHTML = `Score: ${score}`
    }

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

