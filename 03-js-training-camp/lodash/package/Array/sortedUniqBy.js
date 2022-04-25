const { sortedUniqBy } = require('lodash');

sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
// => [1.1, 2.3]

/**
 * @example sortedUniq(array)
 * @description 返回一个新的不重复的数组
 * @param {Array} array
 * @param {Function} iteratee
 */
const _sortedUniqBy = (array, value) => {
  // TODO _sortedUniqBy
};

if (require.main === module) {
  console.log(_sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor));
}

module.exports = _sortedUniqBy;
