const { divide } = require('lodash');
const { _createMathOperation } = require('../Base');

divide(6, 4);
// => 1.5

/**
 * @example divide(dividend, divisor)
 * @description 两个数相除
 * @param {number} dividend
 * @param {number} divisor
 */
const _divide = _createMathOperation(function (dividend, divisor) {
  return dividend / divisor;
});

if (require.main === module) {
  console.log(_divide(6, 4));
}

module.exports = _divide;
