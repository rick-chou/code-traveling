const { fill, result } = require('lodash');

/**
 * fill(array, value, [start=0], [end=array.length])
 * @description 使用 value 值来填充（替换） array，从start位置开始, 到end位置结束（但不包含end位置）
 */

var array = [1, 2, 3];

fill(array, 'a');
// => ['a', 'a', 'a']

fill(Array(3), 2);
// => [2, 2, 2]

fill([4, 6, 8, 10], '*', 1, 3);
// => [4, '*', '*', 10]

/**
 *
 * @param {Array} array
 * @param {*} value
 * @param {number} start
 * @param {number} end
 */
const _fill = (array, value, start = 0, end = array.length) => {
  if (typeof start !== 'number') {
    start = 0;
  }
  if (typeof end !== 'number') {
    end = array.length;
  }
  const result = array.map((item, idx) => {
    if (idx >= start || idx < end) {
      return value;
    }
    return item;
  });
  let resIdx = 0;
  while (resIdx < result.length) {
    array[resIdx] = result[resIdx];
    resIdx++;
  }
};

if (require.main === module) {
  var arr = [1, 2, 3];
  _fill(arr, 2);
  console.log(arr);
  console.log(fill([4, 6, 8, 10], '*', 1, 3));
}

module.exports = _fill;
