const { round } = require('lodash');

round(4.006);
// => 4

round(4.006, 2);
// => 4.01

round(4060, -2);
// => 4100

/**
 * @example round(number, [precision=0])
 * @description 根据 precision（精度） 四舍五入 number
 * @param {number} number
 * @param {number} precision
 */
const _round = (number, precision = 0) => {
  precision = Math.max(precision, 0);
  if (precision) {
    return number.toFixed(precision);
  }
  return Math.round(number);
};

if (require.main === module) {
  console.log(_round(4.006));
  console.log(_round(4.006, 2));
  // console.log(_round(4060, -2));
}

module.exports = _round;
