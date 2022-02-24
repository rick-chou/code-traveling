const { last } = require('lodash');

last([1, 2, 3]);
// => 3

/**
 * @example head(array)
 * @description 获取数组 array 的第一个元素
 * @param {Array} array
 */
const _last = (array) => {
  return array && array.length ? array[array.length - 1] : undefined;
};

if (require.main === module) {
  console.log(_last([1, 2, 3]));
}

module.exports = _last;
