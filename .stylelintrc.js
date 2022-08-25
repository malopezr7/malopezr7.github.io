module.exports = {
  customSyntax: '@stylelint/postcss-css-in-js',
  extends: [
    'stylelint-config-recommended',
    'stylelint-a11y/recommended',
    'stylelint-config-rational-order',
  ],
  plugins: [
    'stylelint-order',
    'stylelint-use-logical',
    'stylelint-a11y',
    'stylelint-config-rational-order/plugin',
  ],
  rules: {
    'order/order': [],
    'plugin/rational-order': [
      true,
      {
        'border-in-box-model': false,
      },
    ],
    'csstools/use-logical': true,
    'unit-disallowed-list': [
      ['px'],
      {
        ignoreProperties: {
          px: ['/^border/', 'box-shadow', 'clip'],
        },
        severity: 'warning',
      },
    ],
    // Styled components conditional blocks are not supported in css in js stylelint's implementation, and it throws false positives
    'no-duplicate-selectors': null,
    // To allow the use of util functions like addAlpha
    'function-no-unknown': null,
    // Deactivate because stylelint does not understand styles scope inside a switch case
    'no-descending-specificity': null,
    // Deactivate to allow empty SC
    'no-empty-source': null,
    // Disallow units for zero lengths
    'length-zero-no-unit': true,
  },
};
