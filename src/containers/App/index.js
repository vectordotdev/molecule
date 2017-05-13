import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';

import Navigation from 'components/Navigation';
import { setNotificationState } from './actions';

class App extends Component {
  componentWillMount() {
    this.props.actions.setNotificationState({});
  }

  render() {
    console.log(process.env)
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
};

function mapStateToProps(state, props) {
  return {
    user: state.user,
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
