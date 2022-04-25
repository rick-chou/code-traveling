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
       * 所以是先执行 css-loader 再执行 style-loader 
       * 按照从右往左执行的顺序 所以 css-loader 写在 style-css 右边
       */
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
