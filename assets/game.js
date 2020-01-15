var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var computerGuess = String.fromCharCode(Math.round(Math.random() *26) + 97);

var wins = 0;
var lettersGuessed = [];
var guessesLeft = 10;

console.log(ComputerGuess);

document.onkeydown = function(event) {var keyPress = (String.fromCharCode(event.keyCode)).toLowerCase();
    addLetter(keyPress);
}

function addLetter (usersKeypress) {
    var repeatGuess = lettersGuessed.some(function(item){return item === usersKeypress;
    })
}

if (repeatGuess) {
    alert(usersKeypress + "Try Again if you Dare!");
} else { lettersGuessed.push(usersKeypress); console.log(lettersGuessed);
    showLettersGuessed();
    GuessMatch(usersKeypress);
}

function ShowLettersGuessed() {var tempStr = lettersGuessed.join(",");

document.getElementById("playersGuess").innerHTML = tempStr;
}

function guessMatch (character) {
    console.log(character); console.log(computerGuess);

    if (character === computerGuess) {
        alert("Congratulations, you WIN :) !");
        wins = wins + 1;
        showWins();
    } else if (guessesLeft === 0) {
        alert("Game Over! Begin again."); 
        resetVariables();
    } else {
        guessesLeft = guessesLeft - 1; 
        showGuessesRemaining();
    }
}

function showWins() {
    document.getElementById("numberWins").innerHTML = wins;
}

function showGuessesRemaining() {
    document.getElementById("numberGuesses").innerHTML = guessesLeft;
}

function resetVariables() {
    lettersGuessed = []; guessesLeft = 10;
}

function startGame() {
    showGuessesRemaining(); showWins();
}





