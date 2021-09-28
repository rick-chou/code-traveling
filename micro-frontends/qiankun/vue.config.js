const { resolve } = require('path');
module.exports = {
  chainWebpack: (config) => {
    // 添加别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@components', resolve('src/components'))
      .set('@pages', resolve('src/pages'))
      .set('@router', resolve('src/router'))
      .set('@store', resolve('src/store'));
  },
  configureWebpack: {
    devServer: {
      // 设置端口
      port: 3001,
      // 自动打开
      open: true,
    },
  },
};
