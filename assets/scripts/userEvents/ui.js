// const $signUpUI = $('#signUpMessage')
// // const $signInUI = $('#signInMessage')
const $message = $('#message')
const store = require('../store')

const onSignUpSuccess = function () {
  $message.text('It worked! Go sign in and have some fun!')
}

const onSignInSuccess = function (data) {
  store.store = data.user
  $message.text('You have signed-click the board to get started!')
}

const onChangePWSuccess = () => {
  $message.text('You succesfully changed your PW...now play!')
}

const signOutSuccess = () => {
  $message.text('You left meeeeeee WHYYYYY')
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
