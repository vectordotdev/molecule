import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createSelector } from 'reselect'
import Network from 'react-network'

import Navigation from 'components/Navigation'
import { setNotification, setNetworkStatus } from './actions'
import { selectNotification } from './selectors'
import Wrapper from './Wrapper'

class App extends Component {
  handleNetworkChange = ({ online }) => {
    this.props.actions.setNetworkStatus(online)
    this.props.actions.setNotification('Offline')
  }

  render () {
    return (
      <Network
        onChange={this.handleNetworkChange}
        render={({ online }) => (
          <Wrapper>
            <Navigation />
            <p>Your are {online ? 'online' : 'not online'}.</p>
            {
              this.props.notification &&
              <button
                onClick={() => this.props.actions.setNotification(undefined)}
              >
                {this.props.notification} [x]
              </button>
            }
            {this.props.children}
          </Wrapper>
        )}
      />
    )
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  actions: PropTypes.object,
  notification: PropTypes.string
}

App.defaultProps = {
  actions: {},
  notification: undefined,
  online: true
}

const mapStateToProps = state => ({
  notification: state.notification,
  online: state.online
})

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({
      setNotification,
      setNetworkStatus
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
