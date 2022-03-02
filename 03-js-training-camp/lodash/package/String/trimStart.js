const { trimStart } = require('lodash');

trimStart('  abc  ');
// => 'abc  '

trimStart('-_-abc-_-', '_-');
// => 'abc-_-'

/**
 * @example trimStart([string=''], [chars=whitespace])
 * @description 从string字符串中移除前面的 空格 或 指定的字符
 * @param {string} string
 * @param {string} chars
 */
const _trimStart = (string, chars = ' ') => {
  while (chars.includes(string[0])) {
    string = string.slice(1);
  }
  return string;
};

if (require.main === module) {
  console.log(_trimStart('  abc  '));
  console.log(_trimStart('-_-abc-_-', '_-'));
}

module.exports = _trimStart;
