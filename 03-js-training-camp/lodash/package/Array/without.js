const { without } = require('lodash');

without([2, 1, 2, 3], 1, 2);
// => [3]

/**
 * @example without(array, [values])
 * @description 移除数组array中所有和给定值相等的元素，使用SameValueZero 进行全等比较
 * @description 不会改变原数组
 * @param {Array} array
 * @param {Array} values
 * @returns {Array} 不会改变原数组 新数组
 */
const _without = (array, ...values) => {
  return array.filter((item) => !values.includes(item));
};

if (require.main === module) {
  console.log(_without([2, 1, 2, 3], 1, 2));
}

module.exports = _without;
