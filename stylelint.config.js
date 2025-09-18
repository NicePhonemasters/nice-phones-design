module.exports = {
  extends: 'stylelint-config-standard-scss',
  plugins: ['stylelint-scss'],
  rules: {
    'indentation': 2,
    'string-quotes': 'single',
    'color-hex-case': 'lower',
    'scss/at-import-partial-extension': 'never', // no .scss in imports
    'scss/at-import-no-partial-leading-underscore': true, // no _
    'selector-class-pattern': '^[a-z][a-zA-Z0-9]*(?:__?[a-zA-Z0-9]+)*(?:--[a-zA-Z0-9]+)?$', // BEM camelCase
    'at-rule-disallowed-list': ['import'], 
  },
};