import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const renderRoute = (props, Component) => {
  if (!props.user) {
    return (
      <Redirect to={{
        pathname: '/auth',
        state: { from: props.location },
      }} />
    )
  }

  return <Component {...props} />
}

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => renderRoute({ ...rest, ...props }, Component)}
  />
)

const mapStateToProps = ({ auth }) => ({
  user: auth.user,
})

export default connect(mapStateToProps)(ProtectedRoute)
