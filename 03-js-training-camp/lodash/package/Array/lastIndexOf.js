const { lastIndexOf } = require('lodash');

lastIndexOf([1, 2, 1, 2], 2);
// => 3

// Search from the `fromIndex`.
lastIndexOf([1, 2, 1, 2], 2, 2);
// => 1

/**
 * @example lastIndexOf(array, value, [fromIndex=array.length-1])
 * @description 这个方法类似_.indexOf ，区别是它是从右到左遍历array的元素
 * @param {Array} array 需要查找的数组
 * @param {*} value 需要查找的值
 * @param {number} fromIndex 开始查询的位置
 */
const _lastIndexOf = (array, value, fromIndex = array.length - 1) => {
  if (fromIndex) {
    let resIdx = fromIndex;
    while (resIdx < array.length) {
      if (value === array[resIdx]) {
        return resIdx;
      }
      resIdx--;
    }
    return -1;
  }
  return array.findIndex((item) => item === value);
};

if (require.main === module) {
  console.log(_lastIndexOf([1, 2, 1, 2], 2));
  console.log(_lastIndexOf([1, 2, 1, 2], 2, 2));
}

module.exports = _lastIndexOf;
