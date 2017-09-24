import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { login, signUp } from './actions'
import Wrapper from './components/Wrapper'
import Login from './components/Login'
import SignUp from './components/SignUp'

class Auth extends Component {
  constructor (props) {
    super(props)
    const { pathname } = props.location

    this.state = {
      mode: pathname.includes('login') ? 'login' : 'signUp',
    }
  }

  toggleMode = () => {
    this.setState({
      mode: this.state.mode === 'signUp' ? 'login' : 'signUp',
    })
  }

  renderAuth () {
    if (this.state.mode === 'login') {
      return <Login onSubmit={this.props.actions.login} />
    }

    return <SignUp onSubmit={this.props.actions.signUp} />
  }

  render () {
    return (
      <Wrapper id="auth">
        <div onClick={this.toggleMode}>
          {this.state.mode === 'signUp' ? 'Already have an account? Login' : 'Need an account? Sign Up'}
        </div>
        {this.props.errors.map(e => <li key={e}>{e}</li>)}
        {this.renderAuth()}
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
