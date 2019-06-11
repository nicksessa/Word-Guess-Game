var wins = 0;
var losses = 0;

var strikes = 0;
var maxStrikes = 9;

var wordDisplayLettersElement = document.getElementById("word-display-letters");
var guessedLettersElement = document.getElementById("guessed-letters");
var strikeCountElement = document.getElementById("strike-count");
var winCountElement = document.getElementById("win-count");
var lossCountElement = document.getElementById("loss-count");

var visibleLetters = [];
var guessedLetters = [];

var newGame = true;
var gameOver = false;

var blinkElements = document.getElementsByClassName("blinking");
var resultLineElements = document.getElementsByClassName("result-line");

var validGuesses = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wordList = [
	"deathstar",
	"xwing",
	"skywalker",
	"yavin",
	"darthvader",
	"hansolo",
	"tiefighter",
	"tatooine"
];

var theWord = "";

function initializeScreen() {
	//get word from the wordList array above
	theWord = wordList[Math.floor(Math.random() * wordList.length)];
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
		if (i < (visibleLetters.length - 1)) {
			tempString += " "; // this simply adds a space in the letters to make it look cool
		}
	}
	wordDisplayLettersElement.textContent = tempString;
	strikes = 0;
	guessedLetters = [];
	visibleLetters = [];
	//gameOver = false;
	resultLines = "";
} // END function to initialize the screen

if (newGame) {
	initializeScreen();
}

// get input from the user and loop until the game is over

document.onkeyup = function (event) {
	var userGuess = event.key;

	if (!gameOver) {
		if (validGuesses.includes(userGuess) && !guessedLetters.includes(userGuess)) {
			checkGuess(userGuess);
		}
	} else {
		initializeScreen();
	}
}





function checkGuess(userGuess) {
	if (!gameOver) {
		var userGuess = event.key;
		console.log("user pressed: " + userGuess);
		// first check to see if the key pressed is a valid key:
		if (validGuesses.includes(userGuess)) {
			//if so add the letter to the list of guessed letters 
			guessedLetters.push(userGuess);
			console.log("user entered a valid letter!");
			// after adding the letter display it by looping through the array
			var tempString = "";
			for (i = 0; i < guessedLetters.length; i++) {
				tempString += guessedLetters[i];
				if (i < (guessedLetters.length - 1)) tempString += " ";
			}
			guessedLettersElement.textContent = tempString;

			// Next, check to see if the key pressed is a letter that matches theWord

			var foundIt = false;
			// loop through the word 
			for (var i = 0; i < theWord.length; i++) {
				// check each character in theWord
				if (theWord.charAt(i) == userGuess) {
					foundIt = true;
					console.log("we have a match: " + userGuess);
					// we found a letter and so mark that position as true in the visibleLetters array
					visibleLetters[i] = true;
				}
			}

			// OK, if the letter is not found then add another strike (error)
			if (!foundIt) {
				strikes++;
			}
			if (strikes >= maxStrikes) {
				gameOver = true;
				losses++;
				resultLines = "You Lose!";
			}
			// if visibleLetters has no false values in it, it means that you win!
			if (!visibleLetters.includes(false)) {
				wins++;
				resultLines = "You Win!";
				gameOver = true;
			}
			// now we have to update the screen
			//updateScreen(userGuess)

			// update the visible letters
			// if visibleLetters[i] is true, then display the letter of the word at that position
			// else display an underscore
			var tempString = ""
			for (var i = 0; i < visibleLetters.length; i++) {
				tempString += ((visibleLetters[i]) ? theWord.charAt(i).toUpperCase() : "_" );
				if (i < (visibleLetters.length - 1)) tempString += " ";
			}
			wordDisplayLettersElement.textContent = tempString;

			// display the number of strikes and max strikes
			tempString = strikes + " / " + maxStrikes;
			// add some padding to the string
			for (var i = tempString.length; i < 32; i++) {
				tempString += " ";
			}
			strikeCountElement.textContent = tempString;

		}

		// if match, update the screen like so: wordDisplayLettersElement.textContent = tempString;
		// if no match, increment strikes.  if 9 strikes, end the game and display: YOU LOSE!  (play Darth Vader Theme.)
		// if win, then display: YOU WIN! and then play happy rebel theme
	}
}

function updateScreen(_userGuess) {


}