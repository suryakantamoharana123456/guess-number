let randomNumber = parseInt(Math.random()*100 + 1);
// console.log(randomNumber)
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGames = true

 if(playGames){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        // console.log(guess)
        validateGuess(guess)
    })
 }
function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a number')
        }else if(guess < 1 || guess > 100){ 
            alert('Please enter a number between 1 and 100')
    }
    else {
        prevGuess.push(guess)
        if(numGuess === 10){
            displayGuess(guess)
            displayMessage(`Game Over. random number was ${randomNumber}`)
            endGame()
        }else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You got it in ${numGuess} guesses!`)
        endGame()
        }else if(guess > randomNumber){
            displayMessage('Too high')
            // numGuess++
            }else if(guess < randomNumber){
                displayMessage('Too low')
                // numGuess++
}}
function displayGuess(guess){
    userInput.value=''
    guessSlot.innerHTML+=`${guess}    `
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML= `<h2>${message}</h2>`
}
function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame" style="cursor: pointer;">Start new Game</h2>`
    startOver.appendChild(p)
    playGames = false
    newGame()
}
function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random()*100 + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGames = true
    }    )
}