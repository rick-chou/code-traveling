const { max } = require('lodash');
const _compact = require('../Array/compact');

max([4, 2, 8, 6]);
// => 8

max([]);
// => undefined

/**
 * @example max(array)
 * @description 计算 array 中的最大值。 如果 array 是 空的或者假值将会返回 undefined
 * @param {Array} array
 */
const _max = (array) => {
  if (!array || !array?.length) return undefined;
  return Math.max(..._compact(array));
};

if (require.main === module) {
  console.log(_max([4, 2, 8, 6]));
  console.log(_max([]));
}

module.exports = _max;
