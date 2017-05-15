import { delay } from 'redux-saga';
import { take, put, call } from 'redux-saga/effects';

import { INCREMENT_ASYNC } from './constants';
import { increment } from './actions';

export function* incrementAsync() {
  console.log('before');
  yield call(delay, 1500);
  console.log('after')
  yield put(increment());
}

function* watchIncrementAsync() {
  yield take(INCREMENT_ASYNC, incrementAsync);
}

export default [watchIncrementAsync];
