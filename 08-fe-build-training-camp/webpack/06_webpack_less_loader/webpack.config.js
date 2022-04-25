const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      /**
       * style-loader
       * 将模块导出的内容作为样式并添加到 DOM 中
       *
       * css-loaders
       * 加载 CSS 文件并解析 import 的 CSS 文件，最终返回 CSS 代码
       *
       * less-loader
       * 加载并编译 LESS 文件
       *
       * 按照从右往左执行的顺序 如下
       */
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
    ],
  },
};
