import { SET_NOTIFICATION, SET_NETWORK_STATUS, SET_LOADING } from './constants'

// The initial state of the App
const initialState = {
  notification: undefined,
  online: true,
  loading: false,
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
        online: action.payload.status,
      }

    case SET_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      }

    default:
      return state
  }
}

export default appReducer
