const { pullAllWith, isEqual } = require('lodash');

var array = [
  { x: 1, y: 2 },
  { x: 3, y: 4 },
  { x: 5, y: 6 },
];

pullAllWith(array, [{ x: 3, y: 4 }], isEqual);
// console.log(array);
// => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]

/**
 * @example pullAllWith(array, values, [comparator])
 * @description 这个方法类似于_.pullAll，区别是这个方法接受 comparator 调用array中的元素和values比较。
 * @description comparator 会传入两个参数：(arrVal, othVal)
 * @param {Array} array
 * @param {Array} values
 * @param {Function} comparator
 */
const _pullAllWith = (array, values, comparator) => {
  // TODO _pullAllWith
};

if (require.main === module) {
}

module.exports = _pullAllWith;
