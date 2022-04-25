const { pullAllBy } = require('lodash');

var array = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }];

pullAllBy(array, [{ x: 1 }, { x: 3 }], 'x');
// console.log(array);
// => [{ 'x': 2 }]

/**
 * @example pullAllBy(array, values, [iteratee=_.identity])
 * @description 这个方法类似于_.pullAll ，区别是这个方法接受一个 iteratee（迭代函数）
 * @description 调用 array 和 values的每个值以产生一个值，通过产生的值进行了比较。iteratee 会传入一个参数： (value)
 * @param {Array} array
 * @param {Array} values
 * @param {Array|Function|Object|string} iteratee
 */
const _pullAllBy = (array, values, iteratee) => {
  // TODO _pullAllBy
};

if (require.main === module) {
}

module.exports = _pullAllBy;
