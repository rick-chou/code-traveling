const { floor } = require('lodash');

floor(4.006);
// => 4

floor(0.046, 2);
// => 0.04

floor(4060, -2);
// => 4000

/**
 * @example floor(number, [precision=0])
 * @description 根据 precision（精度） 向下舍入 number。
 * @description 注： precision（精度）可以理解为保留几位小数。
 * @param {*} number
 * @param {*} precision
 */
const _floor = (number, precision) => {
  precision = Math.max(precision, 0);
  if (precision) {
    return number.toFixed(precision);
  }
  return Math.floor(number);
};

if (require.main === module) {
  console.log(_floor(4.006));
  console.log(_floor(6.004, 2));
  console.log(_floor(6040, -2));
}

module.exports = _floor;
