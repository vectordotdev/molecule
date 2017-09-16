import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createStructuredSelector } from 'reselect'
import { increment, incrementAsync, decrement } from './actions'
import { selectCount } from './selectors'

import Wrapper from './Wrapper'
import CounterWrapper from './components/Counter'

class Counter extends Component {
  render () {
    return (
      <Wrapper>
        <CounterWrapper>{this.props.count}</CounterWrapper>
        <button onClick={this.props.actions.increment}>
          Increment
        </button>
        <button onClick={this.props.actions.incrementAsync}>
          Debounced Increment Async
        </button>
        <button onClick={this.props.actions.decrement}>
          Decrement
        </button>
      </Wrapper>
    )
  }
}

Counter.propTypes = {
  actions: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
}

const mapStateToProps = createStructuredSelector({
  count: selectCount(),
})

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({
      increment,
      incrementAsync,
      decrement,
    }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
