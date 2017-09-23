import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Route, Switch } from 'react-router-dom'
import Network from 'react-network'

// Top level routes
import CounterPage from 'containers/Counter'
import AuthPage from 'containers/Auth'

// Components
import ProtectedRoute from 'HOC/ProtectedRoute'
import Navigation from 'components/Navigation'
import Wrapper from './Wrapper'

// Actions
import { setNotification, setNetworkStatus } from './actions'

class App extends Component {
  handleNetworkChange = ({ online }) => {
    this.props.actions.setNetworkStatus(online)
  }

  renderNetworkStatus (online) {
    return <p>Your are {online ? 'online' : 'not online'}.</p>
  }

  renderLoading (loading) {
    return loading ? <p>Loading...</p> : null
  }

  renderRoute () {
    return (
      <Switch>
        <ProtectedRoute path="/" exact component={CounterPage} {...this.props} />
        <Route path="/login" exact component={AuthPage} />
      </Switch>
    )
  }

  renderNotifications (notification) {
    if (!notification) return null
    return (
      <button onClick={() => this.props.actions.setNotification(undefined)}>
        {notification} [x]
      </button>
    )
  }

  render () {
    const { loading, notification, history, user } = this.props

    return (
      <Network
        onChange={this.handleNetworkChange}
        render={({ online }) => (
          <Wrapper>
            <Navigation user={user} />
            {this.renderNetworkStatus(online)}
            {this.renderNotifications(notification)}
            {this.renderLoading(loading)}
            {this.renderRoute(history)}
          </Wrapper>
        )}
      />
    )
  }
}

App.propTypes = {
  actions: PropTypes.object,
  user: PropTypes.object,
  notification: PropTypes.string,
  loading: PropTypes.bool,
}

App.defaultProps = {
  actions: {},
  history: {},
  user: null,
  notification: null,
  online: true,
  loading: false,
}

const mapStateToProps = state => ({
  notification: state.global.notification,
  online: state.global.online,
  loading: state.global.loading,
  location: state.route.location,
  user: state.auth.user,
})

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({
      setNotification,
      setNetworkStatus,
    }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
