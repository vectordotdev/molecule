import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Route, Switch, withRouter } from 'react-router-dom'
import Network from 'react-network'
import { Theme, Icon } from 'react-interface'

// Elements
import { Notification } from 'elements'

// Actions
import { logout } from 'containers/Auth/actions'
import { setNotification, setNetworkStatus } from 'containers/App/actions'

// Top level routes
import CounterPage from 'containers/Counter'
import AuthPage from 'containers/Auth'

// Components
import ProtectedRoute from 'HOC/ProtectedRoute'
import Navigation from 'components/Navigation'
import Footer from 'components/Footer'
import Wrapper from './components/Wrapper'
import Main from './components/Main'

// Selectors
import {
  selectShowNavigation,
  selectShowFooter,
} from './selectors'

class App extends Component {
  handleNetworkChange = ({ online }) => {
    this.props.actions.setNetworkStatus(online)
  }

  renderNetworkStatus (online) {
    if (!online) {
      return <span><Icon type="alert-circle" /> not online</span>
    }

    return null
  }

  renderLoading (loading) {
    return loading ? <p>Loading...</p> : null
  }

  renderRoute () {
    return (
      <Switch>
        <ProtectedRoute path="/" exact component={CounterPage} {...this.props} />
        <Route path="/auth" exact component={AuthPage} />
      </Switch>
    )
  }

  renderNotifications (notification) {
    if (!notification) return null
    return (
      <Notification
        notification={notification}
        setNotification={this.props.actions.setNotification}
      />
    )
  }

  renderNavigation (user, showNavigation, logout) {
    if (!showNavigation || !user) return null
    return <Navigation user={user} logout={logout} />
  }

  renderFooter (showFooter) {
    if (!showFooter) return null
    return <Footer />
  }

  render () {
    const {
      loading,
      notification,
      history,
      user,
      showNavigation,
      showFooter,
      actions,
    } = this.props

    return (
      <Network
        onChange={this.handleNetworkChange}
        render={({ online }) => (
          <Theme>
            <Wrapper>
              {this.renderNavigation(user, showNavigation, actions.logout)}
              <Main>
                {this.renderNetworkStatus(online)}
                {this.renderNotifications(notification)}
                {this.renderLoading(loading)}
                {this.renderRoute(history)}
              </Main>
              {this.renderFooter(showFooter)}
            </Wrapper>
          </Theme>
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
  location: PropTypes.object,
}

App.defaultProps = {
  actions: {},
  history: {},
  location: {},
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
  showNavigation: selectShowNavigation(state),
  showFooter: selectShowFooter(state),
})

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({
      setNotification,
      setNetworkStatus,
      logout,
    }, dispatch),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
