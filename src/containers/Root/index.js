import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import CounterPage from '../../containers/Counter';

class Root extends React.Component {
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={CounterPage} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

Root.propTypes = {
  history: React.PropTypes.object.isRequired,
  store: React.PropTypes.object.isRequired,
};

export default Root;
