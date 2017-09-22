import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import Network from 'react-network'

// Components
import Navigation from 'components/Navigation'
import Wrapper from './Wrapper'

// Actions
import { setNotification, setNetworkStatus } from './actions'

// Routes
import CounterPage from '../../containers/Counter'

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

  renderRoute (history) {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={CounterPage} />
          <Redirect to="/" />
        </Switch>
      </Router>
    )
  }

  renderNotifications (notification) {
    if (!notification) return null
    return (
      <button
        onClick={() => this.props.actions.setNotification(undefined)}
      >
        {notification} [x]
      </button>
    )
  }

  render () {
    const { loading, notification, history } = this.props

    return (
      <Network
        onChange={this.handleNetworkChange}
        render={({ online }) => (
          <Wrapper>
            <Navigation />
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
  history: PropTypes.object,
  actions: PropTypes.object,
  notification: PropTypes.string,
  loading: PropTypes.bool,
}

App.defaultProps = {
  actions: {},
  history: {},
  notification: undefined,
  online: true,
  loading: false,
}

const mapStateToProps = state => ({
  notification: state.global.notification,
  online: state.global.online,
  loading: state.global.loading,
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
