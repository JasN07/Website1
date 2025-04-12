const windowHeight = window.innerHeight
const windowWidth = window.innerWidth

//LPaddle Variables
const LPaddle = document.createElement('div')
document.body.appendChild(LPaddle)
let LPaddleWidth = 10
let LPaddleHeight = 100
let LPaddleSpeed = 5
let LPaddleYPosition = windowHeight / 2 - LPaddleHeight / 2
let LPaddleXPosition = 70

//Ball Variables
const ball = document.createElement('div')
document.body.appendChild(ball)
const ballRadius = 20
let ballYPosition = windowHeight/2 - ballRadius
let ballXPosition = windowWidth/2 - ballRadius
let ballSpeed = 5
let ballXDirection = 1
let ballYDirection = 1

//Extra assignments
let seconds = 0
let score = 0
let level = 1
let isGameOver = false;

function moveBall() {
    if (isGameOver) return;

    ballXPosition = ballXPosition + ballSpeed * ballXDirection
    ballYPosition = ballYPosition + ballSpeed * ballYDirection
    ball.style.left = `${ballXPosition}px`
    ball.style.top = `${ballYPosition}px`

    if (ballXPosition <= 0) {
        endGame();
        return;
    }

    if (ballXPosition < 0 || ballXPosition > windowWidth - 2 * ballRadius){
    ballXDirection = ballXDirection * -1
    }
    if (ballYPosition < 0 || ballYPosition > windowHeight - 2 * ballRadius){
    ballYDirection = ballYDirection * -1
    }

let ballTop = ballYPosition
let ballBottom = ballYPosition + 2 * ballRadius
let ballLeft = ballXPosition
let LPaddleTop = LPaddleYPosition
let LPaddleBottom = LPaddleYPosition + LPaddleHeight
let LPaddleRight = LPaddleXPosition + LPaddleWidth

    if(
        (ballBottom >= LPaddleTop) &&
        (ballTop <= LPaddleBottom) &&
        (ballLeft <= LPaddleRight) &&
        (ballXDirection == -1)
    ) {
        ballXDirection = ballXDirection * -1
        score = score + 1
        document.getElementById('score').innerText = `Score: ${score}`

        if (score % 10 === 0) {
            level = level + 1
            ballSpeed = ballSpeed + 1
            LPaddleSpeed = LPaddleSpeed + 0.5
            document.getElementById('level').innerText = `Level: ${level}`
        }
    }
}

createBall()
function createBall(){
    ball.style.height = `${2 * ballRadius}px`
    ball.style.width = `${2 * ballRadius}px`
    ball.style.borderRadius = "50%"
    ball.style.backgroundColor = "Lavender"
    ball.style.position = "absolute"
    ball.style.top = `${ballYPosition}px`
    ball.style.left = `${ballXPosition}px`
}

createLPaddle()
function createLPaddle() {
    LPaddle.style.height = `${LPaddleHeight}px`
    LPaddle.style.width = `${LPaddleWidth}px`
    LPaddle.style.backgroundColor = 'pink'
    LPaddle.style.position = 'absolute'
    LPaddle.style.left = `${LPaddleXPosition}px`
    LPaddle.style.top = `${LPaddleYPosition}px`
}

wKey = false
sKey = false
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

function animate() {
    if (!isGameOver) {
    moveBall()
    moveLPaddle()
    requestAnimationFrame(animate)
    }
}
animate()

function hitBall() {
    increaseScore()
    this.classList.add(`hit`)
}

function endGame() {
    isGameOver = true;

    //Removes the ball
    ball.style.display = 'none';

    const gameOverBanner = document.createElement('div');
    gameOverBanner.innerText = 'Game Over';
    gameOverBanner.classList.add('game-over-banner');

    document.body.appendChild(gameOverBanner);

    setTimeout(() => {
        gameOverBanner.style.visibility = 'visible';
        gameOverBanner.style.top = '50%';
    }, 50);
}



