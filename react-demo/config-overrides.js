const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');
module.exports = override(
  addWebpackAlias({
    '@containers': path.resolve(__dirname, 'src/containers'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@store': path.resolve(__dirname, 'src/store'),
    '@router': path.resolve(__dirname, 'src/router'),
  })
);
