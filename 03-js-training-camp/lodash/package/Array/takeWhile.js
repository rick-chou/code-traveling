const { takeWhile } = require('lodash');

var users = [
  { user: 'barney', active: false },
  { user: 'fred', active: false },
  { user: 'pebbles', active: true },
];

takeWhile(users, function (o) {
  return !o.active;
});
// => objects for ['barney', 'fred']

// The `_.matches` iteratee shorthand.
takeWhile(users, { user: 'barney', active: false });
// => objects for ['barney']

// The `_.matchesProperty` iteratee shorthand.
takeWhile(users, ['active', false]);
// => objects for ['barney', 'fred']

// The `_.property` iteratee shorthand.
takeWhile(users, 'active');
// => []

/**
 * @example takeWhile(array, [predicate=_.identity])
 * @description 从array数组的起始元素开始提取元素，，直到 predicate 返回假值。predicate 会传入三个参数： (value, index, array)
 * @param {Array} array
 * @param {Array|Function|Object|string} predicate
 */
const _takeWhile = (array, predicate) => {
  // TODO
};

if (require.main === module) {
}

module.exports = _takeWhile;
