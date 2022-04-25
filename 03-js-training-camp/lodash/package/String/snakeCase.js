const { snakeCase } = require('lodash');

snakeCase('Foo Bar');
// => 'foo_bar'

snakeCase('fooBar');
// => 'foo_bar'

snakeCase('--FOO-BAR--');
// => 'foo_bar'

/**
 * @example snakeCase([string=''])
 * @description 转换字符串string为snake case
 * @param {string} string
 */
const _snakeCase = (string) => {
  return string
    .match(/(?=[A-Z]?)([A-Z]?[a-z]+)|(?=\w?)([A-Z]?([a-z]|[A-Z])+)/g)
    .join('-')
    .toLowerCase();
};

if (require.main === module) {
  console.log(_snakeCase('Foo Bar'));
  console.log(_snakeCase('fooBar'));
  console.log(_snakeCase('--FOO-BAR--'));
}

module.exports = _snakeCase;
