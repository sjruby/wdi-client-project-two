'use strict'
// const $list = $('.main')
const listBoardsTemplate = require('../templates/board-list.handlebars')
const noBoardsTempleate = require('../templates/no-boards.handlebars')
const saveMessage = require('../templates/save-message.handlebars')

const board = require('../boardStore')

const getGamesSuccesss = function (data) {


  board.boardsList = data.boards
  const boards = board.boardsList
  let boardsHTML
  if (boards.length === 0){
     boardsHTML = noBoardsTempleate()
  } else {  boardsHTML = listBoardsTemplate({boards})}
  $('#listBoards').append(boardsHTML)

}

// const listBoardsFaliure = function(){
// const noBoardsHTML = noBoardsTempleate()
//   $('#listBoards').append(noBoardsHTML)
// }
const getBoardSuccsess = function (data) {
  board.boardStore = data
  board.cellsStore = JSON.parse(board.boardStore.board.cells)
  $('.board-list').remove()
  // const boardButtons = addBoardButtons()
}

const newGameSucess = function(data) {
      $('.board-list').remove()
      board.boardStore = data
      $('#newGame').modal('hide')
      $('#myForm')[0].reset()
      $('#newGameMessage').text("")
      // $('#newGameName').val('')
}

const failure = function (response) {
  $('.message').text("that bombmed")
}

const saveGameSuccess = function(){
    const titlePrep = board.boardStore
    const title = titlePrep.board.title
    const saveMessageHTML = saveMessage({title})
    $('.board-title').append(saveMessageHTML)
}

module.exports = {
  getGamesSuccesss,
  getBoardSuccsess,
  newGameSucess,
  saveGameSuccess
}
