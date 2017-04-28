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

  module.exports = {
    getBoards
  }
