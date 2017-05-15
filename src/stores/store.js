import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { fromJS } from 'immutable';
import rootReducer from '../reducers';

// create saga middleware
const sagaMiddleware = createSagaMiddleware();

const configureStore = (initialState = {}, history) => {
  const middlewares = [routerMiddleware(history)];

  const store = createStore(rootReducer, fromJS(initialState),
    compose(
      applyMiddleware(...middlewares),
      window.devToolsExtension &&
      process.env.NODE_ENV !== 'production' ? window.devToolsExtension() : f => f,
    ),
  );

  return store;
};

export default configureStore;
