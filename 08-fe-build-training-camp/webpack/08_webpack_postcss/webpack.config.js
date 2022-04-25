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
       * postcss-loader
       * 使用 PostCSS 加载并转换 CSS/SSS 文件
       * https://postcss.org/
       *
       * 按照从右往左执行的顺序 如下
       */
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                // autoprefixer
                // 自动为css添加适应各浏览器的前缀
                // 取决于 .browserslistrc文件
                plugins: [require('autoprefixer')],
              },
            },
          },
        ],
      },
    ],
  },
};
