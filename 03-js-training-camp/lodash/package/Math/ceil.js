const { ceil } = require('lodash');

ceil(4.006);
// => 5

ceil(6.004, 2);
// => 6.01

ceil(6040, -2);
// => 6100

/**
 * @example ceil(number, [precision=0])
 * @description 根据 precision（精度） 向上舍入 number。
 * @description 注： precision（精度）可以理解为保留几位小数。
 * @param {number} number
 * @param {number} precision
 */
const _ceil = (number, precision) => {
  precision = Math.max(precision, 0);
  if (precision) {
    return number.toFixed(precision);
  }
  return Math.ceil(number);
};

if (require.main === module) {
  console.log(_ceil(4.006));
  console.log(_ceil(6.004, 2));
  console.log(_ceil(6040, -2));
}

module.exports = _ceil;
