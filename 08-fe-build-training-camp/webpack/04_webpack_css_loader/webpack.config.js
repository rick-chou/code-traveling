const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  /**
   * webpack 只能理解 JavaScript 和 JSON 文件
   * 处理其他类型的文件 需要使用loader
   * loader 一般做语法层面的事 只做转换
   * plugin 可以做一些功能层面的事 用来扩展webpack的功能 比如环境注入
   *
   * loader有两个属性
   * test 匹配哪些文件
   * use 使用哪些loader 当多个时 是一个数组 顺序是从右往左执行
   */
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['css-loader'],
        // 一个时 等价于下面这种写法
        // use: 'css-loader',
      },
    ],
  },
};
