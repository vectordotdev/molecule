// import React from 'react'
// import { Route, Redirect } from 'react-router-dom'
//
// const ProtectedRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={props => (
//     props.isAuthenticated ? (
//       <Component {...props} />
//     ) : (
//       <Redirect to={{
//         pathname: '/login',
//         state: { from: props.location },
//       }} />
//     )
//   )} />
// )
//
// export default ProtectedRoute

import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const renderRoute = (props, Component) => {
  console.log(props)
  if (!props.user) {
    return (
      <Redirect to={{
        pathname: '/login',
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

export default ProtectedRoute
