const { intersection } = require('lodash');
const _castArray = require('../Lang/castArray');

intersection([2, 1], [4, 2], [1, 2]);
// => [2]

/**
 * @example intersection([arrays])
 * @description 创建唯一值的数组，这个数组包含所有给定数组都包含的元素，使用SameValueZero进行相等性比较。（注：可以理解为给定数组的交集）
 * @param {Array<Array>} array
 */
const _intersection = (...array) => {
  if (!array.length) {
    return [];
  }
  if (array.length === 1) {
    return array[0];
  }
  const result = array[0];
  const others = array.slice(1);
  return result.filter((item) => others.every((other) => other.includes(item)));
};

if (require.main === module) {
  console.log(_intersection([2, 1], [4, 2], [1, 2]));
  console.log(_intersection([1]));
  console.log(_intersection([]));
}

module.exports = _intersection;
