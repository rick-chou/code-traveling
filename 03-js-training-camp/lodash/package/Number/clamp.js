const { clamp } = require('lodash');

/**
 * @name clamp(number, [lower], upper)
 * @description 返回限制在 lower 和 upper 之间的值
 */

clamp(-10, -5, 5);
// => -5

clamp(10, -5, 5);
// => 5

/**
 *
 * @param {number} number
 * @param {number} lower
 * @param {number} upper
 */
const _clamp = (number, lower, upper) => {
  if (number > lower && number < upper) {
    return number;
  }
  return number > lower ? upper : lower;
};

if (require.main === module) {
  console.log(_clamp(-10, -5, 5));
  console.log(_clamp(10, -5, 5));
}

module.exports = _clamp;
