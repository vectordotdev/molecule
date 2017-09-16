module.exports = {
  extends: 'react-tools',
  settings: {
    'import/resolver': {
      "node": {
        "paths": ["src"]
      }
    }
  },
  rules: {
    'react/forbid-prop-types': 0
  }
}