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
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              // 往前找 postcss-loader
              // postcss-loader 不会识别@import语法 当为postcss-loader执行完后
              // css-loader 识别到了@import语法 读到对应的文件 但是css-loader不能够为这份文件添加前缀了
              // 当配置了 importLoaders 后 可以再次使用 postcss-loader
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('autoprefixer')],
              },
            },
          },
        ],
      },
    ],
  },
};
