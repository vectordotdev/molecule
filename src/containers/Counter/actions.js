import { INCREMENT, INCREMENT_ASYNC, DECREMENT } from './constants';

export function increment() {
  return {
    type: INCREMENT
  };
}

export function incrementAsync() {
  return {
    type: INCREMENT_ASYNC
  };
}

export function decrement() {
  return {
    type: DECREMENT
  };
}
