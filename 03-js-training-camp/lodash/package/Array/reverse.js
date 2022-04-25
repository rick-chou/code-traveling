const { reverse } = require('lodash');

var array = [1, 2, 3];

reverse(array);
// => [3, 2, 1]

// console.log(array);
// => [3, 2, 1]

/**
 * @example reverse(array)
 * @description 反转array
 * @description Note: 这个方法会改变原数组 array
 * @param {Array} array
 */
const _reverse = (array) => {
  array.reverse();
};

if (require.main === module) {
  var array = [1, 2, 3];
  reverse(array);
  console.log(array);
}

module.exports = _reverse;
