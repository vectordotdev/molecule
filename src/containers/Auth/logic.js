import { createLogic } from 'redux-logic'
import { push } from 'react-router-redux'
import { authorize, storeCredentials, storeUser, getNextRoute, logout } from 'utils/auth'
import { LOGIN, LOGOUT, SIGN_UP, GITHUB_AUTH } from './constants'
import { sessionSchema, userSchema } from './schema'
import {
  loginSuccess,
  loginFailed,
  logoutSuccess,
  signUpFailed,
  githubAuthFailed,
} from './actions'

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
  async validate ({ action }, allow, reject) {
    // can also hit server to check
    const user = action.payload
    try {
      await sessionSchema.validate(user, { abortEarly: false })
      allow(action)
    } catch (e) {
      reject(loginFailed(e.errors))
    }
  },
  async process ({ action }, dispatch, done) {
    storeUser(action.payload)
    dispatch(loginSuccess(action.payload))
    const nextRoute = getNextRoute(action)
    dispatch(push(nextRoute))
    done()
  },
})

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
    const nextRoute = getNextRoute(action)
    dispatch(push(nextRoute))
    done()
  },
})

const githubAuth = createLogic({
  type: GITHUB_AUTH,
  latest: true,
  warnTimeout: 0,
  async process ({ api, action }, dispatch, done) {
    try {
      // Authorize through github
      const { token, expiresIn } = await authorize({
        url: 'https://api.mysite.com/auth/v1/github',
        redirect: window.location.origin,
        type: 'token',
      })
      const nextRoute = getNextRoute(action)

      // Store credentials in localStorage and update api headers
      storeCredentials(token, expiresIn)
      api.headers = { ...api.headers, Authorization: `Bearer ${token}` }

      // Fetch user from the API and store
      const response = await api.get('/session')
      const user = response.body.data
      storeUser(user)

      // Dispatch success actions
      dispatch(loginSuccess(user))
      dispatch(push(nextRoute))
      done()
    } catch (e) {
      console.log(e)
      dispatch(githubAuthFailed(e))
      done()
    }
  },
})

const logoutLogic = createLogic({
  type: LOGOUT,
  latest: true,
  process (_, dispatch, done) {
    logout()
    dispatch(logoutSuccess())
    dispatch(push('/auth'))
    done()
  },
})

/**
  Example using Auth0
 */
// const lockConfig = {
//   auth: {
//     redirect: false,
//     sso: false,
//     responseType: 'openid profile',
//     scope: 'openid',
//   },
//   container: 'auth',
//   closable: false,
// }
//
// const auth0LoginLogic = createLogic({
//   type: LOGIN,
//   latest: true,
//   warnTimeout: 0,
//   async process (_, dispatch, done) {
//     // Initialize Lock
//     const lock = new Auth0Lock(
//       AUTH0_ID, // eslint-disable-line
//       AUTH0_DOMAIN, // eslint-disable-line
//       { ...lockConfig, initialScreen: 'signUp' },
//     )
//
//     // Bring up the auth modal
//     lock.show()
//
//     // Handle authentication and store user
//     lock.on('authenticated', result => {
//       lock.getUserInfo(result.accessToken, (error, profile) => {
//         if (error) dispatch(loginFailed(error))
//         localStorage.setItem('id_token', result.idToken)
//         localStorage.setItem('accessToken', result.accessToken)
//         localStorage.setItem('profile', JSON.stringify(profile))
//
//         // After successful authentication redirect to original url
//         // or to the root route if it doesn't exist
//         dispatch(loginSuccess(profile))
//         dispatch(push('/'))
//         done()
//       })
//     })
//
//     // When authentication fails return the error
//     lock.on('unrecoverable_error', error => {
//       dispatch(loginFailed(error))
//       done()
//     })
//   },
// })

export default [
  loginLogic,
  signUpLogic,
  githubAuth,
  logoutLogic
]
