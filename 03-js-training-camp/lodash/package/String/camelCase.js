const { camelCase } = require('lodash');

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
  // TODO
};

if (require.main === module) {
  console.log(camelCase('Foo Bar'));
  console.log(camelCase('--foo-bar--'));
  console.log(camelCase('__FOO_BAR__'));
}

module.exports = _camelCase;
