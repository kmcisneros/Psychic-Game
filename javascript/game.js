var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var wins = 0;
var losses = 0;
var guessesLeft = 12;
var guessesSoFar = [];
var computerGuess = [];


var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesLeftText = document.getElementById("guessesleft");
var guessesSoFar = document.getElementById("guessessofar");

document.onkeyup = function(event) {
    var playerGuess = event.key.toLowerCase;
    var computerGuess = letter [Math.floor(math.random() * letter.length)];
   }

   if (playerGuess == computerGuess) {
       wins++;
   }
   ]






  
    
}
]