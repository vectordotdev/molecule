import { combineReducers } from 'redux'
import { LOCATION_CHANGE } from 'react-router-redux'

import app from './containers/App/reducer'
import auth from './containers/Auth/reducer'
import counter from './containers/Counter/reducer'

// Initial routing state
const routeInitialState = {
  location: null,
}

/**
 * Merge route into the global application state
 */
function routeReducer (state = routeInitialState, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return {
        ...state,
        location: action.payload,
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  route: routeReducer,
  global: app,
  auth,
  counter,
})

export default rootReducer
