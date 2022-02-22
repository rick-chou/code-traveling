const { sumBy } = require('lodash');
const _sum = require('./sum');

var objects = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }];

sumBy(objects, function (o) {
  return o.n;
});
// => 20

// The `_.property` iteratee shorthand.
sumBy(objects, 'n');
// => 20

/**
 * @example sumBy(array, [iteratee=_.identity])
 * @description 这个方法类似_.summin 除了它接受 iteratee 来调用 array中的每一个元素，来生成其值排序的标准。
 * @description iteratee 会调用1个参数: (value)
 * @param {Array} array
 * @param {Function} iteratee
 */
const _sumBy = (array, iteratee) => {
  const isFun = typeof iteratee === 'function';
  const result = array.map((item) => (isFun ? iteratee(item) : item[iteratee]));
  return _sum(result);
};

if (require.main === module) {
  console.log(
    sumBy(objects, function (o) {
      return o.n;
    })
  );
  console.log(sumBy(objects, 'n'));
}

module.exports = _sumBy;
