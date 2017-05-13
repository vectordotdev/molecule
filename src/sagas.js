import { all, fork } from 'redux-saga/effects';
import appSagas from './containers/App/sagas';
import authSagas from './containers/Auth/sagas';

// Combine sagas
const sagas = [
  ...appSagas,
  ...authSagas,
];

// Start saga watchers
export default function* root() {
  yield all(sagas.map(saga => fork(saga)));
}
