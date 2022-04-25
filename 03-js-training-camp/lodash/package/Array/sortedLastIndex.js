const { sortedLastIndex } = require('lodash');

sortedLastIndex([4, 5, 5, 5, 6], 5);
// => 4

/**
 * @example sortedLastIndex(array, value)
 * @description 此方法类似于_.sortedIndex，除了 它返回 value值 在 array 中尽可能大的索引位置（index）
 * @param {Array} array
 * @param {*} value
 */
const _sortedLastIndex = (array, value) => {
  // TODO _sortedLastIndex
};

if (require.main === module) {
  console.log(_sortedLastIndex([4, 5, 5, 5, 6], 5));
}

module.exports = _sortedLastIndex;
