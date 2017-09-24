import React, { PureComponent } from 'react'
import Form from 'elements/Form'

export default class Login extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
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

  render () {
    return (
      <Form onSubmit={this.handleSubmit}>
        <input type="text" name="email" placeholder="email" onChange={this.handleChange} />
        <input type="password" name="password" placeholder="password" onChange={this.handleChange} />
        <button type="submit" onClick={this.handleSubmit}>Sign Up</button>
      </Form>
    )
  }
}
