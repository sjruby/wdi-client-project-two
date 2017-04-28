const board = require('../boardStore')
const gameRules = require('./update_rules')
// constructor function for the cell
const Cell = function Cell (xCord, yCord) {
  this.xCord = xCord
  this.yCord = yCord
  this.intialValue = Math.floor((Math.random() * 2) + 1)
}

// constructor function to create an empty board
const Board = function Board (x, y) {
  const board = new Array(x)
  for (let i = 0; i < board.length; i++) {
    board[i] = new Array(y)
  }
  return board
}

// method to initalize the board with random colors
const randomizeCellValues = function (board) {
  const result = board
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      board[x][y] = new Cell(x, y)
    }
  }
  return result
}
// this is where the board size is arbitraily set to 5x5
const randomizeBoard = function () {
  const blankCanvas = new Board(23, 23)
  board.cellsStore = randomizeCellValues(blankCanvas)
  console.log(board.cellsStore)
  // return board.boardStore
}

const updateCellValues = function (twoDimArray) {
// HUGE design flaw here, I don't know who "variablize" the 23x23
  const board = Board(23, 23)
  for (let x = 0; x < twoDimArray.length; x++) {
    for (let y = 0; y < twoDimArray[x].length; y++) {
      board[x][y] = twoDimArray[x][y]
      board[x][y].intialValue = gameRules.flipValue(twoDimArray[x][y].intialValue)
    }
  }
  console.log(board)
}

module.exports = {
  randomizeBoard,
  updateCellValues
}
