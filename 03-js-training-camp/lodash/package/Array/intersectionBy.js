const { intersectionBy } = require('lodash');

intersectionBy([2.1, 1.2], [4.3, 2.4], Math.floor);
// => [2.1]

// The `_.property` iteratee shorthand.
intersectionBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], 'x');
// => [{ 'x': 1 }]

/**
 * @example intersectionBy([arrays], [iteratee=_.identity])
 * @description 这个方法类似_.intersection，
 * @description 区别是它接受一个 iteratee 调用每一个arrays的每个值以产生一个值，通过产生的值进行了比较。
 * @description 结果值是从第一数组中选择。iteratee 会传入一个参数：(value)
 * @param {Array} array
 * @param {Array|Function|Object|string} iteratee
 */
const _intersectionBy = (array, iteratee) => {
  // TODO _intersectionBy
};

if (require.main === module) {
  console.log(_intersectionBy([2.1, 1.2], [4.3, 2.4], Math.floor));
  console.log(_intersectionBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], 'x'));
}

module.exports = _intersectionBy;
