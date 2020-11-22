var player;
var nextTurn;

const winner = false;
const gameOn = true;

//when playerOne isnt equal to true it will equal to false and switch to symbol.
var xPlayer = "x";
var oPlayer = "o";



const cellPieces = document.querySelectorAll('.cell');
//
// for (const cell of cellPieces) {
//   cell.addEventListener('click', getGoing);
//
// }
  //
  // function getGoing() {
    // const cellPieces = (e) => {
    // const classList = e.target.classList;
    // document.querySelectorAll('.cell').onclick = function() {
    // if (classList[1] === 'x' || classList[1] === 'o') {
    //     return;
    // }  if (player) {
    //       e.target.classList.add(xPlayer);
    //       console.log('xPlayer');
    //       // updatedGameStatus();
    //       // nextTurn = !nextTurn;
    //
    //    } else {
    //        e.target.classList.add(oPlayer);
    //        console.log('oPlayer');
    //        // updatedGameStatus();
    //        // nextTurn = !nextTurn;
    //
    //   }
    // }
  // };
  //
  //   // var newElement = document.createElement('p');
  //   // statusDisplay.innerHTML = switchPlayer();
  //   // newElement.textContent = (player)
  //   // console.log(newElement);
//   //
//   // }
// };






let currentGame = ["","","","","","","","","",];

var gameArray = Array.from(cellPieces);

// function myFunction(event) {
//   alert(event.target.nodeName);
// }
//
function switchPlayer(player) {

        nextTurn = !nextTurn;
        if (nextTurn) {
          nextTurn = false;
          player = (xPlayer);
        } else {
          nextTurn = true;
          player = oPlayer;
        }
}


//when one player goes change to next player as long as winner is false
//gameOn === true || gameArray[index] === this ||

function cellClicked() {

let gameCell = document.querySelectorAll('.cell').forEach((item, i) => {
  item.addEventListener('click', event => {

    for (var i = 0; i < gameArray.length; i++) {
      (function (index) {
        gameArray[index].addEventListener("click", function () {
                if (player == true){
                  // var node = gameArray[index].id;
                  const content = gameArray[index].innerHTML = (xPlayer);
                  player = false;
                } else {
                  // var node = gameArray[index].id;
                  const content = gameArray[index].innerHTML = (oPlayer);
                  player = true;

                }

        }, false);
        return;
    })(i);
}

})

});

}





// check to see if anyone has won or if there is a tie
function checkBoardStat() {

}




// gameCell.addEventListener('click', cellClicked)
//
// function cellClicked(){
//
// }


// let gameBoxes = ["","","","","","","","","",];

let goTime = document.querySelector('.reset-btn');


goTime.addEventListener('click', resetGame);

function resetGame() {

  if (goTime.clicked = true){
      // let gameCell = document.querySelectorAll('.cell');
      cellPieces.forEach(function(i) {

      var cellIndex = cellPieces.item(i);

          i.innerText = "";
        // var  = gameArray[].innerHTML = "";

  });
  }





}




// create gameCells to target nodelist elements for gameboard

function gamePlay(){


  // window.addEventListener('load', () => {
  //
  cellClicked();
  //
  switchPlayer();

  resetGame();

  //
  //
  // checkBoardStatus();
}

gamePlay()



// gameArray.forEach((item, i) => {
//   if (cellPieces.clicked == true) {
//     console.log('hi');
//   }
//   else if (cellPieces.clicked == false) {
//     console.log('bye')
//
//   }
// });
