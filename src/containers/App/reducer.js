import { fromJS } from 'immutable';
import { SET_NOTIFICATION_STATE } from './constants';

// The initial state of the App
const initialState = fromJS({
  notifications: [],
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_NOTIFICATION_STATE:
      return state.set('notifications', action.payload.notifications);

    default:
      return state;
  }
}

export default appReducer;
