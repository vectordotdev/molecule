import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ text, ...props }) => (
  <a {...props}>
    {text} [x]
  </a>
);

Notification.propTypes = {
  text: PropTypes.string
};

export default Notification;
