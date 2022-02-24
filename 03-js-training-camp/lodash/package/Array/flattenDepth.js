const { flattenDepth } = require('lodash');

var array = [1, [2, [3, [4]], 5]];

flattenDepth(array, 1);
// => [1, 2, [3, [4]], 5]

flattenDepth(array, 2);
// => [1, 2, 3, [4], 5]

/**
 * @example flattenDepth(array, [depth=1])
 * @description 根据 depth 递归减少 array 的嵌套层级
 * @param {Array} array
 * @param {number} depth
 */
const _flattenDepth = (array, depth = 1) => {
  return array.flat(depth);
};

if (require.main === module) {
  console.log(_flattenDepth(array, 1));
  console.log(_flattenDepth(array, 2));
}

module.exports = _flattenDepth;
