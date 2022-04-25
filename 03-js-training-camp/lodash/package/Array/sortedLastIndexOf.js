const { sortedLastIndexOf } = require('lodash');

sortedLastIndexOf([4, 5, 5, 5, 6], 5);
// => 3

/**
 * @example sortedLastIndexOf(array, value)
 * @description 这个方法类似_.lastIndexOf，除了它是在已经排序的数组array上执行二进制检索
 * @param {Array} array
 * @param {*} value
 * @returns {number} 返回匹配值的索引位置，否则返回 -1
 */
const _sortedLastIndexOf = (array, value) => {
  // TODO _sortedLastIndexOf
};

if (require.main === module) {
  console.log(_sortedLastIndexOf([4, 5, 5, 5, 6], 5));
}

module.exports = _sortedLastIndexOf;
