const { intersectionWith, isEqual } = require('lodash');

var objects = [
  { x: 1, y: 2 },
  { x: 2, y: 1 },
];
var others = [
  { x: 1, y: 1 },
  { x: 1, y: 2 },
];

intersectionWith(objects, others, isEqual);
// => [{ 'x': 1, 'y': 2 }]

/**
 * @example intersectionWith([arrays], [comparator])
 * @description 这个方法类似_.intersection，区别是它接受一个 comparator 调用比较arrays中的元素。
 * @description 结果值是从第一数组中选择。comparator 会传入两个参数：(arrVal, othVal)
 * @param {Array} array
 * @param {Function} comparator
 */
const _intersectionWith = (array, comparator) => {
  // TODO _intersectionWith
};

if (require.main === module) {
  console.log(_intersectionWith(objects, others, isEqual));
}

module.exports = _intersectionWith;
