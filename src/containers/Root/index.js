import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import App from 'containers/App'

class Root extends React.Component {
  render () {
    const { store, history } = this.props
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App history={history} />
        </ConnectedRouter>
      </Provider>
    )
  }
}

Root.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
}

export default Root
