var path = require('path');

module.exports = {
  type: 'react-app',
  webpack: {
    aliases: {
      containers: path.resolve('src/containers'),
      components: path.resolve('src/components'),
      utils: path.resolve('src/utils'),
      middlewares: path.resolve('src/middlewares')
    }
  }
}
