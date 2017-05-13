import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from '../../routes';
import './reset.css';

class Root extends React.Component {
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <Router history={history} routes={routes} />
      </Provider>
    );
  }
}

Root.propTypes = {
  history: React.PropTypes.object.isRequired,
  store: React.PropTypes.object.isRequired,
};

export default Root;