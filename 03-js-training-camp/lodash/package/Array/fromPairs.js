const { fromPairs } = require('lodash');

fromPairs([
  ['fred', 30],
  ['barney', 40],
]);
// => { 'fred': 30, 'barney': 40 }

/**
 * @example fromPairs(pairs)
 * @description 这个方法返回一个由键值对pairs构成的对象
 * @param {Array} pairs
 * @returns {Object} Returns the new object.
 */
const _fromPairs = (pairs) => {
  let resIdx = -1,
    length = pairs.length,
    result = {};
  while (++resIdx < length) {
    const pair = pairs[resIdx];
    result[pair[0]] = pair[1];
  }
  return result;
};

if (require.main === module) {
  console.log(
    _fromPairs([
      ['fred', 30],
      ['barney', 40],
    ])
  );
}

module.exports = _fromPairs;
