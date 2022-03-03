const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [],
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://open.iciba.com',
        pathRewrite: { '^/api': '' },
        changeOrigin: true,
      },
    },
  },
  mode: 'development',
  plugins: [new HtmlWebpackPlugin()],
};
