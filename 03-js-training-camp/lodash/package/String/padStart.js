const { padStart } = require('lodash');

padStart('abc', 6);
// => '   abc'

padStart('abc', 6, '_-');
// => '_-_abc'

padStart('abc', 3);
// => 'abc'

/**
 * @example padStart
 * @description
 * @param {string} string
 * @param {number} length
 * @param {string} chars
 */
const _padStart = (string = '', length = 0, chars = ' ') => {
  if (string.length >= length) {
    return string;
  }
  var extra = '';
  while (extra.length < length - string.length) {
    extra += chars;
  }
  return extra.slice(0, length - string.length) + string;
};

if (require.main === module) {
  console.log(_padStart('abc', 6));
  console.log(_padStart('abc', 6, '_-'));
  console.log(_padStart('abc', 3));
}

module.exports = _padStart;
