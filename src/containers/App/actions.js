import { SET_NOTIFICATION } from './constants'

export function setNotification (notification) {
  return {
    type: SET_NOTIFICATION,
    payload: {
      notification,
    },
  }
}
