import { createLogic } from 'redux-logic'
import { push } from 'react-router-redux'
import Auth0Lock from 'auth0-lock'
import { LOGIN, SIGN_UP } from './constants'
import { userSchema } from './schema'
import { loginSuccess, loginFailed, signUpFailed } from './actions'

/**
  Logs in user, setting JWT and profile in local storage
  @param {object} api - api client
  @return {object} user - user attributes
  @throws {error} fetchError - any fetching error
 */
// const loginLogic = createLogic({
//   type: LOGIN,
//   latest: true,
//   warnTimeout: 0,
//   validate({ getState, action }, allow, reject) {
//     const user = action.payload;
//     if (!getState().users[user.id]) { // can also hit server to check
//       allow(action);
//     } else {
//       reject({ type: USER_EXISTS_ERROR, payload: user, error: true })
//     }
//   },
//   async process (_, dispatch, done) {
//     dispatch(loginSuccess({ name: 'Zach' }))
//     done()
//   }
// })

const signUpLogic = createLogic({
  type: SIGN_UP,
  latest: true,
  warnTimeout: 0,
  async validate ({ action }, allow, reject) {
    // can also hit server to check
    const user = action.payload
    try {
      await userSchema.validate(user, { abortEarly: false })
      allow(action)
    } catch (e) {
      reject(signUpFailed(e.errors))
    }
  },
  async process ({ action }, dispatch, done) {
    dispatch(loginSuccess(action.payload))
    dispatch(push('/'))
    done()
  },
})

/**
  Example using Auth0
 */
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

const auth0LoginLogic = createLogic({
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

export default [signUpLogic, auth0LoginLogic]
