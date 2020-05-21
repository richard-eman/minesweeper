document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [
    // row 1
    { row: 1, col: 1, isMine: false, hidden: true},
    { row: 1, col: 2, isMine: false, hidden: true},
    { row: 1, col: 3, isMine: false, hidden: true},
    { row: 1, col: 4, isMine: true, hidden: true},
    { row: 1, col: 5, isMine: true, hidden: true},

    // row 2
    { row: 2, col: 1, isMine: false, hidden: true},
    { row: 2, col: 2, isMine: false, hidden: true},
    { row: 2, col: 3, isMine: false, hidden: true},
    { row: 2, col: 4, isMine: false, hidden: true},
    { row: 2, col: 5, isMine: false, hidden: true},

    // row 3
    { row: 3, col: 1, isMine: false, hidden: true},
    { row: 3, col: 2, isMine: false, hidden: true},
    { row: 3, col: 3, isMine: false, hidden: true},
    { row: 3, col: 4, isMine: false, hidden: true},
    { row: 3, col: 5, isMine: false, hidden: true},

    // row 4
    { row: 4, col: 1, isMine: false, hidden: true},
    { row: 4, col: 2, isMine: false, hidden: true},
    { row: 4, col: 3, isMine: false, hidden: true},
    { row: 4, col: 4, isMine: false, hidden: true},
    { row: 4, col: 5, isMine: true, hidden: true},

    // row 5
    { row: 5, col: 1, isMine: false, hidden: true},
    { row: 5, col: 2, isMine: false, hidden: true},
    { row: 5, col: 3, isMine: true, hidden: true},
    { row: 5, col: 4, isMine: true, hidden: true},
    { row: 5, col: 5, isMine: false, hidden: true},
  ]
}
function startGame () {
  var currentCell
  console.group ("startGame() begin")
  console.log ("Cell amount: " + board.cells.length)
  
  for (i = 0; i < board.cells.length; i++) {
    currentCell = board.cells[i]
    console.group("Loop pass: " + i)
      console.log ("cell in:")
      console.log (currentCell)
      currentCell.surroundingMines = countSurroundingMines (currentCell)
      console.log ("cell out:")
      console.log (currentCell)
    console.groupEnd()
  }
  console.groupEnd ()
  // document.addEventListener(click, checkForWin)
  // document.addEventListener(contextmenu, checkForWin)

  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')

}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  console.group ("countSurroundingMines() start:")
  var surroundingCells = lib.getSurroundingCells (cell.row, cell.col)
  console.log ("surroundingCells")
  console.log (surroundingCells)
  var surroundingMines = surroundingCells.filter (surroundingCells => surroundingCells.isMine == true)

  console.log ("surroundingMines")
  console.log (surroundingMines)
  console.log ("surroundingMines.length")
  console.log (surroundingMines.length)
  console.groupEnd()
  
  return (surroundingMines.length)
}

