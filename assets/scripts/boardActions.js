const createBoardArrays = require('./board_scripts/create_board_array.js')
const renderBoards = require('./board_scripts/render_board.js')
const api = require('./board_scripts/board_api.js')
const ui = require('./board_scripts/board_ui.js')
const board = require('./boardStore')
const getFormFields = require('../../lib/get-form-fields')
const gameRules = require('./board_scripts/update_rules.js')
let nIntervId

const clearCurrentBoard = function () {
  onStopBoard()
  $('#game-board').remove()
  $('#board-title').remove()
  // const board = document.getElementById('game-board')
  // board.innerHTML = ''
  // const title = document.getElementById('board-title')
  // title.innerHTML = ''
}

const onRandomizeBoard = function () {
  clearCurrentBoard()
  createBoardArrays.randomizeBoard()
  renderBoards.renderBoard()
  // NEED TO RENDER THIS BOARD
}

const animateBoard = function () {
  createBoardArrays.updateCellValues(board.cellsStore)
  $('#game-board').remove()
  $('#board-title').remove()
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
  const board = document.getElementById('game-board')
  board.innerHTML = ''
  const title = document.getElementById('board-title')
  title.innerHTML = ''
}

const listBoards = function() {
  api.getBoards()
    .done( ui.getGamesSuccesss)
    .catch(ui.failure)
}

const onListBoards = function (event) {
  event.preventDefault()
  clearCurrentBoard()
  listBoards()
}

const onSaveBoard = function () {
  event.preventDefault()
  $('.save-message').remove()
  const data = {}
  data.cells = JSON.stringify(board.cellsStore)
  console.log(data)
  api.saveBoard(data)
    .then(ui.saveGameSuccess)
    .catch(ui.failure)
}

const onSaveNewBoard = function () {
  event.preventDefault()
    clearCurrentBoard()
  const titlePrep = getFormFields(this)
  const title = titlePrep.board.title
  createBoardArrays.newBoard()
  const data = {}
  data.cells = JSON.stringify(board.cellsStore)
  data.title = title
  // board.boardStore.board = data
  // createBoardArrays.assignBoardStore(data)
  console.log(board.boardStore)
  api.saveNewBoard(data)
    .done(ui.newGameSucess, renderBoards.renderBoard )
    .catch(ui.failure)
}

const onDeleteBoard = function () {
  console.log('yo Im here')
  api.deleteBoard()
    .done(clearCurrentBoard,listBoards)
    .catch(ui.failure)
}

const onBoardClick = function(li) {
  const clickedClass = $(this).attr("class").split(" ")

  const xPrep =clickedClass[3].split('')
  let x
  if (xPrep.length === 4) {
     x = (xPrep[2] + xPrep[3]) * 1
  } else {
     x = (xPrep[2]) * 1
  }
  const yPrep =clickedClass[2].split('')
  let y
  if (yPrep.length === 4) {
     y = (yPrep[2] + yPrep[3]) * 1
  } else {
     y = (yPrep[2]) * 1
  }
  board.cellsStore[x][y].intialValue = gameRules.flipValue(board.cellsStore[x][y].intialValue)
  // console.log(clickedClass.split(" "))
  console.log(clickedClass[3])
  console.log(x)
  console.log(clickedClass[2])
  console.log(y);
  $(this).toggleClass('value-1')
  $(this).toggleClass('value-2')
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
  onDeleteBoard,
  listBoards,
  onBoardClick
}
