const { trim, map } = require('lodash');

trim('  abc  ');
// => 'abc'

trim('-_-abc-_-', '_-');
// => 'abc'

map(['  foo  ', '  bar  '], trim);
// => ['foo', 'bar']

/**
 * @example trim([string=''], [chars=whitespace])
 * @description 从string字符串中移除前面和后面的 空格 或 指定的字符
 * @param {string} string
 * @param {string} chars 要移除的字符
 */
const _trim = (string, chars = ' ', guard) => {
  return string.replace(new RegExp(chars.split('').join('|'), 'g'), '');
};

if (require.main === module) {
  console.log(_trim('  abc  '));
  console.log(_trim('-_-abc-_-', '_-'));
  // FIXME
  // console.log(map(['  foo  ', '  bar  '], _trim));
}

module.exports = _trim;
