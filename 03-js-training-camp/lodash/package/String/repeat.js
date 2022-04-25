const { repeat } = require('lodash');

repeat('*', 3);
// => '***'

repeat('abc', 2);
// => 'abcabc'

repeat('abc', 0);
// => ''

/**
 * @example repeat([string=''], [n=1])
 * @description 重复 N 次给定字符串
 * @param {string} string
 * @param {number} n
 */
const _repeat = (string = '', n = 1) => {
  // return string.repeat(n);

  if (!!n) {
    var idx = 0,
      result = '';
    while (idx < n) {
      result += string;
      idx++;
    }
    return result;
  }
  return '';
};

if (require.main === module) {
  console.log(_repeat('*', 3));
  console.log(_repeat('abc', 2));
  console.log(_repeat('abc', 0));
}

module.exports = _repeat;
