const { add } = require('lodash');
const { _createMathOperation } = require('../Base');

add(6, 4);
// => 10

/**
 * @example add(augend, addend)
 * @description 两个数相加
 * @param {number} augend
 * @param {number} addend
 */
const _add = _createMathOperation(function (augend, addend) {
  return augend + addend;
});

if (require.main === module) {
  console.log(_add());
  console.log(_add(1, 2));
}

module.exports = _add;
