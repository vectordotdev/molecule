// @flow
import { INCREMENT, INCREMENT_ASYNC, DECREMENT } from './constants';
import type { Action } from './types';

export function increment(): Action {
  return {
    type: INCREMENT
  };
}

export function incrementAsync(): Action {
  return {
    type: INCREMENT_ASYNC
  };
}

export function decrement(): Action {
  return {
    type: DECREMENT
  };
}
