var wins = 0;
var losses = 0;

var errors = 0;
var maxErrors = 9;

var wordDisplayLettersElement = document.getElementById("word-display-letters");
var guessedLettersElement = document.getElementById("guessed-letters");
var errorCountElement = document.getElementById("error-count");
var winCountElement = document.getElementById("win-count");
var lossCountElement = document.getElementById("loss-count");

var visibleLetters = [];
var guessedLetters = [];

var newGame = true;

var blinkElements = document.getElementsByClassName("blinking");
var resultLineElements = document.getElementsByClassName("result-line");

var validGuesses = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];

var wordList = [
"deathstar",
"xwing",
"skywalker",
"yavin",
"darthvader",
"hansolo",
"tiefighter",
"tatooine"
]

function initializeScreen() {

//get word from the wordList array above

var theWord = wordList[Math.floor(Math.random() * wordList.length)];
console.log("the word is: " + theWord);

// set the array visibleLetters to contain all false values for each element in the array

for (var i = 0; i < theWord.length; i++) {
	visibleLetters[i] = false;
}


// loop through the word to build the underscores for the screen.
// store the underscores in the tempString variable.
// also set the word to be all upper case


var tempString = "";
for (var i = 0; i < visibleLetters.length; i++) {
	// if visibleLetters[i] = false, then visibleLetters[i] = "_"
	// else visibleLetters[i] = the uppercase letter of the word
	tempString += ((visibleLetters[i]) ? theWord.charAt(i).toUpperCase() : "_");
	if (i < (visibleLetters.length - 1)) tempString += " ";  // this simply adds a space in the letters to make it look cool
}
wordDisplayLettersElement.textContent = tempString;


errors = 0;
guessedLetters = [];
visibleLetters = [];
gameOver = false;
resultLines = "";

}  // END function to initialize the screen


if (newGame) {
	initializeScreen();
}

// get input from the user

document.onkeyup = function(event) {
	var userGuess = event.key;

// check to see if the key pressed is a letter that matches
console.log("user pressed: " userGuess);
// first check to see if the key pressed is a valid key:

if (validGuesses.includes(userGuess) {
	//if so add the letter to the list of guessed letters 
}



// if match, update the screen like so: wordDisplayLettersElement.textContent = tempString;
// if no match, increment strikes.  if 9 strikes, end the game and display: YOU LOSE!  (play Darth Vader Theme.)
// if win, then display: YOU WIN! and then play happy rebel theme

}


function checkGuess(char) {

}



