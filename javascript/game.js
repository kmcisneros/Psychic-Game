var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
var wins = 0;
var losses = 0;
var left = 12;
var guesses = 12;
var guessesSoFar = [];
var computerChoice = [];


var newLetter = function() {
    computerChoice = letters[Math.floor(Math.random() * letters.length)];
};

var soFar = function() {
    document.getElementById("guessessofar").innerHTML = "Guesses so far: " + guessesSoFar;
};

var guessesLeft = function() {
    document.getElementById("guessesleft").innerHTML = "Guesses Left: " + left;
};

var newGame = function() {
	guessedLetters = [];
    left = 12;
    newLetter();
    guessesLeft();
    soFar();
}

document.onkeyup = function(event) {
	var userGuess = event.key;
    left--;
    guessesSoFar.push(userGuess);
    soFar();
    guessesLeft();
    if (left > 0) {
        if (userGuess == computerChoice) {
        	wins++;
        	document.getElementById("wins").innerHTML = "Wins:" + wins;
            newGame();
        }
    } else if (left == 0) {
    	losses++;
    	document.getElementById("losses").innerHTML = "Losses:" + losses;
        newGame();
    }
};
