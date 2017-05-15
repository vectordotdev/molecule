import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

class Root extends React.Component {
  render() {
    const { store, history, children } = this.props;
    return (
      <Provider store={store}>
        <Router history={history}>
          {children}
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
