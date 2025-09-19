module.exports = {
  extends: 'stylelint-config-standard-scss',
  plugins: ['stylelint-scss'],
  overrides: [
    {
      files: ['**/*.module.scss', '**/*.module.css'],
      rules: {
        'scss/at-import-partial-extension': 'never', // no .scss in imports
        'scss/at-import-no-partial-leading-underscore': true, // no _
        'selector-class-pattern': '^[a-z][a-zA-Z0-9]*(?:__?[a-zA-Z0-9]+)*(?:--[a-zA-Z0-9]+)?$', // BEM camelCase
        'no-empty-source': null, // disables globally
      },
  }
  ]
};