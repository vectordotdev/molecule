import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import AuthPage from './containers/Auth';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={AuthPage} />
  </Route>
);
