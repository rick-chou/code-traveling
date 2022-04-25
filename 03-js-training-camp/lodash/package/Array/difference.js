const { difference } = require('lodash');

difference([3, 2, 1], [4, 2]);
// => [3, 1]

/**
 * @example difference(array, [values])
 * @param array (Array): 需要处理的数组
 * @param [values] (...Array): 排除的值
 * @description 创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中
 * @param {Array} array
 * @param {Array} values
 * @param {Function} func
 */
const _difference = (array, values, func) => {
  const result = array.filter((item) => !values.includes(item));
  return (func && result.map((item) => func(item))) || result;
};

if (require.main === module) {
  console.log(_difference([3, 2, 1], [4, 2]));
  _difference([3, 2, 1], [4, 2], (item) => {
    console.log('item', item);
  });
}

module.exports = _difference;
