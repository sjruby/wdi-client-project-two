const createBoardTemplate = require('../templates/create-board.handlebars')
const addBoardTitle = require('../templates/add-board-title.handlebars')
const board = require('../boardStore')

const renderBoard = function () {
  console.log('board render worked')
  const titlePrep = board.boardStore
  console.log(titlePrep)
  const title = titlePrep.board.title
  const titleHTML = addBoardTitle({title})
  $('#listBoards').append(titleHTML)
  const cells = board.cellsStore
  const boardHTML = createBoardTemplate({cells})
  $('#listBoards').append(boardHTML)
}

// const renderNewBoard = function (title) {
//   console.log('NEW board render worked')
//   const titlePrep = title
//   console.log(titlePrep)
//   const titleHTML = addBoardTitle({title})
//   $('#listBoards').append(titleHTML)
//   const cells = board.cellsStore
//   const boardHTML = createBoardTemplate({cells})
//   $('#listBoards').append(boardHTML)
// }

module.exports = {
  renderBoard
}
