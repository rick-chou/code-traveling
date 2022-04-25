const { union } = require('lodash');
const _flattenDeep = require('./flattenDeep');

union([2], [1, 2]);
// => [2, 1]

/**
 * @example union([arrays])
 * @description 交集
 * @param {Array<Array>} array
 */
const _union = (...array) => {
  return [...new Set(_flattenDeep(array))];
};

if (require.main === module) {
  console.log(_union([2], [1, 2]));
}

module.exports = _union;
