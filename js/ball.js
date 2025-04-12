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
let score = 0 //display the score and increase the score by 1 every time the ball hits the paddle
let level = 1 //display the level and increase the level by 1 every time the score increases by 10
let isGameOver = false;
//as the levels increase, increase the ball speed (playable) (can increase paddle speed too or decrease the paddle size)
//if the ball gets past your paddle, end the game
//make the ball stop or disappear and then let the user know that the game is over
//optional things: sound effects or background music
//due on monday, reference the bug game

function moveBall() {
    if (isGameOver) return;

    ballXPosition = ballXPosition + ballSpeed * ballXDirection
    ballYPosition = ballYPosition + ballSpeed * ballYDirection
    ball.style.left = `${ballXPosition}px`
    ball.style.top = `${ballYPosition}px`

    if (ballXPosition <= 0) {
        endGame()
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
            ballSpeed += 1
            LPaddleSpeed += 0.5
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
    isGameOver = true;  // Flag to stop the game loop

    // Hide the ball
    ball.style.display = 'none';

    // Create the Game Over banner
    const gameOverBanner = document.createElement('div');
    gameOverBanner.innerText = 'Game Over';
    gameOverBanner.classList.add('game-over-banner');  // Add the CSS class to the banner

    // Append to the body
    document.body.appendChild(gameOverBanner);

    // Set a timeout to make the banner visible and animate
    setTimeout(() => {
        gameOverBanner.style.visibility = 'visible';  // Make the banner visible
        gameOverBanner.style.top = '50%';  // Move the banner to the center
    }, 50);  // Delay to ensure the styles are applied after the element is appended
}


