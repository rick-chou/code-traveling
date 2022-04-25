const { pull } = require('lodash');

var array = [1, 2, 3, 1, 2, 3];

pull(array, 2, 3);
// console.log(array);
// => [1, 1]

/**
 * @example pull(array, [values])
 * @description 移除数组array中所有和给定值相等的元素，使用SameValueZero 进行全等比较
 * @description 会改变原数组
 * @param {Array} array
 * @param {Array} values
 */
const _pull = (array, ...values) => {
  const result = array.filter((item) => !values.includes(item));
  array.length = result.length;
  result.forEach((item, idx) => (array[idx] = item));
};

if (require.main === module) {
  var array = [1, 2, 3, 1, 2, 3];
  _pull(array, 2, 3);
  console.log(array);
}

module.exports = _pull;
