const { findLastIndex } = require('lodash');

var users = [
  { user: 'barney', active: true },
  { user: 'fred', active: false },
  { user: 'pebbles', active: false },
];

_.findLastIndex(users, function (o) {
  return o.user == 'pebbles';
});
// => 2

// The `_.matches` iteratee shorthand.
_.findLastIndex(users, { user: 'barney', active: true });
// => 0

// The `_.matchesProperty` iteratee shorthand.
_.findLastIndex(users, ['active', false]);
// => 2

// The `_.property` iteratee shorthand.
_.findLastIndex(users, 'active');
// => 0

/**
 * @example findLastIndex(array, [predicate=_.identity], [fromIndex=array.length-1])
 * @description 这个方式类似_.findIndex， 区别是它是从右到左的迭代集合array中的元素
 * @param {Array} array 要搜索的数组
 * @param {Array|Function|Object|string} predicate 这个函数会在每一次迭代调用
 * @param {number} fromIndex The index to search from
 */
const _findLastIndex = (array, predicate, fromIndex = array.length - 1) => {};

if (require.main === module) {
}

module.exports = _findLastIndex;
