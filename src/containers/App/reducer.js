import { SET_NOTIFICATION, SET_NETWORK_STATUS } from './constants'

// The initial state of the App
const initialState = {
  notification: undefined,
  online: true
}

function appReducer (state = initialState, action) {
  switch (action.type) {
    case SET_NOTIFICATION:
      return {
        ...state,
        notification: action.payload.notification,
      }

    case SET_NETWORK_STATUS:
      return {
        ...state,
        online: action.payload.status
      }

    default:
      return state
  }
}

export default appReducer
