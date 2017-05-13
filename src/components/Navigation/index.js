/**
*
* Navigation
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';

function Navigation({ user, handleLogout }) {
  return (
    <ul>
      <li><a onClick={handleLogout}>Link #1</a>{user}</li>
    </ul>
  );
}

Navigation.propTypes = {
  handleLogout: PropTypes.func,
  user: PropTypes.instanceOf(Immutable.Map),
};

export default Navigation;
