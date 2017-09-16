import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Network from 'react-network'

import Navigation from 'components/Navigation'
import { setNotification, setNetworkStatus } from './actions'
import Wrapper from './Wrapper'

class App extends Component {
  handleNetworkChange = ({ online }) => {
    this.props.actions.setNetworkStatus(online)
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
            {this.props.loading && <p>Loading...</p>}
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
  notification: PropTypes.string,
  loading: PropTypes.bool,
}

App.defaultProps = {
  actions: {},
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
