import { INCREMENT, INCREMENT_ASYNC, DECREMENT } from './constants'

export function increment () {
  return {
    type: INCREMENT,
    meta: {
      resolveLoading: true,
    },
  }
}

export function incrementAsync () {
  return {
    type: INCREMENT_ASYNC,
    meta: {
      triggerLoading: true,
    },
  }
}

export function decrement () {
  return {
    type: DECREMENT,
  }
}
