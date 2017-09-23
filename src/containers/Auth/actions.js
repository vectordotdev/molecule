import { LOGIN, LOGIN_SUCCESS, SIGN_UP } from './constants'

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

export function signup () {
  return {
    type: SIGN_UP,
  }
}
