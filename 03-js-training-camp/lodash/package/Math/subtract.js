const { subtract } = require('lodash');
const { _createMathOperation } = require('../Base');

subtract(6, 4);
// => 2

/**
 * @example subtract(minuend, subtrahend)
 * @description 两数相减
 * @param {number} minuend
 * @param {number} subtrahend
 */
const _subtract = _createMathOperation((minuend, subtrahend) => {
  return minuend - subtrahend;
});

if (require.main === module) {
  console.log(_subtract(6, 4));
}

module.exports = _subtract;
