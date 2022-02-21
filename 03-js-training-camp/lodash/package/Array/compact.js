const { compact } = require('lodash');

/**
 * @name compact(array)
 * @param array (Array): 需要处理的数组
 * @description 处理假值 返回一个新数组
 * @example
 * - false
 * - NaN
 * - “”
 * - undefined
 * - null
 */

compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]

/**
 *
 * @param {Array} array
 */
const _compact = (array) => {
  const result = array.reduce((pre, cur) => {
    cur && pre.push(cur);
    return pre;
  }, []);
  return result;
};

console.log(_compact([0, 1, false, 2, '', 3]));
