/* eslint-env node */
module.exports = {
  parserOptions: {
    ecmaVersion: 'latest'
  },
  env: {
    es2022: true,
    browser: true
  },
  extends: ['eslint:recommended', 'airbnb'],
  rules: {
    'comma-dangle': 'off'
  }
};
