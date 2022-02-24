const { slice } = require('lodash');

var array = [1, 2, 3];

slice(array, 1, 2);
// => [2]

/**
 * @example slice(array, [start=0], [end=array.length])
 * @description 裁剪数组array，从 start 位置开始到end结束，但不包括 end 本身的位置
 * @param {Array} array
 * @param {number} start
 * @param {number} end
 */
const _slice = (array, start = 0, end = array.length - 1) => {
  return array.slice(start, end);
};

if (require.main === module) {
  console.log(_slice(array, 1, 2));
}

module.exports = _slice;
