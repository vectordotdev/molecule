module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: 'airbnb',

  plugins: [
    'import',
    'jsx-a11y',
    'react',
  ],

  env: {
    browser: true,
    node: true
  },

  globals: {

  },

  // settings: {
  //   'import/resolver': {
  //     webpack: {
  //       config: './webpackConfig/webpack.config.dev.js',
  //     },
  //   },
  // },

  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            modules: [
              './node_modules',
              './src'
            ],
            extensions: ['.js', '.jsx'],
          },
        },
      },
    },
  },


  rules: {
    'func-names': [2, 'as-needed'],
    'import/prefer-default-export': 0,
    'react/require-default-props': 0,
    'react/prefer-stateless-function': 0,
    'import/no-extraneous-dependencies': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/forbid-prop-types': 0,
    'comma-dangle': 0,
    'import/extensions': 0,
    'eol-last': 0,
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }]
  },
};
