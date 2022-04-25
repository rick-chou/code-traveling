const { split } = require('lodash');

split('a-b-c', '-', 2);
// => ['a', 'b']

/**
 * @example split([string=''], separator, [limit])
 * @description 根据separator 拆分字符串string
 * @param {string} string
 * @param {RegExp|string} separator
 * @param {number} limit
 */
const _split = (string, separator, limit) => {
  return string.split(separator).slice(0, limit);
};

if (require.main === module) {
  console.log(_split('a-b-c', '-', 2));
}

module.exports = _split;
