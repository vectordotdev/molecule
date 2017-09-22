import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Route, Switch } from 'react-router-dom'
import Network from 'react-network'

// Components
import Navigation from 'components/Navigation'
import Wrapper from './Wrapper'

// Actions
import { setNotification, setNetworkStatus } from './actions'

// Top level routes
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

  renderRoute () {
    return (
      <Switch>
        <Route path="/" exact component={CounterPage} />
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
    const { loading, notification, history } = this.props
    console.log(this.props)

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
  location: state.route.location
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
