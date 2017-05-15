import { delay } from 'redux-saga';
import { takeLatest, call, put } from 'redux-saga/effects';

import { INCREMENT_ASYNC } from 'containers/Counter/constants';
import { setNotification } from './actions';

export function* setNotificationRequest() {
  yield call(delay, 1000);
  yield put(setNotification('You incremented async!'));
}

function* watchIncrementRequest() {
  yield takeLatest(INCREMENT_ASYNC, setNotificationRequest);
}

export default [watchIncrementRequest];
