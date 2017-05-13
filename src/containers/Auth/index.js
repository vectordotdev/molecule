import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setAuthState } from './actions';

class Auth extends Component {
  componentWillMount() {
    this.props.actions.setAuthState({});
  }

  render() {
    return (
      <div>
        Auth Page
      </div>
    );
  }
}

Auth.propTypes = {};

function mapStateToProps(state, props) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      setAuthState,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
