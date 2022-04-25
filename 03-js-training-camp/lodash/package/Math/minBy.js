const { minBy } = require('lodash');
const _min = require('./min');

var objects = [{ n: 1 }, { n: 2 }];

minBy(objects, function (o) {
  return o.n;
});
// => { 'n': 1 }

// The `_.property` iteratee shorthand.
minBy(objects, 'n');
// => { 'n': 1 }

/**
 * @example minBy(array, [iteratee=_.identity])
 * @description 这个方法类似_.min 除了它接受 iteratee 来调用 array中的每一个元素，来生成其值排序的标准。
 * @description iteratee 会调用1个参数: (value)
 * @param {Array} array
 * @param {Function} iteratee
 */
const _minBy = (array, iteratee) => {
  if (array && array.length) {
    let result,
      resIdx = 0;
    const isFun = typeof iteratee === 'function';
    array.forEach((item, idx) => {
      const value = isFun ? iteratee(item) : item[iteratee];
      if (_min([result, value]) !== result) {
        resIdx = idx;
        result = _min([result, value]);
      }
    });
    return array[resIdx];
  } else {
    return undefined;
  }
};

if (require.main === module) {
  console.log(
    minBy(objects, function (o) {
      return o.n;
    })
  );
  console.log(minBy(objects, 'n'));
}

module.exports = _minBy;
