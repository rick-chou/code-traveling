const { upperCase } = require('lodash');

upperCase('--foo-bar');
// => 'FOO BAR'

upperCase('fooBar');
// => 'FOO BAR'

upperCase('__foo_bar__');
// => 'FOO BAR'

/**
 * @example upperCase([string=''])
 * @description 转换字符串string为 空格 分隔的大写单词
 * @param {string} string
 */
const _upperCase = (string) => {
  return string
    .replace(/[^A-Za-z]/g, ' ')
    .trim()
    .replace(/([A-Z])/g, ' $1')
    .toUpperCase();
};

if (require.main === module) {
  console.log(_upperCase('--foo-bar'));
  console.log(_upperCase('fooBar'));
  console.log(_upperCase('__foo_bar__'));
}

module.exports = _upperCase;
