const { sortedIndex } = require('lodash');

sortedIndex([30, 50], 40);
// => 1

/**
 * @example sortedIndex(array, value)
 * @description 使用二进制的方式检索来决定 value值 应该插入到数组中 尽可能小的索引位置，以保证array的排序
 * @param {Array} array
 * @param {*} value
 */
const _sortedIndex = (array, value) => {
  // TODO _sortedIndex
};

if (require.main === module) {
  console.log(_sortedIndex([30, 50], 40));
}

module.exports = _sortedIndex;
