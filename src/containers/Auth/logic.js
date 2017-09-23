import { createLogic } from 'redux-logic'
import { push } from 'react-router-redux'
import Auth0Lock from 'auth0-lock'
import { LOGIN } from './constants'
import { loginSuccess, loginFailed } from './actions'

// Configuration options for Auth0
const lockConfig = {
  auth: {
    redirect: false,
    sso: false,
    responseType: 'openid profile',
    scope: 'openid',
  },
  container: 'auth',
  closable: false,
}

/**
  Logs in user, setting JWT and profile in local storage
  @param {object} api - api client
  @return {object} user - user attributes
  @throws {error} fetchError - any fetching error
 */
const loginLogic = createLogic({
  type: LOGIN,
  latest: true,
  warnTimeout: 0,
  async process (_, dispatch, done) {
    // Initialize Lock
    const lock = new Auth0Lock(
      AUTH0_ID, // eslint-disable-line
      AUTH0_DOMAIN, // eslint-disable-line
      { ...lockConfig, initialScreen: 'signUp' },
    )

    // Bring up the auth modal
    lock.show()

    // Handle authentication and store user
    lock.on('authenticated', result => {
      lock.getUserInfo(result.accessToken, (error, profile) => {
        if (error) dispatch(loginFailed(error))
        localStorage.setItem('id_token', result.idToken)
        localStorage.setItem('accessToken', result.accessToken)
        localStorage.setItem('profile', JSON.stringify(profile))

        // After successful authentication redirect to original url
        // or to the root route if it doesn't exist
        dispatch(loginSuccess(profile))
        dispatch(push('/'))
        done()
      })
    })

    // When authentication fails return the error
    lock.on('unrecoverable_error', error => {
      dispatch(loginFailed(error))
      done()
    })
  },
})

export default [loginLogic]
