const { gt, eq } = require('lodash');

/**
 * @name gt(value, other)
 * @description 检查 value是否大于 other
 */

gt(3, 1);
// => true

gt(3, 3);
// => false

gt(1, 3);
// => false

/**
 *
 * @param {number} value
 * @param {number} other
 */
const _gt = (value, other) => {
  return value > other;
};

if (require.main === module) {
  console.log(gt(3, 1));
}

module.exports = _gt;
