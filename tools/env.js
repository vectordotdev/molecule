'use strict';

function getClientEnvironment(publicUrl) {
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
