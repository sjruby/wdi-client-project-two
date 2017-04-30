const createBoardArrays = require('./board_scripts/create_board_array.js')
const renderBoards = require('./board_scripts/render_board.js')
const api = require('./board_scripts/board_api.js')
const ui = require('./board_scripts/board_ui.js')
const board = require('./boardStore')
const getFormFields = require('../../lib/get-form-fields')
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
  createBoardArrays.updateCellValues(board.cellsStore)
  clearCurrentBoard()
  renderBoards.renderBoard()
  // console.log('HELLO')
}


const onGetBoard = function (li) {
  const boardID = this.id
  console.log('the board you clicked has ID: ' + boardID )
  api.getBoard(this.id)
    .done(ui.getBoardSuccsess, renderBoards.renderBoard )
    // .catch(ui.failure)
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
    .done(onClearBoard(), ui.getGamesSuccesss)
    .catch(ui.failure)
}

const onSaveBoard = function () {
  event.preventDefault()
  const title = board.boardStore.title
  const data = {}
  data.cells = JSON.stringify(board.cellsStore)
  data.title = title
  console.log(data)
  api.saveBoard(data)
    // .then(ui.getGamesSuccesss)
    .catch(ui.failure)
}

const onSaveNewBoard = function () {
  event.preventDefault()
  const titlePrep = getFormFields(this)
  const title = titlePrep.board.title
  const data = {}
  data.cells = JSON.stringify(board.cellsStore)
  data.title = title

  console.log('cute-trying to make a board!' + title)
  api.saveNewBoard(data)
    // .then(ui.getGamesSuccesss)
    .catch(ui.failure)
}

const onDeleteBoard = function () {
  console.log('yo Im here')
  api.deleteBoard()
    // .then(ui.getGamesSuccesss)
    .catch(ui.failure)
}
module.exports = {
  onRandomizeBoard,
  onClearBoard,
  onAnimateBoard,
  onStopBoard,
  onListBoards,
  onSaveBoard,
  onGetBoard,
  onSaveNewBoard,
  onDeleteBoard
}
