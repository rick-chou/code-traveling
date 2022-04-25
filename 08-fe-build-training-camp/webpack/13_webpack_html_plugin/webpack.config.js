const path = require('path');
// 该插件将为你生成一个 HTML5 文件， 在 body 中使用 script 标签引入你所有 webpack 生成的 bundle
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, '/index.html'),
});

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [],
  },
  // 会生成一个html
  // plugins: [new HtmlWebpackPlugin()],
  // 会以template中的html为模版 生成一个新的html
  plugins: [htmlWebpackPlugin],
};
