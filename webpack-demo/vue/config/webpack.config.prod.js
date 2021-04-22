const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, '../public/index.html'),
});

module.exports = {
  mode: 'production', // 和开发环境下的配置只是修改了 mode
  entry: path.resolve(__dirname, '../main.js'),
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'js/[name].[hash].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: ['vue-loader'],
      },
    ],
  },

  plugins: [htmlWebpackPlugin, new CleanWebpackPlugin(), new VueLoaderPlugin()],

  resolve: {
    extensions: ['.vue'],
  },
};
