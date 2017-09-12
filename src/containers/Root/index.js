// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from '../../routes';

class Root extends React.Component {
  props: {
    history: Object,
    store: Object
  }
  render(): React$Element<any> {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <Router history={history} routes={routes} />
      </Provider>
    );
  }
}

export default Root;
