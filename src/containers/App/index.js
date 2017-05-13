import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Navigation from 'components/Navigation';
import { setNotificationState } from './actions';
import Wrapper from './Wrapper';

class App extends Component {
  componentWillMount() {
    this.props.actions.setNotificationState({});
  }

  render() {
    return (
      <Wrapper>
        <Navigation />
        {this.props.children}
      </Wrapper>
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
