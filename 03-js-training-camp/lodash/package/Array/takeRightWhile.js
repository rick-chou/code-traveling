const { takeRightWhile } = require('lodash');

var users = [
  { user: 'barney', active: true },
  { user: 'fred', active: false },
  { user: 'pebbles', active: false },
];

takeRightWhile(users, function (o) {
  return !o.active;
});
// => objects for ['fred', 'pebbles']

// The `_.matches` iteratee shorthand.
takeRightWhile(users, { user: 'pebbles', active: false });
// => objects for ['pebbles']

// The `_.matchesProperty` iteratee shorthand.
takeRightWhile(users, ['active', false]);
// => objects for ['fred', 'pebbles']

// The `_.property` iteratee shorthand.
takeRightWhile(users, 'active');
// => []

/**
 * @example takeRightWhile(array, [predicate=_.identity])
 * @description 创建一个数组切片，从array数组的最后一个元素开始提取n个元素
 * @param {Array} array
 * @param {Array|Function|Object|string} predicate
 */
const _takeRightWhile = (array, predicate) => {
  // TODO
};

if (require.main === module) {
}

module.exports = _takeRightWhile;
