const { inRange } = require('lodash');

/**
 * @name inRange(number, [start=0], end)
 * @description 检查 n 是否在 start 与 end 之间，但不包括 end
 * @description 如果 end 没有指定，那么 start 设置为0
 * @description 如果 start 大于 end，那么参数会交换以便支持负范围
 */

inRange(3, 2, 4);
// => true

inRange(4, 8);
// => true

inRange(4, 2);
// => false

/**
 *
 * @param {number} number
 * @param {number} start
 * @param {number} end
 */
const _inRange = (number, start, end) => {
  if (end === undefined) {
    end = start;
    start = 0;
  }
  return number > start && number < end;
};

if (require.main === module) {
  console.log(_inRange(3, 2, 4));
  console.log(_inRange(4, 2));
}

module.exports = _inRange;
