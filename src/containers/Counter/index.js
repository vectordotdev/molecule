// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { increment, incrementAsync, decrement } from './actions';
import { selectCount } from './selectors';
import type { Action, Dispatch } from './types';
import Wrapper from './Wrapper';
import CounterWrapper from './components/Counter';

class Counter extends Component {
  props: {
    actions: {
      increment: () => Action,
      incrementAsync: () => Action,
      decrement: () => Action
    },
    count: number
  }
  render() {
    return (
      <Wrapper>
        <CounterWrapper>{this.props.count}</CounterWrapper>
        <button onClick={this.props.actions.increment}>Increment</button>
        <button onClick={this.props.actions.incrementAsync}>Increment Async</button>
        <button onClick={this.props.actions.decrement}>Decrement</button>
      </Wrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  count: selectCount()
});

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    actions: {
      increment: (): Action => dispatch(increment()),
      incrementAsync: (): Action => dispatch(increment()),
      decrement: (): Action => dispatch(decrement())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
