// @flow
import type { Dispatch as ReduxDispatch } from 'redux';

export type Action = { type: string };

export type Dispatch = ReduxDispatch<Action>;
