const { multiply } = require('lodash');
const { _createMathOperation } = require('../Base');

multiply(6, 4);
// => 24

/**
 * @example multiply(multiplier, multiplicand)
 * @description 两个数相乘
 * @param {number} multiplier
 * @param {number} multiplicand
 */
const _multiply = _createMathOperation((multiplier, multiplicand) => {
  return multiplier * multiplicand;
});

if (require.main === module) {
  console.log(_multiply(6, 4));
}

module.exports = _multiply;
