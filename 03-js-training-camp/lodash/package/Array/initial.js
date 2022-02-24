const { initial } = require('lodash');

initial([1, 2, 3]);
// => [1, 2]

/**
 * @example initial(array)
 * @description 获取数组array中除了最后一个元素之外的所有元素（注：去除数组array中的最后一个元素）
 * @param {Array} array
 */
const _initial = (array) => {
  return array.slice(0, -1);
};

if (require.main === module) {
  console.log(_initial([1, 2, 3]));
}

module.exports = _initial;
