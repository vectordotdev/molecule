import { SET_NOTIFICATION } from './constants'

// The initial state of the App
const initialState = {
  notification: '',
}

function appReducer (state = initialState, action) {
  switch (action.type) {
    case SET_NOTIFICATION:
      return {
        ...state,
        notification: action.payload.notification,
      }

    default:
      return state
  }
}

export default appReducer
