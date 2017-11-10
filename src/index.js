import 'babel-polyfill'
import ReactDOM from 'react-dom'
import React from 'react'
import createHistory from 'history/createBrowserHistory'
import configureStore from './stores/store'
import Root from './containers/Root'
import './assets/reset.css'
import './global-styles'

// Create redux store with history
// this uses the singleton browserHistory provided by react-router
// Optionally, this could be changed to leverage a created history
// e.g. `const browserHistory = useRouterHistory(createBrowserHistory)();`
const initialState = {}
const history = createHistory()
const store = configureStore(initialState, history)
const rootEl = document.getElementById('root')

const render = Component => {
  ReactDOM.render(
    <Component history={history} store={store} />,
    rootEl // eslint-disable-line comma-dangle
  )
}

// Start the app
render(Root)

// Listen for changes in development and hot reload
if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./containers/Root', () => render(Root))
}
