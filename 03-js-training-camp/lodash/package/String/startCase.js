const { startCase } = require('lodash');

startCase('--foo-bar--');
// => 'Foo Bar'

startCase('fooBar');
// => 'Foo Bar'

startCase('__FOO_BAR__');
// => 'FOO BAR'

/**
 * @example tartCase([string=''])
 * @description 转换 string 字符串为start case
 * @param {string} string
 */
const _startCase = (string) => {
  return string
    .match(/(?=[A-Z]?)([A-Z]?[a-z]+)|(?=\w?)([A-Z]?([a-z]|[A-Z])+)/g)
    .join(' ')
    .toUpperCase();
};

if (require.main === module) {
  console.log(_startCase('--foo-bar--'));
  console.log(_startCase('fooBar'));
  console.log(_startCase('__FOO_BAR__'));
}

module.exports = _startCase;
