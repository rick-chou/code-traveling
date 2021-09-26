const path = require('path');
// 生成html文件 自动引入打包后的js文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 打包前 清理打包目录文件夹 因为打包后的文件带hash值 不会重名 所以不会覆盖 多次打包就会有很多bundle.js
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, '../public/index.html'),
});

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, '../src/index.tsx'),
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'js/[name].[hash].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 将 JS 字符串生成为 style 节点
          'style-loader',
          // 将 CSS 转化成 CommonJS 模块
          'css-loader',
          // 将 Sass 编译成 CSS
          'sass-loader',
        ],
      },
    ],
  },

  plugins: [htmlWebpackPlugin, new CleanWebpackPlugin()],

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
