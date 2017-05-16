import 'babel-polyfill';
import { AppContainer } from 'react-hot-loader';
import ReactDOM from 'react-dom';
import React from 'react';
import { browserHistory, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { isNative } from 'utils/electron';
import { makeSelectLocationState } from 'containers/App/selectors';
import configureStore from './stores/store';
import Root from './containers/Root';
import './assets/reset.css';
import './global-styles';

// Create redux store with history
// this uses the singleton browserHistory provided by react-router
// Optionally, this could be changed to leverage a created history
// e.g. `const browserHistory = useRouterHistory(createBrowserHistory)();`
const initialState = {};
const routerHistory = isNative() ? hashHistory : browserHistory;
const store = configureStore(initialState, routerHistory);

// Sync history and store, as the react-router-redux reducer
// is under the non-default key ("routing"), selectLocationState
// must be provided for resolving how to retrieve the "route" in the state
const history = syncHistoryWithStore(routerHistory, store, {
  selectLocationState: makeSelectLocationState(),
});

const rootEl = document.getElementById('root');

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component history={history} store={store} />
    </AppContainer>,
    rootEl // eslint-disable-line comma-dangle
  );
};

// Start the app
render(Root);

// Listen for changes in development and hot reload
if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./containers/Root', () => render(Root));
}
