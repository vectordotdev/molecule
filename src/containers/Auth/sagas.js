import { delay } from 'redux-saga';
import { takeLatest, call } from 'redux-saga/effects';

import { SET_AUTH_STATE } from './constants';

export function* loginRequest() {
  yield call(delay, 1000);
}

function* watchLoginRequest() {
  yield takeLatest(SET_AUTH_STATE, loginRequest);
}

export default [watchLoginRequest];
