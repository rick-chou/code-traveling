const { padEnd } = require('lodash');

padEnd('abc', 6);
// => 'abc   '

padEnd('abc', 6, '_-');
// => 'abc_-_'

padEnd('abc', 3);
// => 'abc'

/**
 * @example padEnd([string=''], [length=0], [chars=' '])
 * @description 如果string字符串长度小于 length 则在右侧填充字符。 如果超出length长度则截断超出的部分
 * @param {string} string
 * @param {number} length
 * @param {string} chars
 */
const _padEnd = (string = '', length = 0, chars = ' ') => {
  var result = string;
  while (result.length < length) {
    result = result + chars;
  }
  return result.slice(0, Math.max(string.length, length));
};

if (require.main === module) {
  console.log(_padEnd('abc', 6));
  console.log(_padEnd('abc', 6, '_-'));
  console.log(_padEnd('abc', 3));
}

module.exports = _padEnd;
