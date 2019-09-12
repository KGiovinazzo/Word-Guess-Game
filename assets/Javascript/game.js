
// Create all my variables for game logic

console.log("this Hit");

//wins (number)

var win = 0;

//losses (number)

var loss = 0;

// guesses that are left (number)

var left = 10;

//letters already guessed (array)

var guess = [];

//computer choices bank (array of the alphebet)

var computerChoice = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];

// computer guess variable

var computerGuess = "";

//create a function to start/reset the game

function newGame() {

    //reset important game variables
    // How many guessesLeft back to 10

    left = 10;

    // reset the lettersAlreadyGuessed array

    guess = [];

    //write some info to the page indicating a new game has started(optional)
    //randomly choose computer guess
    var randomCompChoice = [Math.floor(Math.random() * computerChoice.length)];

    computerGuess = computerChoice[randomCompChoice]


}
//   Create onkeyup event 

document.onkeyup = function (event) {

    var userGuess = event.key;

    //on every key press you want to push the user guess into the letters guessed array

    guess.push(userGuess);

    //THIS IS YOUR WIN CONDITION!!!
    // Start if statements for your win

    if (userGuess === computerGuess) {
        // increase wins by 1
        win++;


        // start a new game using the function you wrote above
        newGame();
        // update your HTML here / wins section

        // make id = win

        // else!
        //you also want to decrement your guessesLeft variable and update HTML
    } else {
        left--;
        // print to page

    }

    //THIS IS YOUR LOSS CONDITION
    //since you are decrementing the guessesLeft on every keypress your loss condition is here

    if (left === 0) {
        //increment losses
        loss++;
         // start a new game using the function you wrote above
        newGame();
       

        // update your HTML here / wins section

        // make id = loss

    } 

}

newGame();

           //run new game function,  you start your newgame function or restart whatever you called it here should be the last thing on the page so every time a user logs in it will start a new game.  Let me know if you need help we can always do a zoom session and i can walk you through if you get stuck