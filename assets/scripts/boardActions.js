const createBoardArrays = require('./board_scripts/create_board_array.js')
const renderBoards = require('./board_scripts/render_board.js')
const api = require('./board_scripts/board_api.js')
const ui = require('./board_scripts/board_ui.js')
const board = require('./boardStore')
let nIntervId

const clearCurrentBoard = function () {
  const oElem = document.getElementById('game-board')
  console.log(oElem)
  oElem.innerHTML = ''
}

const onRandomizeBoard = function () {
  clearCurrentBoard()
  createBoardArrays.randomizeBoard()
  renderBoards.renderBoard()
  // NEED TO RENDER THIS BOARD
}

const animateBoard = function () {
  createBoardArrays.updateCellValues(board.boardStore)
  clearCurrentBoard()
  renderBoards.renderBoard()
  // console.log('HELLO')
}

const onAnimateBoard = function () {
  nIntervId = setInterval(animateBoard, 1000)
}

const onStopBoard = function () {
  clearInterval(nIntervId)
}

const onClearBoard = function () {
  onStopBoard()
  const oElem = document.getElementById('game-board')
  console.log(oElem)
  oElem.innerHTML = ''
}

const onListBoards = function (event) {
  event.preventDefault()
  api.getBoards()
    .then(ui.getGamesSuccesss)
    .catch(ui.failure)
}
module.exports = {
  onRandomizeBoard,
  onClearBoard,
  onAnimateBoard,
  onStopBoard,
  onListBoards
}
