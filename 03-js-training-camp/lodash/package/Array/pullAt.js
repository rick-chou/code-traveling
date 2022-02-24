const { pullAt } = require('lodash');

var array = [5, 10, 15, 20];
var evens = pullAt(array, 1, 3);

// console.log(array);
// => [5, 15]

// console.log(evens);
// => [10, 20]

/**
 * @example pullAt(array, [indexes])
 * @description 根据索引 indexes，移除array中对应的元素，并返回被移除元素的数组
 * @description Note: 和_.at不同, 这个方法会改变数组 array
 * @param {Array} array
 * @param {number|number[]} indexes
 */
const _pullAt = (array, indexes) => {
  // TODO _pullAt
};

if (require.main === module) {
}

module.exports = _pullAt;
