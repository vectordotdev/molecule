import { LOGIN_SUCCESS, SIGN_UP_FAILED } from './constants'

const initialState = {
  user: null,
}

function authReducer (state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
      }
    case SIGN_UP_FAILED:
      return {
        ...state,
        errors: action.payload,
      }
    default:
      return state
  }
}

export default authReducer
