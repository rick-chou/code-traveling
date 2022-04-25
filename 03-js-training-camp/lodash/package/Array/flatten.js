const { flatten } = require('lodash');

flatten([1, [2, [3, [4]], 5]]);
// => [1, 2, [3, [4]], 5]

/**
 * @example flatten(array)
 * @description 减少一级array嵌套深度
 * @param {Array} array
 */
const _flatten = (array) => {
  return array.flat();
};

if (require.main === module) {
  console.log(_flatten([1, [2, [3, [4]], 5]]));
}

module.exports = _flatten;
