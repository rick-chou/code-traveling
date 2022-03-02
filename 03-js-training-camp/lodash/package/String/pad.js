const { pad } = require('lodash');

pad('abc', 8);
// => '  abc   '

pad('abc', 8, '_-');
// => '_-abc_-_'

pad('abc', 3);
// => 'abc'

/**
 * @example pad([string=''], [length=0], [chars=' '])
 * @description 如果string字符串长度小于 length 则从左侧和右侧填充字符。 如果没法平均分配，则截断超出的长度
 * @param {string} string
 * @param {number} length
 * @param {string} chars
 */
const _pad = (string = '', length = 0, chars = ' ') => {
  // FIXME
  var result = string;
  while (result.length < length) {
    result = chars + result + chars;
  }
  return result;
};

if (require.main === module) {
  console.log(_pad('abc', 8));
  console.log(_pad('abc', 8, '_-'));
  console.log(_pad('abc', 3));
}

module.exports = _pad;
