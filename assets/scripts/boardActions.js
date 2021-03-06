const createBoardArrays = require('./board_scripts/create_board_array.js')
const renderBoards = require('./board_scripts/render_board.js')
const api = require('./board_scripts/board_api.js')
const ui = require('./board_scripts/board_ui.js')
const board = require('./boardStore')
const getFormFields = require('../../lib/get-form-fields')
const gameRules = require('./board_scripts/update_rules.js')
const videoShooping = require('./templates/shoop-video.handlebars')
let nIntervId

const clearCurrentBoard = function () {
  onStopBoard()
  $('#game-board').remove()
  $('#board-title').remove()
  $('.video').remove()
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
const gameOfLife = function() {
    createBoardArrays.updateCellValues(board.cellsStore, gameRules.conwaysRules)
    $('#game-board').remove()
    $('#board-title').remove()
    renderBoards.renderBoard()
}
const onConwayBoard = function() {
  onStopBoard()
  const videoHTML = videoShooping()
  $('.aside-1').append(videoHTML)
  nIntervId = setInterval(gameOfLife, 1000)
}
const blinkBoard = function () {
  createBoardArrays.updateCellValues(board.cellsStore, gameRules.flipValue )
  $('#game-board').remove()
  $('#board-title').remove()
  renderBoards.renderBoard()
}


const onGetBoard = function (li) {
  const boardID = this.id
  api.getBoard(this.id)
    .done(ui.getBoardSuccsess, renderBoards.renderBoard )
    .catch(ui.failure)
}

const onBlinkBoard = function () {
  onStopBoard()
  // const videoHTML = videoShooping()
  // $('.aside-1').append(videoHTML)
  nIntervId = setInterval(blinkBoard, 1000)
}

const onStopBoard = function () {
  $('.video').remove()
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
  onStopBoard()
  $('.save-message').remove()
  const data = {}
  data.cells = JSON.stringify(board.cellsStore)
  api.saveBoard(data)
    .then(ui.saveGameSuccess)
    .catch(ui.failure)
}

const onSaveNewBoard = function () {
  event.preventDefault()
  const titlePrep = getFormFields(this)
  const title = titlePrep.board.title

  if(title.length === 0 ) {
    $('#newGameMessage').text("You have to name the new board...it can be only spaces but please don't do that.  It would be stupid.")
    return
  }

  clearCurrentBoard()
  createBoardArrays.newBoard()
  const data = {}
  data.cells = JSON.stringify(board.cellsStore)
  data.title = title
  api.saveNewBoard(data)
    .done(ui.newGameSucess, renderBoards.renderBoard )
    .catch(ui.failure)
}

const onDeleteBoard = function () {
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
// this flips the value in teh cell store array
  board.cellsStore[x][y].intialValue = gameRules.flipValue(board.cellsStore[x][y])
// this toggles that class to change the color
  $(this).toggleClass('value-1')
  $(this).toggleClass('value-2')
}
module.exports = {
  onRandomizeBoard,
  onClearBoard,
  onBlinkBoard,
  onStopBoard,
  onListBoards,
  onSaveBoard,
  onGetBoard,
  onSaveNewBoard,
  onDeleteBoard,
  listBoards,
  onBoardClick,
  onConwayBoard,
  clearCurrentBoard
}
