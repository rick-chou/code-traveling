const { once } = require('lodash');
const _before = require('./before');

function createApplication() {
  console.log('ing...');
  return Math.random();
}

var initialize = once(createApplication);
initialize();
initialize();
// `initialize` 只能调用 `createApplication` 一次。

/**
 * @example once(func)
 * @description 创建一个只能调用 func 一次的函数。 重复调用返回第一次调用的结果。 func 调用时， this 绑定到创建的函数，并传入对应参数
 * @param {Function} func
 */
const _once = (func) => {
  return _before(2, func);
};

if (require.main === module) {
  var initialize = _once(createApplication);
  initialize();
  initialize();
}

module.exports = _once;
