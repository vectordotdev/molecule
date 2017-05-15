import { delay } from 'redux-saga';
import { takeLatest, call } from 'redux-saga/effects';

import { SET_NOTIFICATION_STATE } from './constants';

export function* notificationRequest() {
  yield call(delay, 1000);
  console.log('notification request sent');
}

function* watchNotificationRequest() {
  yield takeLatest(SET_NOTIFICATION_STATE, notificationRequest);
}

export default [watchNotificationRequest];
