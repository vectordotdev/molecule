import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from '../reducers';

const configureStore = (initialState = {}, history) => {
  const middlewares = [ReduxThunk, routerMiddleware(history)];

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middlewares),
      window.devToolsExtension && process.env.NODE_ENV !== 'production'
        ? window.devToolsExtension()
        : f => f,
    ),
  );

  return store;
};

export default configureStore;
