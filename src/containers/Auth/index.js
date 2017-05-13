import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

Auth.propTypes = {
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
      setAuthState,
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
