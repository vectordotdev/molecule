import { SET_NOTIFICATION, SET_NETWORK_STATUS } from './constants'

export function setNotification (notification) {
  return {
    type: SET_NOTIFICATION,
    payload: {
      notification,
    },
  }
}

export function setNetworkStatus (status) {
  return {
    type: SET_NETWORK_STATUS,
    payload: {
      status
    },
  }
}
