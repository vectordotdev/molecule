import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SIGN_UP,
  SIGN_UP_FAILED
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

export function signUp (user) {
  return {
    type: SIGN_UP,
    payload: user,
  }
}

export function signUpFailed (errors) {
  return {
    type: SIGN_UP_FAILED,
    payload: errors,
  }
}
