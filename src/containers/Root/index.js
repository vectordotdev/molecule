import React from 'react'
import { Provider } from 'react-redux'
import App from 'containers/App'

class Root extends React.Component {
  render () {
    const { store, history } = this.props
    return (
      <Provider store={store}>
        <App history={history} />
      </Provider>
    )
  }
}

Root.propTypes = {
  history: React.PropTypes.object.isRequired,
  store: React.PropTypes.object.isRequired,
}

export default Root
