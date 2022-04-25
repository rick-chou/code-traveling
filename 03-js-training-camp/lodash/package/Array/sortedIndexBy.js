const { sortedIndexBy } = require('lodash');

var objects = [{ x: 4 }, { x: 5 }];

sortedIndexBy(objects, { x: 4 }, function (o) {
  return o.x;
});
// => 0

// The `_.property` iteratee shorthand.
sortedIndexBy(objects, { x: 4 }, 'x');
// => 0

/**
 * @example sortedIndexBy(array, value, [iteratee=_.identity])
 * @description 这个方法类似_.sortedIndex ，除了它接受一个 iteratee （迭代函数），
 * @description 调用每一个数组（array）元素，返回结果和value 值比较来计算排序。iteratee 会传入一个参数：(value)
 * @param {Array} array
 * @param {*} value
 * @param {Array|Function|Object|string} iteratee
 */
const _sortedIndexBy = (array, value) => {
  // TODO _sortedIndexBy
};

if (require.main === module) {
  console.log(
    _sortedIndexBy(objects, { x: 4 }, function (o) {
      return o.x;
    })
  );
  console.log(_sortedIndexBy(objects, { x: 4 }, 'x'));
}

module.exports = _sortedIndexBy;
