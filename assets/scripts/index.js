'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

const userEvents = require('./userEvents/userEvents')
const boardActions = require('./boardActions')

$(() => {
  // $('#sign-up').on('submit', userEvents.onSignUp)
  // $('#sign-in').on('submit', userEvents.onSignIn)
  // $('#change-pw').on('submit', userEvents.onChangePW)
  // $('#sign-out').on('submit', userEvents.onSignOut)
  // $('#list-boards').on('submit', boardActions.onListBoards)
  // $('.randomize_board').on('click', boardActions.onRandomizeBoard)
  // $('.clear_board').on('click', boardActions.onClearBoard)
  // $('.animate_board').on('click', boardActions.onAnimateBoard)
  // $('.stop_animation').on('click', boardActions.onStopBoard)
  // $('.delete-board').on('click', boardActions.onDeleteBoard)
})

// $(document).on('click','.list_of_boards',boardActions.onGetBoard)
// $(document).on('submit','#list-boards',boardActions.onListBoards)
// $(document).on('submit','#save-board',boardActions.onSaveBoard)
// $(document).on('submit','#save-board-first-time',boardActions.onSaveNewBoard)
$(document).on('submit','#sign-up',userEvents.onSignUp)
$(document).on('submit','#sign-in',userEvents.onSignIn)
//Event handlers for HANDLEBARS stuff, this is active even if
// the stuff is renderd after DOM load, b/c it's on the document level...
$(document).on('click','.list_of_boards',boardActions.onGetBoard)
$(document).on('submit','#list-boards',boardActions.onListBoards)
$(document).on('click','.save-board',boardActions.onSaveBoard)
$(document).on('submit','#save-board-first-time',boardActions.onSaveNewBoard)
$(document).on('submit','#change-pw',userEvents.onChangePW)
$(document).on('submit','#sign-out',userEvents.onSignOut)

$(document).on('click','.randomize_board',boardActions.onRandomizeBoard)
$(document).on('click','.animate_board',boardActions.onBlinkBoard)
$(document).on('click','.stop_animation',boardActions.onStopBoard)
$(document).on('click','.clear_board',boardActions.onClearBoard)
$(document).on('click','.delete-board',boardActions.onDeleteBoard)
$(document).on('click','.board-cell ',boardActions.onBoardClick)

$(document).on('click','.conway_board',boardActions.onConwayBoard)
$(document).on('click','.close-form',userEvents.onCloseModal)



// $('.save-list_of_boards').on('click', boardActions.onGetBoard)
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
