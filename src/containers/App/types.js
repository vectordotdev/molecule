// @flow
import type { Dispatch as ReduxDispatch } from 'redux';

export type Action =
  { type: 'App/SET_NOTIFICATION', payload: Object }
;

export type Dispatch = ReduxDispatch<Action>;
