const api = require('./api')
const ui = require('./ui')
const gameEvents = require('../boardActions')
const getFormFields = require('../../../lib/get-form-fields')
// const showStuff = require('./showStuff')
// const hideStuff = require('./hideStuff')

const onSignUp = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.onSignUpSuccess, gameEvents.listBoards)
    .catch(ui.onSignUpError)
}

const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  api.signIn(data)
    .done(ui.onSignInSuccess, gameEvents.listBoards)
    .catch(ui.onError)
}

const onChangePW = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.onChangePWSuccess)
    .catch(ui.onError)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .done(ui.signOutSuccess)
    .catch(ui.onError)
}
module.exports = {
  onSignUp,
  onSignIn,
  onChangePW,
  onSignOut
}
