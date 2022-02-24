const { indexOf } = require('lodash');

indexOf([1, 2, 1, 2], 2);
// => 1

// Search from the `fromIndex`.
indexOf([1, 2, 1, 2], 2, 2);
// => 3

/**
 * @example indexOf(array, value, [fromIndex=0])
 * @description 使用SameValueZero 等值比较，返回首次 value 在数组array中被找到的 索引值， 如果 fromIndex 为负值，将从数组array尾端索引进行匹配
 * @param {Array} array 需要查找的数组
 * @param {*} value 需要查找的值
 * @param {number} fromIndex 开始查询的位置
 */
const _indexOf = (array, value, fromIndex = 0) => {
  if (fromIndex) {
    let resIdx = fromIndex;
    while (resIdx < array.length) {
      if (value === array[resIdx]) {
        return resIdx;
      }
      resIdx++;
    }
    return -1;
  }
  return array.findIndex((item) => item === value);
};

if (require.main === module) {
  console.log(_indexOf([1, 2, 1, 2], 2));
  console.log(_indexOf([1, 2, 1, 2], 2, 2));
}

module.exports = _indexOf;
