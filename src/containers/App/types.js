// @flow
import type { Dispatch as ReduxDispatch } from 'redux';

export type Action =
  { type: string, payload: Object }
;

export type Dispatch = ReduxDispatch<Action>;
