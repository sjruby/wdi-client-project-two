// const $signUpUI = $('#signUpMessage')
// // const $signInUI = $('#signInMessage')
const $message = $('.message')
const store = require('../store')
const showFooter = require('../templates/add-footer.handlebars')
const showSignInUp = require('../templates/create-sign-sign-up.handlebars')
const addBoardList = require('../templates/add-board-list.handlebars')
const aboutShoop = require('../templates/about-shoop.handlebars')
const shoopRules = require('../templates/shoop-rules.handlebars')

const onSignUpSuccess = function (data) {
    $message.text('You have signed up, now login in below to get started shooping!')
    $('.sign-up-div').remove()
}

const onSignInSuccess = function (data) {
  store.store = data.user
  const footerHTML = showFooter()
  const boardListHTML = addBoardList()
  const shoopRulesHTML = shoopRules()
  $('.wrapper').append(boardListHTML)
  $('.wrapper').append(footerHTML)
  $('.aside-2').remove()
  $('.about-shoop').remove()
  $('.message').empty()
  $('.aside-1').append(shoopRulesHTML)

}

const onChangePWSuccess = () => {
  $message.text('You succesfully changed your PW...now play!')
    $('#changePW').modal('hide')
    $('#change-pw')[0].reset()
}

const signOutSuccess = () => {
  $message.text('You left meeeeeee WHYYYYY')
  $('.footer').remove()
  $('.main').remove()
  $('.board-managment').remove()
  const signInHTML = showSignInUp()
  $('.wrapper').append(signInHTML)
  const aboutShoopHTML = aboutShoop()
  $('.shoop-rules').remove()
  $('.aside-1').append(aboutShoopHTML)
}

const onError = function (response) {
  $message.text('That bombed...as a devolper I have determined it was user error :) ')
}

const onPWError = function() {
  $('#changePWMessage').text('That bombed...as a devolper I have determined it was user error :) ')
}
module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onChangePWSuccess,
  signOutSuccess,
  onError,
  onPWError
}
