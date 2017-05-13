import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Navigation from 'components/Navigation';
import { setNotificationState } from './actions';
import './App.css';

class App extends Component {
  componentWillMount() {
    this.props.actions.setNotificationState({});
  }

  render() {
    return (
      <div>
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  actions: PropTypes.object
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      setNotificationState,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
