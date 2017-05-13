import { fromJS } from 'immutable';
import { SET_AUTH_STATE } from './constants';

// The initial state of the App
const initialState = fromJS({
  user: {},
});

function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH_STATE:
      return state.set('user', action.payload.user);

    default:
      return state;
  }
}

export default authReducer;
