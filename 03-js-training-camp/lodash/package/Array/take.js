const { take } = require('lodash');

take([1, 2, 3]);
// => [1]

take([1, 2, 3], 2);
// => [1, 2]

take([1, 2, 3], 5);
// => [1, 2, 3]

take([1, 2, 3], 0);
// => []

/**
 * @example take(array, [n=1])
 * @description 创建一个数组切片，从array数组的起始元素开始提取n个元素
 * @param {Array} array
 * @param {number} n
 */
const _take = (array, n = 1) => {
  if (!n) return [];
  return array.slice(0, n);
};

if (require.main === module) {
  console.log(_take([1, 2, 3]));
  console.log(_take([1, 2, 3], 2));
  console.log(_take([1, 2, 3], 5));
  console.log(_take([1, 2, 3], 0));
}

module.exports = _take;
