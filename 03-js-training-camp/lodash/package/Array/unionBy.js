const { unionBy } = require('lodash');

unionBy([2.1], [1.2, 2.3], Math.floor);
// => [2.1, 1.2]

// The `_.property` iteratee shorthand.
unionBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], 'x');
// => [{ 'x': 1 }, { 'x': 2 }]

/**
 * @example unionBy([arrays], [iteratee=_.identity])
 * @description 交集
 * @param {Array<Array>} array
 * @param {Array|Function|Object|string} iteratee
 */
const _unionBy = (...array) => {
  // TODO
};

if (require.main === module) {
  console.log(_unionBy([2.1], [1.2, 2.3], Math.floor));
  console.log(_unionBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], 'x'));
}

module.exports = _unionBy;
