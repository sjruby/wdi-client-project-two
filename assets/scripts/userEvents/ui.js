// const $signUpUI = $('#signUpMessage')
// // const $signInUI = $('#signInMessage')
const $message = $('#message')
const store = require('../store')
const showFooter = require('../templates/add-footer.handlebars')
const showSignInUp = require('../templates/create-sign-sign-up.handlebars')
const addBoardList = require('../templates/add-board-list.handlebars')

// const clearSignInAside= function () {
//   const oElem = document.getElementById('signInUp')
//   console.log(oElem)
//   oElem.remove() = ''
// }
const onSignUpSuccess = function () {
  $message.text('It worked! Go sign in and have some fun!')
}

const onSignInSuccess = function (data) {
  store.store = data.user
  $message.text('You have signed-click the board to get started!')
  const footerHTML = showFooter()
  const boardListHTML = addBoardList()
  $('.wrapper').append(boardListHTML)
  $('.wrapper').append(footerHTML)
  $('.aside-2').remove()
  
}

const onChangePWSuccess = () => {
  $message.text('You succesfully changed your PW...now play!')
    $('#changePW').modal('hide')
}

const signOutSuccess = () => {
  $message.text('You left meeeeeee WHYYYYY')
  $('.footer').remove()
  $('.main').remove()
  $('.board-managment').remove()
  const signInHTML = showSignInUp()
  $('.wrapper').append(signInHTML)
}

const onError = function (response) {
  $message.text('Failure')
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onChangePWSuccess,
  signOutSuccess,
  onError
}
