const { kebabCase } = require('lodash');

kebabCase('Foo Bar');
// => 'foo-bar'

kebabCase('fooBar');
// => 'foo-bar'

kebabCase('__FOO_BAR__');
// => 'foo-bar'

/**
 * @example kebabCase([string=''])
 * @description 转换字符串string为kebab case
 * @param {string} string
 */
const _kebabCase = (string) => {
  // FIXME
  const reg = /(?=[A-Z]?)([A-Z]?[a-z]+)|(?=\w?)([A-Z]?([a-z]|[A-Z])+)/;
};

if (require.main === module) {
  console.log(_kebabCase('Foo Bar'));
  console.log(_kebabCase('fooBar'));
  console.log(_kebabCase('__FOO_BAR__'));
}

module.exports = _kebabCase;
