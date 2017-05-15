import { all, fork } from 'redux-saga/effects';
import appSagas from './containers/App/sagas';
import counterSagas from './containers/Counter/sagas';

// Combine sagas
const sagas = [
  ...appSagas,
  ...counterSagas,
];

// Start saga watchers
export default function* root() {
  yield all(sagas.map(saga => fork(saga)));
}
