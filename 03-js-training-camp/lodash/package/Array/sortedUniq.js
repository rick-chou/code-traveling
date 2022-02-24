const { sortedUniq } = require('lodash');

sortedUniq([1, 1, 2]);
// => [1, 2]

/**
 * @example sortedUniq(array)
 * @description 返回一个新的不重复的数组
 * @param {Array} array
 */
const _sortedUniq = (array, value) => {
  // TODO _sortedIndex
};

if (require.main === module) {
  console.log(_sortedUniq([1, 1, 2]));
}

module.exports = _sortedUniq;
