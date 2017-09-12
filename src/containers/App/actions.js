// @flow
import { SET_NOTIFICATION } from './constants';
import type { Action } from './types';

export function setNotification(notification: string): Action {
  return {
    type: SET_NOTIFICATION,
    payload: {
      notification
    },
  };
}
