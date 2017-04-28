'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

const userEvents = require('./userEvents/userEvents')
const boardActions = require('./boardActions')

$(() => {
  $('#sign-up').on('submit', userEvents.onSignUp)
  $('#sign-in').on('submit', userEvents.onSignIn)
  $('#change-pw').on('submit', userEvents.onChangePW)
  $('#sign-out').on('submit', userEvents.onSignOut)
  $('#list-boards').on('submit', boardActions.onListBoards)
  $('.randomize_board').on('click', boardActions.onRandomizeBoard)
  $('.clear_board').on('click', boardActions.onClearBoard)
  $('.animate_board').on('click', boardActions.onAnimateBoard)
  $('.stop_animation').on('click', boardActions.onStopBoard)
  $('.delete-board').on('click', boardActions.onDeleteBoard)
  $('#save-board').on('submit', boardActions.onSaveBoard)
  $('#save-board-first-time').on('submit', boardActions.onSaveNewBoard)
})


//Event handlers for HANDLEBARS stuff, this is active even if
// the stuff is renderd after DOM load, b/c it's on the document level...
$(document).on('click','.list_of_boards',boardActions.onGetBoard)



// $('.save-list_of_boards').on('click', boardActions.onGetBoard)
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
