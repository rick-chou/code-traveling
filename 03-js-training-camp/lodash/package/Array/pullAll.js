const { pullAll } = require('lodash');

var array = [1, 2, 3, 1, 2, 3];

pullAll(array, 2, 3);
// console.log(array);
// => [1, 1]

/**
 * @example pull(array, values)
 * @description 这个方法类似_.pull，区别是这个方法接收一个要移除值的数组
 * @param {Array} array
 * @param {Array} values
 */
const _pullAll = (array, values) => {
  const result = array.filter((item) => !values.includes(item));
  array.length = result.length;
  result.forEach((item, idx) => (array[idx] = item));
};

if (require.main === module) {
  var array = [1, 2, 3, 1, 2, 3];
  _pullAll(array, 2, 3);
  console.log(array);
}

module.exports = _pullAll;
