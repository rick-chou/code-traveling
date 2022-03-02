const { lowerCase } = require('lodash');

lowerCase('--Foo-Bar--');
// => 'foo bar'

lowerCase('fooBar');
// => 'foo bar'

lowerCase('__FOO_BAR__');
// => 'foo bar'

/**
 * @example lowerCase([string=''])
 * @description 转换字符串string以空格分开单词，并转换为小写
 * @param {string} string
 */
const _lowerCase = (string) => {
  // return string
  //   .replace(/[^a-z]/gi, ' ')
  //   .trim()
  //   .replace(/(\b[A-Z][A-Za-z]*\b)*/g, (w) => w.toLowerCase())
  //   .replace(/[A-Z]/g, (w) => ` ${w.toLowerCase()}`);
  return string
    .match(/(?=[A-Z]?)([A-Z]?[a-z]+)|(?=\w?)([A-Z]?([a-z]|[A-Z])+)/g)
    .join(' ')
    .toLowerCase();
};

if (require.main === module) {
  console.log(_lowerCase('--Foo-Bar--'));
  console.log(_lowerCase('fooBar'));
  console.log(_lowerCase('__FOO_BAR__'));
}

module.exports = _lowerCase;
