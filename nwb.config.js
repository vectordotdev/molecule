const path = require('path')
const dotenv = require('dotenv')

// In development use a .env file for convenience
if (process.env.NODE_ENV === 'development') {
  dotenv.config()
}

module.exports = {
  type: 'react-app',
  webpack: {
    aliases: {
      containers: path.resolve('src/containers'),
      components: path.resolve('src/components'),
      utils: path.resolve('src/utils'),
      middlewares: path.resolve('src/middlewares'),
      elements: path.resolve('src/elements'),
      HOC: path.resolve('src/HOC'),
    },
    define: {
      AUTH0_ID: JSON.stringify(process.env.AUTH0_ID),
      AUTH0_DOMAIN: JSON.stringify(process.env.AUTH0_DOMAIN),
    },
  },
}
