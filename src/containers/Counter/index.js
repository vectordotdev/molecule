import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { increment, incrementAsync, decrement } from './actions';
import { selectCount } from './selectors';

import Wrapper from './Wrapper';
import CounterWrapper from './components/Counter';

class Counter extends Component {
  render() {
    return (
      <Wrapper>
        <CounterWrapper>
          {this.props.count}
        </CounterWrapper>
        <button onClick={this.props.increment}>Increment</button>
        <button onClick={this.props.incrementAsync}>Increment Async</button>
        <button onClick={this.props.decrement}>Decrement</button>
      </Wrapper>
    );
  }
}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};

const mapStateToProps = createStructuredSelector({
  count: selectCount(),
});

const actions = {
  increment,
  incrementAsync,
  decrement,
};

export default connect(mapStateToProps, actions)(Counter);
