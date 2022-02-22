const { min } = require('lodash');

min([4, 2, 8, 6]);
// => 2

min([]);
// => undefined

/**
 * @example min(array)
 * @description 计算 array 中的最小值。 如果 array 是 空的或者假值将会返回 undefined
 * @param {Array} array
 */
const _min = (array) => {
  if (!array || !array?.length) return undefined;
  return Math.min(...array);
};

if (require.main === module) {
  console.log(_min([4, 2, 8, 6]));
  console.log(_min([]));
}

module.exports = _min;
