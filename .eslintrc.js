module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: 'airbnb',

  plugins: [
    'import',
    'jsx-a11y',
    'react',
    'flowtype'
  ],

  env: {
    browser: true,
    node: true
  },

  globals: {

  },

  settings: {
    'import/resolver': {
      'node': {
        'paths': ['src']
      }
    },
    'flowtype': {
      'onlyFilesWithFlowAnnotation': true
    }
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
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'flowtype/boolean-style': [
      2,
      'boolean'
    ],
    'flowtype/define-flow-type': 1,
    'flowtype/delimiter-dangle': [
      2,
      'never'
    ],
    'flowtype/generic-spacing': [
      2,
      'never'
    ],
    'flowtype/no-primitive-constructor-types': 2,
    'flowtype/no-types-missing-file-annotation': 2,
    'flowtype/no-weak-types': 0,
    'flowtype/object-type-delimiter': [
      2,
      'comma'
    ],
    'flowtype/require-parameter-type': 2,
    'flowtype/require-return-type': [
      2,
      'always',
      {
        'annotateUndefined': 'never'
      }
    ],
    'flowtype/require-valid-file-annotation': 2,
    'flowtype/semi': [
      2,
      'always'
    ],
    'flowtype/space-after-type-colon': [
      2,
      'always'
    ],
    'flowtype/space-before-generic-bracket': [
      2,
      'never'
    ],
    'flowtype/space-before-type-colon': [
      2,
      'never'
    ],
    'flowtype/union-intersection-spacing': [
      2,
      'always'
    ],
    'flowtype/use-flow-type': 1,
    'flowtype/valid-syntax': 1
  },
};
