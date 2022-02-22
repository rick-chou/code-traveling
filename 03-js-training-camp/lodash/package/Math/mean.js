const { mean } = require('lodash');
const _sum = require('./sum');

mean([4, 2, 8, 6]);
// => 5

/**
 * @example mean(array)
 * @description 计算 array 的平均值
 * @param {Array} array
 */
const _mean = (array) => {
  return _sum(array) / array.length;
};

if (require.main === module) {
  console.log(_mean([4, 2, 8, 6]));
}

module.exports = _mean;
