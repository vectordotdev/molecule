import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SIGN_UP,
} from './constants'

export function login () {
  return {
    type: LOGIN,
  }
}

export function loginSuccess (user) {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  }
}

export function loginFailed (error) {
  return {
    type: LOGIN_FAILED,
    payload: error,
  }
}

export function signup () {
  return {
    type: SIGN_UP,
  }
}
