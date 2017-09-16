import { createStore, applyMiddleware, compose } from 'redux'
import { createLogicMiddleware } from 'redux-logic'
import { routerMiddleware } from 'react-router-redux'
import api from 'utils/api'
import loadingMiddleware from 'middlewares/loading'
import rootReducer from '../reducers'
import arrLogic from '../logic'

const deps = {
  api,
}

// create logic middleware
const logicMiddleware = createLogicMiddleware(arrLogic, deps)

const configureStore = (initialState = {}, history) => {
  const middlewares = [
    loadingMiddleware,
    logicMiddleware,
    routerMiddleware(history),
  ]

  const store = createStore(rootReducer, initialState,
    compose(
      applyMiddleware(...middlewares),
      window.devToolsExtension &&
      process.env.NODE_ENV !== 'production' ? window.devToolsExtension() : f => f,
    ),
  )

  return store
}

export default configureStore
