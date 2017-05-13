import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import { fromJS } from 'immutable';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

// create saga middleware
const sagaMiddleware = createSagaMiddleware();

const configureStore = (initialState = {}, history) => {
  const middlewares = [sagaMiddleware, routerMiddleware(history)];

  const store = createStore(rootReducer, fromJS(initialState),
    compose(
      applyMiddleware(...middlewares),
      window.devToolsExtension &&
      process.env.NODE_ENV !== 'production' ? window.devToolsExtension() : f => f,
    ),
  );

  // Run the saga
  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
