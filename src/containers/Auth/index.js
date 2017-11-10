import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Center, Panel, FormError } from 'elements'
import { login, signUp, githubAuth } from './actions'
import Wrapper from './components/Wrapper'
import Login from './components/Login'
import SignUp from './components/SignUp'

class Auth extends Component {
  constructor (props) {
    super(props)
    const { pathname, state } = props.location

    this.state = {
      mode: pathname.includes('login') ? 'login' : 'signUp',
      from: state ? state.from : null,
      providers: ['github', 'google', 'email'],
      switchable: true,
    }
  }

  toggleMode = () => {
    this.setState({
      mode: this.state.mode === 'signUp' ? 'login' : 'signUp',
    })
  }

  handleGitHubAuth = () => {
    this.props.actions.githubAuth(this.state.from)
  }

  handleLogin = user => {
    this.props.actions.login(user, this.state.from)
  }

  handleSignUp = user => {
    this.props.actions.signUp(user, this.state.from)
  }

  renderAuth () {
    if (this.state.mode === 'login') {
      return (
        <Login
          onSubmit={this.handleLogin}
          handleGitHubAuth={this.handleGitHubAuth}
          providers={this.state.providers}
          errors={this.props.errors}
        />
      )
    }

    return (
      <SignUp
        onSubmit={this.handleSignUp}
        handleGitHubAuth={this.handleGitHubAuth}
        providers={this.state.providers}
        errors={this.props.errors}
      />
    )
  }

  renderSwitchMode () {
    if (!this.state.switchable) return null
    return (
      <div onClick={this.toggleMode}>
        {
          this.state.mode === 'signUp'
            ? <span>Already have an account? <a>Login</a></span>
            : <span>Need an account? <a>Sign Up</a></span>
        }
      </div>
    )
  }

  render () {
    return (
      <Wrapper id="auth">
        <Center>
          <Panel>
            {this.props.errors.map(e => <FormError key={e}>{e}</FormError>)}
            {this.renderAuth()}
            {this.renderSwitchMode()}
          </Panel>
        </Center>
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
      githubAuth,
    }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
