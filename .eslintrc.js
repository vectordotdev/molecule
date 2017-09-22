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
    'class-methods-use-this': 0
  }
}
