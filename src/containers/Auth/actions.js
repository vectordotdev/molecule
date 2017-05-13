import { SET_AUTH_STATE } from './constants';

export function setAuthState(auth) {
  return {
    type: SET_AUTH_STATE,
    payload: {
      auth,
    },
  };
}
