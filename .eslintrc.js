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
    'jsx-a11y/no-static-element-interactions': 0,
    'newline-per-chained-call': 0,
    'no-confusing-arrow': 0,
    'react/no-array-index-key': 0,
    'react/no-danger': 0,
    'react/require-default-props': 0,
    'space-infix-ops': 0,
    "comma-dangle": ["error", {
      'functions': 'ignore',
      'objects': 'only-multiline',
      'imports': 'only-multiline',
      'exports': 'only-multiline',
      'arrays': 'only-multiline',
    }],
  }
}
