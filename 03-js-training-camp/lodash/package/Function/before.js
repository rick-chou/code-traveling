const { before } = require('lodash');

function foo() {
  console.log('ing');
  return Math.random();
}

const bar = before(3, foo);

// console.log(bar());
// console.log(bar());
// console.log(bar());
// console.log(bar());

/**
 * @example before(n, func)
 * @description 创建一个调用func的函数，通过this绑定和创建函数的参数调用func，调用次数不超过 n 次。
 * @description 之后再调用这个函数，将返回一次最后调用func的结果
 * @param {number} n
 * @param {Function} func
 */
function _before(n, func) {
  var result;
  if (typeof func !== 'function') {
    throw new TypeError('Expect a function');
  }
  return function () {
    if (--n > 0) {
      result = func.apply(this, arguments);
    }
    if (n <= 1) {
      func = undefined;
    }
    return result;
  };
}

if (require.main === module) {
  const fn = _before(3, foo);
  console.log(fn());
  console.log(fn());
  console.log(fn());
  console.log(fn());
}

module.exports = _before;
