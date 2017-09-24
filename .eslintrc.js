module.exports = {
  extends: 'react-tools',
  settings: {
    'import/resolver': {
      "node": {
        "paths": ["src"]
      }
    }
  },
  plugins: [
    "class-property"
  ],
  rules: {
    'react/forbid-prop-types': 0,
    'class-methods-use-this': 0,
    'react/jsx-max-props-per-line': 0,
    'react/jsx-first-prop-new-line': 0,
    'react/jsx-closing-bracket-location': 0,
    'newline-per-chained-call': 0,
  }
}
