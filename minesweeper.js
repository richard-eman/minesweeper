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
  document.addEventListener('click', checkForWin)
  document.addEventListener('contextmenu', checkForWin)

  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  var cellsHidden
  cellsHidden = checkCellHidden ()
  if ( cellsHidden == false ) {
    return ( lib.displayMessage ('You win!') )
  }
}

function checkCellHidden () {
  var arr = board.cells
  var hiddenCell = arr.find (arr => arr.isMine == false && arr.hidden == true)
  if (hiddenCell != undefined) {
      console.group ("checkCellHidden():")
      console.log ("There are still hidden cells which aren't mines")
      console.log (hiddenCell)
      console.groupEnd ()
    return ( true )
  }
  else {
    return ( false )
  }
}

// `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// Will return cell objects in an array. You should loop through 
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

