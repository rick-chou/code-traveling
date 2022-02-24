const { unionWith, isEqual } = require('lodash');

var objects = [
  { x: 1, y: 2 },
  { x: 2, y: 1 },
];
var others = [
  { x: 1, y: 1 },
  { x: 1, y: 2 },
];

unionWith(objects, others, isEqual);
// => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]

/**
 * @example unionWith([arrays], [comparator])
 * @description 交集
 * @param {Array<Array>} array
 * @param {Function} comparator
 */
const _unionWith = (...array) => {
  // TODO
};

if (require.main === module) {
}

module.exports = _unionWith;
