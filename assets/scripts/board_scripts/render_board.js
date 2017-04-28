const createBoardTemplate = require('../templates/create-board.handlebars')
const board = require('../boardStore')

const renderBoard = function () {
  console.log('board render worked')
  const cells = board.cellsStore
  const boardHTML = createBoardTemplate({cells})
  $('.game-board').append(boardHTML)
}

module.exports = {
  renderBoard
}
