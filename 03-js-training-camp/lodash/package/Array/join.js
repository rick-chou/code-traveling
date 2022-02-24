const { join } = require('lodash');

join(['a', 'b', 'c'], '~');
// => 'a~b~c'

/**
 * @example join(array, [separator=','])
 * @description 将 array 中的所有元素转换为由 separator 分隔的字符串
 * @param {Array} array
 * @param {string} separator
 */
const _join = (array, separator = ',') => {
  return array.join(separator);
};

if (require.main === module) {
  console.log(_join(['a', 'b', 'c'], '~'));
}

module.exports = _join;
