

// GLOBAL VARIABLES (Accessible by all functions)
// ==================================================================================================

// Array of Word Options (all lowercase)
var wordsOptions = ["lasso", "gun", "horse", "tumbleweed", "hay", "boots", "wagon"];

var selectedWord = "";
// This will break the solution into individual letters to be stored in array.
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

// Game counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

// FUNCTIONS (These are bits of code that we will call upon to run when needed)
// =========================================================================================
function startGame() {
  selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)]

  lettersInWord = selectedWord.split("");
  numBlanks = lettersInWord.length;


  guessesLeft = 9;
  wrongLetters = [];
  blanksAndSuccesses = [];

  for (var i = 0; i < numBlanks; i++) {
    blanksAndSuccesses.push("_");
  }

  document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join("_");
  document.getElementById("numGuesses").innerHTML = guessesLeft;
  document.getElementById("winCounter").innerHTML = winCount;
  document.getElementById("lossCounter").innerHTML = lossCount;
}

function checkLetters(letter) {
  var isLetterInWord = false;
  for (var i = 0; i < numBlanks; i++) {
    if (selectedWord[i] == letter) {
      isLetterInWord = true;

    }
  }
  if (isLetterInWord) {
    for (var i = 0; i = numBlanks; i++) {
      if (selectedWord[i] == letter) {
        blanksAndSuccesses[i] = letter;
      }
    }
  }
else{

  wrongLetters.push(letter);
  guessesLeft--
}
function roundComplete(){
  console.log("Win Count: " + winCount + "| Loss Count :" + lossCount + " | Guesses Left:" +  guessesLeft);
  
  document.getElementById("guessesLeft").innerHTML = guessesLeft;
  document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.toString();
  document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");




  if(lettersInWord.toString() == blanksAndSuccesses.join(" ")) {
    winCount++;
    alert("You won!");

    document.getElementById("winCounter").innerHTML = winCount;
    startGame();
  }
else  {
  lossCount++;
  alert("You Lost!");

  document.getElementById("lossCounter").innerHTML = lossCount;
  startGame();
}


}
}


startGame();


//register key clicks


document.onkeyup = function (event) {
  var letterGuessed = String.fromCharCode(event.keyCode).toLocaleLowerCase();
  checkLetters(letterGuessed);
roundComplete();
}