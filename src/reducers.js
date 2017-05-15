import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

import app from './containers/App/reducer';
import counter from './containers/Counter/reducer';

// Initial routing state
const routeInitialState = fromJS({
  locationBeforeTransitions: null,
});

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload,
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  route: routeReducer,
  global: app,
  counter,
});

export default rootReducer;
