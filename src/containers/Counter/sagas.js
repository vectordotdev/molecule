import { delay } from 'redux-saga'
import { takeLatest, put, call } from 'redux-saga/effects'

import { INCREMENT_ASYNC } from './constants'
import { increment } from './actions'

export function* incrementAsync () {
  yield call(delay, 500)
  yield put(increment())
}

function* watchIncrementAsync () {
  yield takeLatest(INCREMENT_ASYNC, incrementAsync)
}

export default [watchIncrementAsync]
