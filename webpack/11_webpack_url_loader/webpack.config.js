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
        use: {
          loader: 'url-loader',
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
