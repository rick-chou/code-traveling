const { trimEnd } = require('lodash');

trimEnd('  abc  ');
// => '  abc'

trimEnd('-_-abc-_-', '_-');
// => '-_-abc'

/**
 * @example trimEnd([string=''], [chars=whitespace])
 * @description 从string字符串中移除后面的 空格 或 指定的字符
 * @param {string} string
 * @param {string} chars
 */
const _trimEnd = (string, chars = ' ') => {
  while (chars.includes(string[string.length - 1])) {
    string = string.slice(0, -1);
  }
  return string;
};

if (require.main === module) {
  console.log(_trimEnd('  abc  '));
  console.log(_trimEnd('-_-abc-_-', '_-'));
}

module.exports = _trimEnd;
