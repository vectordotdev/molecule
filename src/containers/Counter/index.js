import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { increment, incrementAsync, decrement } from './actions';
import { selectCount } from './selectors';

class Counter extends Component {
  render() {
    return (
      <div>
        {this.props.count}
        <button onClick={this.props.actions.increment}>Increment</button>
        <button onClick={this.props.actions.incrementAsync}>Increment Async</button>
        <button onClick={this.props.actions.decrement}>Decrement</button>
      </div>
    );
  }
}

Counter.propTypes = {
  actions: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired
};

const mapStateToProps = createStructuredSelector({
  count: selectCount()
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      increment,
      incrementAsync,
      decrement
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
