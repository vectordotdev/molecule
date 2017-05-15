import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import Navigation from 'components/Navigation';
import { setNotification } from './actions';
import { selectNotification } from './selectors';
import Wrapper from './Wrapper';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Navigation />
        {
          this.props.notification.length !== 0 &&
          <a
            onClick={() => this.props.actions.setNotification('')}
          >
            {this.props.notification} [x]
          </a>
        }
        {this.props.children}
      </Wrapper>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  actions: PropTypes.object,
  notification: PropTypes.string
};

const mapStateToProps = createStructuredSelector({
  notification: selectNotification()
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      setNotification,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
