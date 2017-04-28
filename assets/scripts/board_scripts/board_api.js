'use strict'
const config = require('../config.js')

const getBoards = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiOrigins.production + '/boards',
    // headers: {
    //   Authorization: 'Token token=' + store.store.token
    // }
  })
}

const getBoard = function (id) {
  return $.ajax({
    method: 'GET',
    url: config.apiOrigins.production + '/boards/' + id,
    // headers: {
    //   Authorization: 'Token token=' + store.store.token
    // }
  })
}
// NEED TO REPLACE THE ONE BELOW WITH THE ID OF THE BOARD
const saveBoard = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiOrigins.production + '/boards/1',
    data: data
  })
}

  module.exports = {
    getBoards,
    saveBoard,
    getBoard
  }
