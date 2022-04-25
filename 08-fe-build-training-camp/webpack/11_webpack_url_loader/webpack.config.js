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
       * url-loader
       * 允许你有条件地将文件转换为内联的 base-64 URL
       */
      {
        test: /\.(svg|png|gif|jpe?g)$/,
        use: {
          loader: 'url-loader',
          options: {
            // 单位 byte
            // 当大于这个阈值的时候 会交给file-loader处理
            limit: 1000,
          },
        },
      },
    ],
  },
};

// 占位符
// ext 扩展名
// name 文件名
// hash 结合文件内容 生成哈希
// contentHash
// hash:<length> 哈希长度
