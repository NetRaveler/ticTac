let gameDisplay = document.getElementById("gameDisplay");
let xMarker = "x"
let oMarker = "o";
let gameBoard = [xMarker, xMarker, oMarker, xMarker, xMarker, xMarker, xMarker, xMarker, xMarker,];

/* Draws argument contents when passed an array */
function draw(gameBoard) {
    for (i = 0; i < gameBoard.length; i++) {

        document.getElementById("bp" + i).innerHTML = gameBoard[i];

    };
};

function mark(e) {
    console.log("I am clicked");
    console.log(e.target.id);
}
/* create methods to manipulate gameBoard Array.
   tie event listeners to those methods
   */

/* EVENT LISTENERS */
let bp0 = document.getElementById("bp0");
let bp1 = document.getElementById("bp1");
let bp2 = document.getElementById("bp2");
let bp3 = document.getElementById("bp3");
let bp4 = document.getElementById("bp4");
let bp5 = document.getElementById("bp5");
let bp6 = document.getElementById("bp6");
let bp7 = document.getElementById("bp7");
let bp8 = document.getElementById("bp8");
bp0.addEventListener("click", mark);
bp1.addEventListener("click", mark);
bp2.addEventListener("click", mark);
bp3.addEventListener("click", mark);
bp4.addEventListener("click", mark);
bp5.addEventListener("click", mark);
bp6.addEventListener("click", mark);
bp7.addEventListener("click", mark);
bp8.addEventListener("click", mark);



/* Call functions for testing */
draw(gameBoard);