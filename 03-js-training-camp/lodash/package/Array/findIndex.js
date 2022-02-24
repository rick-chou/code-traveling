const { findIndex } = require('lodash');

var users = [
  { user: 'barney', active: false },
  { user: 'fred', active: false },
  { user: 'pebbles', active: true },
];

findIndex(users, function (o) {
  return o.user == 'barney';
});
// => 0

// The `_.matches` iteratee shorthand.
findIndex(users, { user: 'fred', active: false });
// => 1

// The `_.matchesProperty` iteratee shorthand.
findIndex(users, ['active', false]);
// => 0

// The `_.property` iteratee shorthand.
findIndex(users, 'active');
// => 2

/**
 * @example findIndex(array, [predicate=_.identity], [fromIndex=0])
 * @description 创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中
 * @param {Array} array 要搜索的数组
 * @param {Array|Function|Object|string} predicate 这个函数会在每一次迭代调用
 * @param {number} fromIndex The index to search from
 */
const _findIndex = (array, predicate, fromIndex = 0) => {};

if (require.main === module) {
  console.log(
    _findIndex(users, function (o) {
      return o.user == 'barney';
    })
  );
  console.log((users, { user: 'fred', active: false }));
  console.log(users, ['active', false]);
  console.log(users, 'active');
}

module.exports = _findIndex;
