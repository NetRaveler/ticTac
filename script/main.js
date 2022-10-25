let gameDisplay = document.getElementById("gameDisplay");
let xMarker = "x"
let oMarker = "o";
let blankMarker = "";
let gameBoard = [blankMarker, blankMarker, blankMarker, blankMarker, blankMarker, blankMarker, blankMarker, blankMarker, blankMarker];
/* TODO
- computer selects vacant space correctly
- computer random, easy, hard mode
- multiplayer mode
- 
/* Draws argument contents when passed an array */
function draw(gameBoard) {
    for (i = 0; i < gameBoard.length; i++) {

        document.getElementById("boardPiece" + i).innerHTML = gameBoard[i];

    };
};
// When a board piece is clicked change that board piece to x by defualt
function mark(e) {

    // console log the ID of the board piece clicked
    console.log("you clicked on gamePiece: " + e.target.id);

    // Update gameBoard array
    // get the value of the boardPiece that was clicked by slicing off the last number of the ID string
    let identifierNumber = e.target.id.slice(-1);
    // console.log(identifierNumber);

    //Update the array with default value of xMarker
    if (gameBoard[identifierNumber] == xMarker || gameBoard[identifierNumber] == oMarker) {
        alert("That space has already been played!");
        return;
    }
    gameBoard[identifierNumber] = xMarker;
    draw(gameBoard);
    if (checkWin() == true) {

        checkWin();
    } else {
        computerPlayer();
    }


    // Draw the Game board
    draw(gameBoard);
    checkWin();

}
// generate and return a random number between 0 and 8 (9 possible numbers corresponding to the tic tac toe grid)
function randomGen() {
    let ranNum = Math.round(Math.random() * 8);
    return ranNum;
}
// determine if space is available
function findAvailable(spaceNumber) {
    if (gameBoard[spaceNumber] == xMarker || gameBoard[spaceNumber == oMarker]) {
        draw(gameBoard);
        return false;
    } else {
        draw(gameBoard);
        return true;
    }
}
// make a basic computer player
function computerPlayer() {
    let computerSelection = randomGen();
    console.log("computer Selection: " + computerSelection);
    // select a random number between 0 and 8 that isn't already selected
    while (findAvailable(computerSelection) == false) {
        computerSelection = randomGen();
        console.log("I am finding a number: " + computerSelection)

    }

    gameBoard[computerSelection] = oMarker;
    draw(gameBoard);
    checkWin();

}

function resetGameboard() {
    gameBoard = [blankMarker, blankMarker, blankMarker, blankMarker, blankMarker, blankMarker, blankMarker, blankMarker, blankMarker]
    draw(gameBoard);
}

function winConditionPlayer() {
    alert("You Win!");
    resetGameboard();
    return;
}
function winConditionCpu() {
    alert("CPU Wins!");
    resetGameboard();
    return;
}
// Check for a win condition
function checkWin() {
    // if there are three x's in a row trigger win condition
    if (gameBoard[0] == 'x' && gameBoard[1] == 'x' && gameBoard[2] == 'x') {
        draw(gameBoard);
        setTimeout(winConditionPlayer, 100);
        return true;
    } else if (gameBoard[3] == 'x' && gameBoard[4] == 'x' && gameBoard[5] == 'x') {
        draw(gameBoard);
        setTimeout(winConditionPlayer, 100);
        return true;
    } else if (gameBoard[6] == 'x' && gameBoard[7] == 'x' && gameBoard[8] == 'x') {
        draw(gameBoard);
        setTimeout(winConditionPlayer, 100);
        return true;
    } else if (gameBoard[0] == 'x' && gameBoard[4] == 'x' && gameBoard[8] == 'x') {
        draw(gameBoard);
        setTimeout(winConditionPlayer, 100);
        return true;
    } else if (gameBoard[2] == 'x' && gameBoard[4] == 'x' && gameBoard[6] == 'x') {
        draw(gameBoard);
        setTimeout(winConditionPlayer, 100);
        return true;
    } else if (gameBoard[2] == 'x' && gameBoard[5] == 'x' && gameBoard[8] == 'x') {
        draw(gameBoard);
        setTimeout(winConditionPlayer, 100);
        return true;
    } else if (gameBoard[0] == 'o' && gameBoard[1] == 'o' && gameBoard[2] == 'o') {
        draw(gameBoard);
        setTimeout(winConditionCpu, 100);
        return true;
    } else if (gameBoard[3] == 'o' && gameBoard[4] == 'o' && gameBoard[5] == 'o') {
        draw(gameBoard);
        setTimeout(winConditionCpu, 100);
        return true;
    } else if (gameBoard[6] == 'o' && gameBoard[7] == 'o' && gameBoard[8] == 'o') {
        draw(gameBoard);
        setTimeout(winConditionCpu, 100);
        return true;
    } else if (gameBoard[0] == 'o' && gameBoard[4] == 'o' && gameBoard[8] == 'o') {
        draw(gameBoard);
        setTimeout(winConditionCpu, 100);
        return true;
    } else if (gameBoard[2] == 'o' && gameBoard[4] == 'o' && gameBoard[6] == 'o') {
        draw(gameBoard);
        setTimeout(winConditionCpu, 100);
        return true;
    } else if (gameBoard[2] == 'x' && gameBoard[5] == 'x' && gameBoard[8] == 'x') {
        draw(gameBoard);
        setTimeout(winConditionCpu, 100);
        return true;
    }
}


/* EVENT LISTENERS */
let boardPiece0 = document.getElementById("boardPiece0");
let boardPiece1 = document.getElementById("boardPiece1");
let boardPiece2 = document.getElementById("boardPiece2");
let boardPiece3 = document.getElementById("boardPiece3");
let boardPiece4 = document.getElementById("boardPiece4");
let boardPiece5 = document.getElementById("boardPiece5");
let boardPiece6 = document.getElementById("boardPiece6");
let boardPiece7 = document.getElementById("boardPiece7");
let boardPiece8 = document.getElementById("boardPiece8");
boardPiece0.addEventListener("click", mark);
boardPiece1.addEventListener("click", mark);
boardPiece2.addEventListener("click", mark);
boardPiece3.addEventListener("click", mark);
boardPiece4.addEventListener("click", mark);
boardPiece5.addEventListener("click", mark);
boardPiece6.addEventListener("click", mark);
boardPiece7.addEventListener("click", mark);
boardPiece8.addEventListener("click", mark);



/* Call functions for testing */
draw(gameBoard);