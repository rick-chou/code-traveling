const { sortedIndexOf } = require('lodash');

sortedIndexOf([4, 5, 5, 5, 6], 5);
// => 1

/**
 * @example sortedIndexOf(array, value)
 * @description 这个方法类似_.indexOf，除了它是在已经排序的数组array上执行二进制检索
 * @param {Array} array
 * @param {*} value
 */
const _sortedIndexOf = (array, value) => {
  // TODO _sortedIndexOf
};

if (require.main === module) {
  console.log(_sortedIndex([30, 50], 40));
}

module.exports = _sortedIndexOf;
