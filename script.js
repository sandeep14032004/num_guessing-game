
let random = parseInt(Math.random()*100+1)
let submit = document.querySelector('#subt')
let input = document.querySelector('.guessField')
let guessSlot = document.querySelector('.guesses')
let lastResult =document.querySelector('.lastResult')
let lowOrHi = document.querySelector('.lowOrHi')
let startOver = document.querySelector('.resultParas')
let p = document.querySelector('p')

let prevGuess = [];
let NumGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        let guess = parseInt(input.value)
        console.log(guess)
        validateGuess(guess)
    })
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number")

    }
    else if(guess<1){
        alert("Please enter a number between 1 and 100")
    }
    
    else if(guess>100){
        alert("Please enter a number between 1 and 100")
    }
    else{
        prevGuess.push(guess)
        if(NumGuess > 10){
            displayGuess(guess)
            displayMessage(`Game Over.Random number was ${random}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
    
}
function checkGuess(guess){
    if(guess == random){
        displayMessage('❤️❤️You Guessed It Right .❤️❤️')
        endGame()
    }
    else if(guess < random){
        displayMessage("Number is too low")
    }
    else{
        displayMessage("Number is too high")
    }
}
function displayGuess(guess){
    input.value = ''
    guessSlot.innerHTML+=`${guess}   `
    NumGuess++;
    lastResult.innerHTML = `${11 - NumGuess}`;
}

function displayMessage(message){
    lowOrHi.innerHTML= `<h2>${message}</h2>`


}
function endGame(){
    input.value=''
    input.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML='<h2 id="newGame"> Start new Game</h2>'
    startOver.appendChild(p)
    playGame=false;
    newGame();
}
function newGame(){
    let newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        random = parseInt(Math.random()*100+1)
        prevGuess = []
        NumGuess =1
        guessSlot.innerHTML=""
        lastResult.innerHTML = `${11 - NumGuess}`;
        input.removeAttribute('disabled')
        startOver.removeChild(p)
    })
}



