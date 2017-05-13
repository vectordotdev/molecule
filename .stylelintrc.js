module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'property-no-unknown': [ true, {
      ignoreProperties: [
        'composes',
        'lost-align',
        'lost-center',
        'lost-column',
        'lost-column-cycle',
        'lost-column-rounder',
        'lost-flex-container',
        'lost-masonry-column',
        'lost-masonry-wrap',
        'lost-move',
        'lost-offset',
        'lost-row',
        'lost-unit',
        'lost-utility',
        'lost-waffle',
        'rule-nested-empty-line-before'
      ],
    }],
  },
};
