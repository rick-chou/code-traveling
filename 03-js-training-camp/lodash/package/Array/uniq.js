const { uniq } = require('lodash');

uniq([2, 1, 2]);
// => [2, 1]

/**
 * @example uniq(array)
 * @description 去重
 * @param {Array} array
 */
const _uniq = (array) => {
  return [...new Set(array)];
};

if (require.main === module) {
  console.log(_uniq([2, 1, 2]));
}

module.exports = _uniq;
