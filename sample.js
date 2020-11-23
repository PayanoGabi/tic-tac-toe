
let nextTurn = true;
let gameOn = true;
let whosNext = true;




const updatedGameStatus = () => {
    const areaCellOne = areaCellDivs[0].classList[1];
    const areaCellTwo = areaCellDivs[1].classList[1];
    const areaCellThree = areaCellDivs[2].classList[1];
    const areaCellFour = areaCellDivs[3].classList[1];
    const areaCellFive = areaCellDivs[4].classList[1];
    const areaCellSix = areaCellDivs[5].classList[1];
    const areaCellSeven = areaCellDivs[6].classList[1];
    const areaCellEight = areaCellDivs[7].classList[1];
    const areaCellNine = areaCellDivs[8].classList[1];
}


const playerOne = 'X';
const playerTwo = 'O';

// const aiplayer =
// const aiPlayer = set person option to choose which player they want to be, set aiplayer to random




const ticTacToe = new newTicTacToe();
ticTacToe.start();

function newTicTacToe(){
  const gameBoard = new Board();



  this.start = function() {
    const config = { childList: true };
    const observer = new MutationObserver(() => switchPlayer());
    board.positions.forEach((el) => observer.observe(el, config));
    switchPlayer();

    }


  function switchPlayer (board) {

    if (nextTurn == true) {

      this.takeTurn = function(){
        board.positions
        .forEach(el => el.addEventListener('click', handleTurnTaken));
      }

      function handleTurnTaken(event) {
        event.target.innerHTML = (playerOne);

      }
      gameOn = true;
      cells.innerHTML = (playerOne);
      nextTurn = false;
    }
    else if (nextTurn == false) {
      gameOn = true;
      cells.innerHTML = (playerTwo);
      nextTurn = true;
     }

  }


function Board() {
  this.positions = Array.from(document.querySelectorAll('.cell'));
  console.log(this.positions);

}

const cells = document.querySelectorAll('.cell');






// function switchPlayer () {
//   if (nextTurn == true) {
//     gameOn = true;
//     cells.innerHTML = (playerOne);
//     nextTurn = false;
//   }
//   else if (nextTurn == false) {
//     gameOn = true;
//     cells.innerHTML = (playerTwo);
//     nextTurn = true;
//    }
//
// }

//
// if (gameOn = true) {
//     switchPlayer();
//   } else if (gameOn = false) {
//      alert('Game Over');
//   }






// const refresh = document.querySelector('.reset-button').onClick = newGame(){
//     alert('herrooooo');
//
// };





let currentGame = ["","","","","","","","","",];

const tieMessage = () => `Tie!`;

const winCombos = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]

]

function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }
if (roundWon) {
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        return;
    }
}


// const handleCellClick = (e) => {
//     const classList = e.target.classList;
//     // console.log(e.target.classList);
//
//     if (classList[1] == 'playerOne' || classList[1] == 'playerTwo') {
//         return;
//
//     }
//
//     if (gameOn) {
//         e.target.classList.add(playerOne);
//         updatedGameStatus();
//
//      } else {
//          e.target.classList.add(playerTwo);
//          updatedGameStatus();
//     }
// }


//
// const cells = document.querySelectorAll('.cell')
// for (const cell of cells) {
//
//
//   }
//
// // while (gameOn) {
// //   // Make the player move. swith from player one to player platerTwo
// //    if (nextTurn = playerOne){
// //
// //    } else if (nextTurn) {
// //
// //    }
// //   // Check if the game is over.
// //   // Has the player won? Is the board full? Display an appropriate message.
// //   if (gameOver) {
// //     break;  // Break out of the loop if the game is over.
// //   }
// //   turn = !turn;
// // }
// //
// // function nextPlayer() {
// //     currentPlayer = currentPlayer === "playerOne" ? "playerTwo" : "playerOne";
// //     statusDisplay.innerHTML = currentPlayerTurn();
// // }
//
//     function handleRestartGame() {
//     gameOn = true;
//     whosNext = false;
//     gameState = ["", "", "", "", "", "", "", "", ""];
//     statusDisplay.innerHTML = currentPlayerTurn();
//     document.querySelectorAll('.cell')
//                .forEach(cell => cell.innerHTML.remove('playerOne', 'playerTwo'));
//
//
