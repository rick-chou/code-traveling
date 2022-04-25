const { concat } = require('lodash');

var array = [1];
concat(array, 2, [3], [[4]]);
// => [1, 2, 3, [4]]

/**
 * @example concat(array, [values])
 * @param array (Array): 需要处理的数组
 * @param [values] (...*): 连接的值
 * @description 创建一个新数组，将array与任何数组 或 值连接在一起 返回一个新数组
 * @param {Array} array
 * @param {*} values
 */
const _concat = (array, ...values) => {
  return array.concat(...values);
};

if (require.main === module) {
  console.log(_concat([1], 2, [3], [[4]]));
}

module.exports = _concat;
