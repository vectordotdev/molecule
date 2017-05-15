import { fromJS } from 'immutable';
import { INCREMENT, DECREMENT } from './constants';

// The initial state of the App
const initialState = fromJS({
  count: 0
});

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return state.set('count', state.get('count') + 1);

    case DECREMENT:
      return state.set('count', state.get('count') - 1);

    default:
      return state;
  }
}

export default counterReducer;
