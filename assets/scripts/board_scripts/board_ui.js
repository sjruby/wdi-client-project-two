'use strict'
const $message = $('#message')
const listBoardsTemplate = require('../templates/board-list.handlebars')


const board = require('../boardStore')

const getGamesSuccesss = function (data) {
  board.boardsList = data.boards
  const boards = board.boardsList
  console.log(boards)
  const boardsHTML = listBoardsTemplate({boards})
  console.log(boardsHTML)
  $message.append(boardsHTML)
}

const getBoardSuccsess = function (data) {
  board.boardStore = data
  board.cellsStore = JSON.parse(board.boardStore.board.cells)
  console.log("The board you clicked on has ID: " + board.boardStore.board.id)
}

const failure = function (response) {

  $message.text("That bombed....")
}

module.exports = {
  getGamesSuccesss,
  getBoardSuccsess
}
