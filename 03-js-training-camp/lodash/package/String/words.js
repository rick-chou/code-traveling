const { words } = require('lodash');

words('fred, barney, & pebbles');
// => ['fred', 'barney', 'pebbles']

words('fred, barney, & pebbles', /[^, ]+/g);
// => ['fred', 'barney', '&', 'pebbles']

/**
 * @example words([string=''], [pattern])
 * @description 拆分字符串string中的词为数组
 * @param {string} string
 * @param {RegExp|string} pattern
 */
const _words = (string, pattern) => {
  reg = pattern ? new RegExp(pattern) : /[a-z]+/gi;
  return string.match(reg);
};

if (require.main === module) {
  console.log(_words('fred, barney, & pebbles'));
  console.log(_words('fred, barney, & pebbles', /[^, ]+/g));
}

module.exports = _words;
