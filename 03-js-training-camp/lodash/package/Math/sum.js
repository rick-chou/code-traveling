const { sum } = require('lodash');

sum([4, 2, 8, 6]);
// => 20

/**
 * @example sum(array)
 * @description 计算 array 中值的总和
 * @param {Array} array
 */
const _sum = (array) => {
  return array.reduce((pre, cur) => {
    return pre + cur;
  }, 0);
};

if (require.main === module) {
  console.log(_sum([4, 2, 8, 6]));
}

module.exports = _sum;
