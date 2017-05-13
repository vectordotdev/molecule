import { SET_NOTIFICATION_STATE } from './constants';

export function setNotificationState(notifications) {
  return {
    type: SET_NOTIFICATION_STATE,
    payload: {
      notifications,
    },
  };
}
