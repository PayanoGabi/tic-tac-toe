//On load button changes
window.onload = function() {

document.querySelector("#whosTurnDiv").style.display = 'none';
document.getElementsByClassName('reset-btn')[0].innerHTML = 'Start Game';

document.getElementsByClassName('game-board')[0].addEventListener("click", () => {
document.getElementsByClassName('reset-btn')[0].innerHTML = 'Reset';
document.querySelector("#whosTurnDiv").style.display = 'block';
});
}

// HTML Elements
const statusDiv = document.querySelector('.stat-div');
const resetDiv = document.querySelector('.reset-btn');
const cellDivs = document.querySelectorAll('.cell');

// game constants
const xSymbol = '×';
const oSymbol = '○';

// game variables
let gameIsLive = true;
let xIsNext = true;


// functions
const letterToSymbol = (letter) => letter === 'x' ? xSymbol : oSymbol;

const handleWin = (letter) => {
  gameIsLive = false;
  if (letter === 'x') {
    statusDiv.innerHTML = `${letterToSymbol(letter)} has won!`;
  } else {
    statusDiv.innerHTML = `<span>${letterToSymbol(letter)} has won!</span>`;
  }
};

const checkGameStatus = () => {
  const topLeft = cellDivs[0].classList[1];
  const topMiddle = cellDivs[1].classList[1];
  const topRight = cellDivs[2].classList[1];
  const middleLeft = cellDivs[3].classList[1];
  const middleMiddle = cellDivs[4].classList[1];
  const middleRight = cellDivs[5].classList[1];
  const bottomLeft = cellDivs[6].classList[1];
  const bottomMiddle = cellDivs[7].classList[1];
  const bottomRight = cellDivs[8].classList[1];

  // check winner
  if (topLeft && topLeft === topMiddle && topLeft === topRight) {
    handleWin(topLeft);
    cellDivs[0].classList.add('won');
    cellDivs[1].classList.add('won');
    cellDivs[2].classList.add('won');
  } else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) {
    handleWin(middleLeft);
    cellDivs[3].classList.add('won');
    cellDivs[4].classList.add('won');
    cellDivs[5].classList.add('won');
  } else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
    handleWin(bottomLeft);
    cellDivs[6].classList.add('won');
    cellDivs[7].classList.add('won');
    cellDivs[8].classList.add('won');
  } else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
    handleWin(topLeft);
    cellDivs[0].classList.add('won');
    cellDivs[3].classList.add('won');
    cellDivs[6].classList.add('won');
  } else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
    handleWin(topMiddle);
    cellDivs[1].classList.add('won');
    cellDivs[4].classList.add('won');
    cellDivs[7].classList.add('won');
  } else if (topRight && topRight === middleRight && topRight === bottomRight) {
    handleWin(topRight);
    cellDivs[2].classList.add('won');
    cellDivs[5].classList.add('won');
    cellDivs[8].classList.add('won');
  } else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
    handleWin(topLeft);
    cellDivs[0].classList.add('won');
    cellDivs[4].classList.add('won');
    cellDivs[8].classList.add('won');
  } else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
    handleWin(topRight);
    cellDivs[2].classList.add('won');
    cellDivs[4].classList.add('won');
    cellDivs[6].classList.add('won');
  } else if (topLeft && topMiddle && topRight && middleLeft && middleMiddle && middleRight && bottomLeft && bottomMiddle && bottomRight) {
    gameIsLive = false;
    statusDiv.innerHTML = 'Game is tied!';
  } else {
    xIsNext = !xIsNext;
    if (xIsNext) {
      statusDiv.innerHTML = `<span id='playerIconTurn'>${xSymbol}</span><br> is next`;
    } else {
      statusDiv.innerHTML = `<span id='playerIconTurn'>${oSymbol}</span><br><span> is next</span>`;
    }
  }
};


// event Handlers
const handleReset = () => {
  xIsNext = true;
  statusDiv.innerHTML = `<span id='playerIconTurn'>${xSymbol}</span> <br>is next`;
  for (const cellDiv of cellDivs) {
    cellDiv.classList.remove('x');
    cellDiv.classList.remove('o');
    cellDiv.classList.remove('won');
  }
  gameIsLive = true;
};

const handleCellClick = (e) => {
  const classList = e.target.classList;

  if (!gameIsLive || classList[1] === 'x' || classList[1] === 'o') {
    return;
  }

  if (xIsNext) {
    classList.add('x');
    checkGameStatus();
  } else {
    classList.add('o');
    checkGameStatus();
  }
};


// event listeners
resetDiv.addEventListener('click', handleReset);

for (const cellDiv of cellDivs) {
  cellDiv.addEventListener('click', handleCellClick)
}








// var player;
// var nextTurn = true;
// var xPlayer = "x";
// var oPlayer = "o";
//
// const winner = false;
// const tieMessage = () => `Tie!`;
// const cellPieces = document.querySelectorAll('.cell');
// const statusDiv = document.querySelector('.status')
//
//
// let gameOn = true;
// let currentGame = ["","","","","","","","",""]
//
//
// var gameArray = Array.from(cellPieces);
//
// const playerSymbol = (letter) => letter === 'x' ? xPlayer : oPlayer;
//
//
// const handleWinner = (letter) => {
//   gameOn = false;
//   if (letter === 'x') {
//     statusDiv.innerHTML = "(playerSymbol) + has won!";
//   } else {
//     statusDiv.innerHTML = "(playerSymbol) + has won!";
//   }
// };
//
// const updateGame = () => {
//   const one = cellPieces[0].classList[1];
//   const two = cellPieces[1].classList[1];
//   const three = cellPieces[2].classList[1];
//   const four = cellPieces[3].classList[1];
//   const five = cellPieces[4].classList[1];
//   const six = cellPieces[5].classList[1];
//   const seven = cellPieces[6].classList[1];
//   const eight = cellPieces[7].classList[1];
//   const nine = cellPieces[8].classList[1];
//
//       if (one && one === two && one === three){
//         console.log('winner');//horizontal win top
//       } else if (four  && four === five && four === six){
//           console.log('winner'); //horizontal win mid
//       } else if (seven && seven === eight && seven  === nine){
//           console.log('winner'); //horizontal win bottom
//       } else if (one && one  === four  && one === seven){
//           console.log('winner'); //vertical win
//       } else if (two  && two  === five  && two  === eight){
//           console.log('winner');//vertical win
//       } else if (three  && three  === six  && three  === nine){
//            console.log('winner'); //vertical win
//       } else if (one  && one  === five  && one  === nine){
//           console.log('winner'); // diagonal win
//       } else if (three  && three  === five  && three === seven){
//            console.log('winner');//diagonal win
//       }  else if (one && two && three && four && five && six && seven && eight && nine ){
//         gameOn= false;
//      statusDiv.innerHTML = 'Game is tied!';
//    } else {
//      nextTurn= !nextTurn;
//      if (nextTurn) {
//        statusDiv.innerHTML = `${xPlayer} is next`;
//      } else {
//        statusDiv.innerHTML = `<span>${oPlayer} is next</span>`;
//      }
//    }
//  };
//
// //when one player goes change to next player as long as winner is false
// //gameOn === true || gameArray[index] === this ||
//
//
// const cellClicked = (e) => {
//   const classList = e.target.classList;
//
//   if (!gameOn || classList[1] === 'x' || classList[1] === 'o') {
//     return;
//   }
//
//   if (nextTurn) {
//     classList.add('x');
//     updateGame();
//   } else {
//     classList.add('o');
//     updateGame();
//   }
// };
//
//
//
//
//
// // check to see if anyone has won or if there is a tie
// // function checkBoardStat() {
// //
// // }
//
//
//
//
// // gameCell.addEventListener('click', cellClicked)
// //
// // function cellClicked(){
// //
// // }
//
//
// // let gameBoxes = ["","","","","","","","","",];
//
// let goTime = document.querySelector('.reset-btn');
//
//
// goTime.addEventListener('click', resetGame);
//
// function resetGame() {
//
//   if (goTime.clicked = true){
//       // let gameCell = document.querySelectorAll('.cell');
//       cellPieces.forEach(function(i) {
//
//       var cellIndex = cellPieces.item(i);
//
//           i.innerText = "";
//         // var  = gameArray[].innerHTML = "";
//
//   });
//
//   }
//
// }
//
//
//
// // create gameCells to target nodelist elements for gameboard
//
// function gamePlay(){
//   // window.addEventListener('load', () => {
//   //
//   cellClicked();
//   //
//   updateGame();
//
//   resetGame();
//
//   handleWinner();
//
//   // weHaveAWinner();
// }
// gamePlay()
//
//
// for (cellPiece of cellPieces){
//   cellPiece.addEventListener('click', cellClicked)
// }
//
// // gameArray.forEach((item, i) => {
// //   if (cellPieces.clicked == true) {
// //     console.log('hi');
// //   }
// //   else if (cellPieces.clicked == false) {
// //     console.log('bye')
// //
// //   }
// // });
//
//
//
// /*
// If we get to here we know that the no one won the game yet,
// and that there are still moves to be played, so we continue by changing the current player.
// */
//
//
// // function weHaveAWinner() {
// //
// //   let gameCell = document.querySelectorAll('.cell').forEach((item, i) => {
// //     item.addEventListener('click', event => {
// //
// //
// //       for (var i = 0; i < gameArray.length; i++) {
// //         (function (index) {
// //           gameArray[index].addEventListener("click", function () {
// //
// //                if (player == true){
// //                  // var node = gameArray[index].id;
// //                  const content = gameArray[index].innerHTML = (xPlayer);
// //                  player = false;
// //                } else {
// //                  // var node = gameArray[index].id;
// //                  const content = gameArray[index].innerHTML = (oPlayer);
// //                  player = true;
// //                }
// //
// //
// //               if (gameArray[0].innerHTML && gameArray[0].innerHTML === gameArray[1].innerHTML && gameArray[0].innerHTML === gameArray[2].innerHTML){
// //                 console.log('winner');//horizontal win top
// //               } else if (gameArray[3].innerHTML  && gameArray[3].innerHTML  === gameArray[4].innerHTML && gameArray[3].innerHTML === gameArray[5].innerHTML){
// //                 console.log('winner'); //horizontal win mid
// //               } else if (gameArray[6].innerHTML && gameArray[6].innerHTML === gameArray[7].innerHTML  && gameArray[6].innerHTML  === gameArray[8].innerHTML){
// //                 console.log('winner'); //horizontal win bottom
// //               } else if (gameArray[0].innerHTML  && gameArray[0].innerHTML  === gameArray[3].innerHTML  && gameArray[0].innerHTML === gameArray[6].innerHTML){
// //                 console.log('winner'); //vertical win
// //               } else if (gameArray[1].innerHTML  && gameArray[1].innerHTML  === gameArray[4].innerHTML  && gameArray[1].innerHTML  === gameArray[7].innerHTML){
// //                 console.log('winner');//vertical win
// //               } else if (gameArray[2].innerHTML  && gameArray[2].innerHTML  === gameArray[5].innerHTML  && gameArray[2].innerHTML  === gameArray[8].innerHTML){
// //                console.log('winner'); //vertical win
// //              } else if (gameArray[0].innerHTML  && gameArray[0].innerHTML  === gameArray[4].innerHTML  && gameArray[0].innerHTML  === gameArray[8].innerHTML){
// //                 console.log('winner'); // diagonal win
// //               } else if (gameArray[2].innerHTML  && gameArray[2].innerHTML  === gameArray[4].innerHTML  && gameArray[2].innerHTML === gameArray[6].innerHTML){
// //                console.log('winner');//diagonal win
// //              }  else if (gameArray[0].innerHTML && gameArray[1].innerHTML && gameArray[2].innerHTML && gameArray[3].innerHTML && gameArray[4].innerHTML && gameArray[5].innerHTML && gameArray[6].innerHTML && gameArray[7].innerHTML && gameArray[8].innerHTML ){
// //                 alert(tieMessage);
// //               }
// //
// //
// //
// //
// //           }, false);
// //           return;
// //       })(i);
// //   }
// //
// //   })
// //
// // })
// //
// // }
//
//
// // function gameState(){
// //
// //   let gameCell = document.querySelectorAll('.cell').forEach((item, i) => {
// //     item.addEventListener('click', event => {
// //
// //
// //
// //       for (var i = 0; i < gameArray.length; i++) {
// //         (function (index) {
// //           gameArray[index].addEventListener("click", function () {
// //                   if (gameArray[index].innerHTML == (oPlayer) || gameArray[index].innerHTML == (xPlayer)){
// //
// //
// //                     }
// //
// //           }, false);
// //           return;
// //       })(i);
// //   }
// //
// //   })
// //
// //   });
// //
// //   }
//
//
// // function myFunction(event) {
// //   alert(event.target.nodeName);
// // }
