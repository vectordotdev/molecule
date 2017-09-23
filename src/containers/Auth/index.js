import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { login, signup } from './actions'
import Wrapper from './components/Wrapper'

class Auth extends Component {
  render () {
    return (
      <Wrapper>
        <div id="auth" />
        <button onClick={this.props.actions.login}>
          Login
        </button>
      </Wrapper>
    )
  }
}

Auth.propTypes = {
  actions: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  user: state.user,
})

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({
      login,
      signup,
    }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
