import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SIGN_UP,
  SIGN_UP_FAILED,
} from './constants'

export function login (user) {
  return {
    type: LOGIN,
    payload: user,
  }
}

export function loginSuccess (user) {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  }
}

export function loginFailed (errors) {
  return {
    type: LOGIN_FAILED,
    payload: errors,
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
