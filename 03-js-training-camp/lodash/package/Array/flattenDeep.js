const { flattenDeep } = require('lodash');
const _flattenDepth = require('./flattenDepth');
const _max = require('../Math/max');

flattenDeep([1, [2, [3, [4]], 5]]);
// => [1, 2, 3, 4, 5]

/**
 * @example flattenDeep(array)
 * @description 将array递归为一维数组
 * @param {Array} array
 */
const _flattenDeep = (array) => {
  const depth = _max(
    array.map((item) => {
      if (Array.isArray(item)) {
        return item.length;
      }
      return 1;
    })
  );
  return _flattenDepth(array, depth);
};

if (require.main === module) {
  console.log(_flattenDeep([1, [2, [3, [4]], 5]]));
}

module.exports = _flattenDeep;
