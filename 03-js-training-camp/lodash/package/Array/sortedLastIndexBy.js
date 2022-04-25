const { sortedLastIndexBy } = require('lodash');

var objects = [{ x: 4 }, { x: 5 }];

sortedLastIndexBy(objects, { x: 4 }, function (o) {
  return o.x;
});
// => 1

// The `_.property` iteratee shorthand.
sortedLastIndexBy(objects, { x: 4 }, 'x');
// => 1

/**
 * @example sortedLastIndexBy(array, value, [iteratee=_.identity])
 * @description 这个方法类似_.sortedLastIndex ，除了它接受一个 iteratee （迭代函数），
 * @description 调用每一个数组（array）元素，返回结果和value 值比较来计算排序。iteratee 会传入一个参数：(value)
 * @param {Array} array
 * @param {*} value
 * @param {Array|Function|Object|string} iteratee
 */
const _sortedLastIndexBy = (array, value) => {
  // TODO _sortedLastIndexBy
};

if (require.main === module) {
  console.log(
    _sortedLastIndexBy(objects, { x: 4 }, function (o) {
      return o.x;
    })
  );
  console.log(sortedLastIndexBy(objects, { x: 4 }, 'x'));
}

module.exports = _sortedLastIndexBy;
