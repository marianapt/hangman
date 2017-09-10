//GLOBAL VARIABLES

var wordOptions = ["lasso", "gun", "horse", "tumbleweed", "hay", "boots", "wagon"]

var selectWord = "";
var lettersWord = [];
var numBlanks = 0;
var blanksAndSucesses = [];
var wrongLetter = [];

var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

//FUNCTIONS 
function startGame() {
    selectWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersWord = selectWord.split("");
    numBlanks = lettersWord.length;


    //Reset guesses left each round 
    var guessesLeft = 9;
    var wrongletters = [];
    blanksAndSucesses = [];

    //populate blans and successes with right number of blanks
    for (var i = 0; i < numBlanks; i++) {
        blanksAndSucesses.push("_");
    }
    //Change HNTL TO CHANGE GAME ROUND CONDITONS 
    document.getElementById("wordToGuess").innerHTML = blanksAndSucesses.join(" ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;

    console.log(selectWord);
    console.log(lettersWord);
    console.log(numBlanks);
    console.log(blanksAndSucesses);
}

function checkLetters(letter) {
    //check if letter exists in word
    var isLetterInWord = false;
    for (var i = 0; i < numBlanks; i++) {
        if (selectWord[i] == letter) {
            isLetterInWord = true;

        }
    }
    if (isLetterInWord) {
        for (var i = 0; i < numBlanks; i++) {
            if (selectWord[i] == letter) {
                blanksAndSucesses[i] = letter;
            }

        }


    } else {
        wrongLetter.push(letter);
        guessesLeft--
    }
    console.log(blanksAndSucesses);

}

function roundComplete() {
    console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses left" + numGuesses);

document.getElementById("numGuesses").innerHTML = guessesLeft;
document.getElementById("wordToGuess").innerHTML = blanksAndSucesses.join(" ");
document.getElementById("wrongGuesses").innerHTML = wrongGuesses.join(" ");


if (lettersWord.toString() == blanksAndSucesses.toString()) {
    
            winCount++;
            alert("You Won!");
            document.getElementById("winCounter").innerHTML = winCount;

            startGame();
}
else if (guessesLeft == 0) {
                lossCount++;
                alert("You Lost!");
                document.getElementById("lossCounter").innerHTML = lossCount;
                startGame();
            }
}
    



//Main process

//initaites code for first time
startGame();


//registering key clicks 
document.onkeyup = function (event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();

    //Testing
    console.log(letterGuessed);

}
