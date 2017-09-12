// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
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
  render(): React$Element<any> {
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

function mapDispatchToProps(dispatch: Dispatch): Object {
  return {
    actions: {
      increment: (): Action => dispatch(increment()),
      incrementAsync: (): Action => dispatch(incrementAsync()),
      decrement: (): Action => dispatch(decrement())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
