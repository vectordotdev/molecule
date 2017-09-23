import { createLogic } from 'redux-logic'
import { push } from 'react-router-redux'
import { LOGIN } from './constants'
import { loginSuccess } from './actions'

/**
  Logs in user, setting JWT and profile in local storage
  @param {object} api - api client
  @return {object} user - user attributes
  @throws {error} fetchError - any fetching error
 */
const loginLogic = createLogic({
  type: LOGIN,
  latest: true,
  async process (_, dispatch, done) {
    dispatch(loginSuccess({
      name: 'Zach',
    }))
    dispatch(push('/'))
    done()
  },
})

export default [loginLogic]
