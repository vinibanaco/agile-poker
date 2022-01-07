'use strict';

module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb-base', 'plugin:node/recommended', 'plugin:security/recommended', 'prettier'],
  plugins: ['security', 'prettier'],
  parserOptions: {
    ecmaVersion: 13,
  },
  rules: {
    'arrow-body-style': 'off',
    'prettier/prettier': ['error'],
    'no-underscore-dangle': ['off'],
    strict: ['error', 'safe'],
  },
};
