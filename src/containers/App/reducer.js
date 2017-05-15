import { fromJS } from 'immutable';
import { SET_NOTIFICATION } from './constants';

// The initial state of the App
const initialState = fromJS({
  notification: '',
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_NOTIFICATION:
      return state.set('notification', action.payload.notification);

    default:
      return state;
  }
}

export default appReducer;
