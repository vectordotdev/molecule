import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { login, signUp } from './actions'
import Wrapper from './components/Wrapper'

class Auth extends Component {
  constructor (props) {
    super(props)
    console.log(props)

    this.state = {
      mode: props.location.pathname.includes('login')
        ? 'login'
        : 'signUp',
    }
  }
  render () {
    return (
      <Wrapper id="auth">
        <a onClick={() => this.setState({ mode: 'signUp' })}>Switch</a>
        {this.props.errors.map(e => <li>{e}</li>)}
        {
          this.state.mode === 'login' &&
          <button onClick={this.props.actions.login}>
            Login
          </button>
        }
        {
          this.state.mode === 'signUp' &&
          <button onClick={this.props.actions.signUp}>
            Sign Up
          </button>
        }
      </Wrapper>
    )
  }
}

Auth.propTypes = {
  actions: PropTypes.object.isRequired,
  errors: PropTypes.array,
}

Auth.defaultProps = {
  actions: {},
  errors: [],
}

const mapStateToProps = state => ({
  user: state.user,
  errors: state.auth.errors,
})

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({
      login,
      signUp,
    }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
