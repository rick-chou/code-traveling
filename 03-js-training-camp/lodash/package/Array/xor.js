const { xor } = require('lodash');
const _intersection = require('./intersection');
const _flattenDeep = require('./flattenDeep');
const _without = require('./without');

xor([2, 1], [2, 3]);
// => [1, 3]

/**
 * @example xor([arrays])
 * @description 创建一个给定数组唯一值的数组，使用symmetric difference做等值比较。返回值的顺序取决于他们数组的出现顺序
 * @param {Array<Array>} array
 */
const _xor = (...array) => {
  const intersection = _intersection(...array);
  const result = [...new Set(_flattenDeep(array))];
  return _without(result, ...intersection);
};

if (require.main === module) {
  console.log(_xor([2, 1], [2, 3]));
}

module.exports = _xor;
