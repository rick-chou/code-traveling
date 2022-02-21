const { gte } = require('lodash');

/**
 * @name gte(value, other)
 * @description 检查 value是否大于等于 other
 */

gte(3, 1);
// => true

gte(3, 3);
// => false

gte(1, 3);
// => false

/**
 *
 * @param {number} value
 * @param {number} other
 */
const _gte = (value, other) => {
  return value >= other;
};

if (require.main === module) {
  console.log(gt(3, 1));
}

module.exports = _gte;
