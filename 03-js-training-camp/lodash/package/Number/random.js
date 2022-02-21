const { random } = require('lodash');

/**
 * @name random([lower=0], [upper=1], [floating])
 * @description 产生一个包括 lower 与 upper 之间的数。
 * @description 如果只提供一个参数返回一个0到提供数之间的数。
 * @description 如果 floating 设为 true，或者 lower 或 upper 是浮点数，结果返回浮点数
 */

random(0, 5);
// => an integer between 0 and 5

random(5);
// => also an integer between 0 and 5

random(5, true);
// => a floating-point number between 0 and 5

random(1.2, 5.2);
// => a floating-point number between 1.2 and 5.2

/**
 *
 * @param {number} lower
 * @param {number} upper
 * @param {boolean} floating
 */
const _random = (lower = 0, upper = 1, floating = false) => {
  if (typeof lower === 'boolean' && upper === undefined) {
    floating = lower;
    lower = 0;
    upper = 1;
  }
  if (lower === undefined && upper === undefined) {
    lower = 0;
    upper = 1;
  }
  if (lower > upper) {
    let temp = lower;
    lower = upper;
    upper = temp;
  }
  if (upper % 1 || lower % 1) {
    floating = true;
  }
  const random = Math.random() * (upper - lower + 1) + lower;
  return floating ? random : Math.floor(random);
};

if (require.main === module) {
  console.log(_random(10, 20));
  console.log(_random(10, 20, true));
  console.log(_random(10.5, 20));
}

module.exports = _random;
