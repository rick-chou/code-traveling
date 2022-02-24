const { nth } = require('lodash');

var array = ['a', 'b', 'c', 'd'];

nth(array, 1);
// => 'b'

nth(array, -2);
// => 'c';

/**
 * @example nth(array, [n=0])
 * @description 获取array数组的第n个元素。如果n为负数，则返回从数组结尾开始的第n个元素
 * @param {Array} array 需要查找的数组
 * @param {number} n
 */
const _nth = (array, n) => {
  n = (array.length + n) % array.length;
  return array[n];
};

if (require.main === module) {
  console.log(_nth(array, 1));
  console.log(_nth(array, -2));
}

module.exports = _nth;
