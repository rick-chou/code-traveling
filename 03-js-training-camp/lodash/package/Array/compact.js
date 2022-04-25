const { compact } = require('lodash');

compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]

/**
 * @example compact(array)
 * @param array (Array): 需要处理的数组
 * @description 处理假值 返回一个新数组
 * - false
 * - NaN
 * - “”
 * - undefined
 * - null
 * @param {Array} array
 */
const _compact = (array) => {
  const result = array.reduce((pre, cur) => {
    cur && pre.push(cur);
    return pre;
  }, []);
  return result;
};

if (require.main === module) {
  console.log(_compact([0, 1, false, 2, '', 3]));
}

module.exports = _compact;
