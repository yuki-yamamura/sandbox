module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  plugins: ['stylelint-order'],
  ignoreFiles: ['**/node_modules/**'],
  rules: {
    'selector-class-pattern': '^[a-z][a-zA-Z0-9-]+$',
    'selector-id-pattern': '^[a-z][a-zA-Z0-9-]+$',
  },
};
