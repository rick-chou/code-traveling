module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-console': 'off',
    'comma-dangle': 'off',
    'implicit-arrow-linebreak': 'off',
    'function-paren-newline': 'off',
    'consistent-return': 'off',
    'no-param-reassign': 'off',
    'no-unused-expressions': 'off',
  },
};
