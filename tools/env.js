'use strict';

// Grab NODE_ENV and environment variables and prepare them to be
// injected into the application via DefinePlugin in Webpack configuration.

function getClientEnvironment(publicUrl) {
  require('dotenv').config({ silent: true });
  var raw = Object
    .keys(process.env)
    .reduce((env, key) => {
      env[key] = process.env[key];
      return env;
    }, {
      // Useful for determining whether we’re running in production mode.
      // Most importantly, it switches React into the correct mode.
      'NODE_ENV': process.env.NODE_ENV || 'development'
    });
  // Stringify all values so we can feed into Webpack DefinePlugin
  var stringified = {
    'process.env': Object
      .keys(raw)
      .reduce((env, key) => {
        env[key] = JSON.stringify(raw[key]);
        return env;
      }, {})
  };

  return { raw, stringified };
}

module.exports = getClientEnvironment;
