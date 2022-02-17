const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(svg|png|gif|jpe?g)$/,
        type: 'asset/resource',
        generator: {
          filename: '[name].[hash:4][ext]',
        },
      },
    ],
  },
};
