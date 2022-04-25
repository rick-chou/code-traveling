const { maxBy } = require('lodash');
const _max = require('./max');

var objects = [{ n: 1 }, { n: 2 }];

maxBy(objects, function (o) {
  return o.n;
});
// => { 'n': 2 }

// The `_.property` iteratee shorthand.
maxBy(objects, 'n');
// => { 'n': 2 }

/**
 * @example maxBy(array, [iteratee=_.identity])
 * @description 这个方法类似_.max 除了它接受 iteratee 来调用 array中的每一个元素，来生成其值排序的标准。
 * @description iteratee 会调用1个参数: (value)
 * @param {Array} array
 * @param {Function | string} iteratee
 */
const _maxBy = (array, iteratee) => {
  if (array && array.length) {
    let result,
      resIdx = 0;
    const isFun = typeof iteratee === 'function';
    array.forEach((item, idx) => {
      const value = isFun ? iteratee(item) : item[iteratee];
      if (_max([result, value]) !== result) {
        resIdx = idx;
        result = _max([result, value]);
      }
    });
    return array[resIdx];
  } else {
    return undefined;
  }
};

if (require.main === module) {
  console.log(
    _maxBy(objects, function (o) {
      return o.n;
    })
  );
  console.log(_maxBy(objects, 'n'));
}

module.exports = _maxBy;
