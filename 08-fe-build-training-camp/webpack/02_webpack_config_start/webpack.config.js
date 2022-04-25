const path = require('path');

module.exports = {
  // 入口
  // 指示webpack应该使用哪个模块来作为依赖图的开始
  // 默认值 ./src/index.js
  entry: './src/index.js',
  // 出口
  // 在哪里输出bundle
  // 默认值 ./dist/main.js
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
