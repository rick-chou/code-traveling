const { camelCase } = require('lodash');
const _capitalize = require('./capitalize');

camelCase('Foo Bar');
// => 'fooBar'

camelCase('--foo-bar--');
// => 'fooBar'

camelCase('__FOO_BAR__');
// => 'fooBar'

/**
 * @example camelCase([string=''])
 * @description 转换字符串string为驼峰写法
 * @param {string} string
 */
const _camelCase = (string) => {
  return string.match(/[a-z]+/gi).reduce((pre, cur, idx) => {
    if (idx) {
      return pre + _capitalize(cur);
    }
    return pre + cur.toLowerCase();
  }, '');
};

if (require.main === module) {
  console.log(_camelCase('Foo Bar'));
  console.log(_camelCase('--foo-bar--'));
  console.log(_camelCase('__FOO_BAR__'));
}

module.exports = _camelCase;
