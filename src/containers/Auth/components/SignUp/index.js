import React, { PureComponent } from 'react'
import { Form, GitHubButton, GoogleButton } from 'elements'
import { Button } from 'react-interface'
import Wrapper from './Wrapper'

export default class SignUp extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      email: '',
      password: '',
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state)
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  renderEmailForm () {
    const { providers } = this.props
    if (!providers.includes('email')) return null
    return (
      <Form onSubmit={this.handleSubmit}>
        <input type="text" name="username" placeholder="username" onChange={this.handleChange} />
        <input type="text" name="email" placeholder="email" onChange={this.handleChange} />
        <input type="password" name="password" placeholder="password" onChange={this.handleChange} />
        <Button type="submit" onClick={this.handleSubmit}>Sign Up</Button>
        {this.renderGithubAuth()}
        {this.renderGoogleAuth()}
      </Form>
    )
  }

  renderGithubAuth () {
    const { providers } = this.props
    if (!providers.includes('github')) return null
    return (
      <GitHubButton onClick={this.props.handleGitHubAuth}>
        Sign Up with GitHub
      </GitHubButton>
    )
  }

  renderGoogleAuth () {
    const { providers } = this.props
    if (!providers.includes('google')) return null
    return (
      <GoogleButton onClick={this.props.handleGitHubAuth}>
        Sign Up with Google
      </GoogleButton>
    )
  }

  render () {
    return (
      <Wrapper>
        {this.renderEmailForm()}
      </Wrapper>
    )
  }
}
