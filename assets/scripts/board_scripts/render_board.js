const createBoardTemplate = require('../templates/create-board.handlebars')
const addBoardTitle = require('../templates/add-board-title.handlebars')
const board = require('../boardStore')

const renderBoard = function () {
  const titlePrep = board.boardStore
  const title = titlePrep.board.title
  const titleHTML = addBoardTitle({title})
  $('#listBoards').append(titleHTML)
  const cells = board.cellsStore
  const boardHTML = createBoardTemplate({cells})
  $('#listBoards').append(boardHTML)
}

module.exports = {
  renderBoard
}
