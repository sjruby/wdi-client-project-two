'use strict'
const config = require('../config.js')
const board = require('../boardStore')
const store = require('../store.js')


const getBoards = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiOrigins.production + '/list-boards',
    headers: {
      Authorization: 'Token token=' + store.store.token
    }
  })
}

const getBoard = function (id) {
  return $.ajax({
    method: 'GET',
    url: config.apiOrigins.production + '/boards/' + id,
    headers: {
      Authorization: 'Token token=' + store.store.token
    }
  })
}

// NEED TO REPLACE THE ONE BELOW WITH THE ID OF THE BOARD
const saveBoard = function (data) {
  const boardStoreID = board.boardStore.board.id
  return $.ajax({
    method: 'PATCH',
    url: config.apiOrigins.production + '/boards/' + boardStoreID,
    headers: {
      Authorization: 'Token token=' + store.store.token
    },
    data: data
  })
}

const saveNewBoard = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiOrigins.production + '/boards',
    headers: {
      Authorization: 'Token token=' + store.store.token
    },
    data: data
  })
}

// NEED TO REPLACE THE ONE BELOW WITH THE ID OF THE BOARD
const deleteBoard = function (data) {
  const boardStoreID = board.boardStore.board.id
  return $.ajax({
    method: 'DELETE',
    url: config.apiOrigins.production + '/boards/' + boardStoreID,
    headers: {
      Authorization: 'Token token=' + store.store.token
    }
  })
}


  module.exports = {
    getBoards,
    saveBoard,
    getBoard,
    saveNewBoard,
    deleteBoard
  }
