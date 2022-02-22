const { meanBy } = require('lodash');
const _mean = require('./mean');

var objects = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }];

meanBy(objects, function (o) {
  return o.n;
});
// => 5

// The `_.property` iteratee shorthand.
meanBy(objects, 'n');
// => 5

/**
 * @example meanBy(array, [iteratee=_.identity])
 * @description 这个方法类似_.mean， 除了它接受 iteratee 来调用 array中的每一个元素，来生成其值排序的标准。
 * @description iteratee 会调用1个参数: (value)
 * @param {Array} array
 * @param {Function | string} iteratee
 */
const _meanBy = (array, iteratee) => {
  const isFun = typeof iteratee === 'function';
  const result = array.map((item) => (isFun ? iteratee(item) : item[iteratee]));
  return _mean(result);
};

if (require.main === module) {
  console.log(
    meanBy(objects, function (o) {
      return o.n;
    })
  );
  console.log(meanBy(objects, 'n'));
}

module.exports = _meanBy;
