//declaring constants

const statusDiv = document.querySelector('.status'); // to change game status div
const resetDiv = document.querySelector('.reset-button'); // to refresh game
// const areaCellDivs = document.querySelectorAll('.area-cell');
 //target all cells


// function expression - storing the function in a variable to be evoked later -remember no hoisting


// creating variables that won't change

const xChar = "×";
const oChar = "⚬";


// game variables & main boolean factors

let liveGame = true;
let nextTurn = true;
let winningSymbol = null;

const letterToSymbol = (letter) => letter === 'x' ? xChar : oChar;

//declaring the winner
const winningPlay = (letter) => {
    liveGame = false;
    winningSymbol = letter;
    if (winningSymbol === 'x') {
      statusDiv.innerHTML = `${letterToSymbol(winningSymbol)}has won`;
    } else {
      statusDiv.innerHTML = `<span>${letterToSymbol(winningSymbol)} has won</span>`;
    }
  };


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


//Winning possibilites logic

    if (areaCellOne && areaCellOne === areaCellTwo && areaCellOne === areaCellThree){
      winningPlay(areaCellOne); //horizontal win top
    } else if (areaCellFour && areaCellFour === areaCellFive && areaCellFour === areaCellSix){
      winningPlay(areaCellFour); //horizontal win mid
    } else if (areaCellSeven && areaCellSeven === areaCellEight && areaCellSeven === areaCellNine){
      winningPlay(areaCellSeven); //horizontal win bottom
    } else if (areaCellOne && areaCellOne === areaCellFour && areaCellOne === areaCellSeven){
      winningPlay(areaCellOne); //vertical win
    } else if (areaCellTwo && areaCellTwo === areaCellFive && areaCellTwo === areaCellEight){
      winningPlay(areaCellTwo);//vertical win
    } else if (areaCellThree && areaCellThree === areaCellSix && areaCellThree === areaCellNine){
      winningPlay(areaCellThree); //vertical win
    } else if (areaCellOne && areaCellOne === areaCellFive && areaCellOne === areaCellNine){
      winningPlay(areaCellOne); // diagonal win
    } else if (areaCellThree && areaCellThree === areaCellFive && areaCellThree === areaCellSeven){
     winningPlay(areaCellThree);//diagonal win

//if all game cells are occupied and no winner, creat tie

    } else if (areaCellOne && areaCellTwo && areaCellThree && areaCellFour && areaCellFive && areaCellSix && areaCellSeven && areaCellEight && areaCellNine){
        liveGame = false;
        statusDiv.innerHTML = 'Tie!';
    } else {
        nextTurn = !nextTurn;
        if (nextTurn) {
            statusDiv.innerHTML = `${xChar} is next`;
        } else {
            statusDiv.innerHTML = `<span>${oSymbol} is next </span>`;
       }

      }
    };
//reset game
const reseting = () => {
  nextTurn = true;
  statusDiv.innerHTML = `${xChar} is next`;
  winningSymbol = null;
  for (const cell of areaCellDivs) {
    cell.classList.remove('x');
    cell.classList.remove('o');
  }
  liveGame = true;
};

//if it is not x's turn it needs to be o's turn

const gamePlay = (e) => {
    const classList = e.target.classList;
    if (classList[1] === 'x' || classList[1] === 'o') {
        return;
    }

    if (nextTurn) {
        e.target.classList.add('x');
        updatedGameStatus();
        // nextTurn = !nextTurn;

     } else {
         e.target.classList.add('o');
         updatedGameStatus();
         // nextTurn = !nextTurn;

    }
};

//when a cell is clicked display players symbol on selected area.
// for( const cell of areaCellDiv){
//     cell.addEventListener('click', gamePlay);
// }

//if it is not x's turn it needs to be o's turn

//when there are no more plays left end gamePlay

resetDiv.addEventListener('click', reseting);

for (const cell of areaCellDivs ) {
    cell.addEventListener('click', gamePlay)
  }
