const { truncate } = require('lodash');

truncate('hi-diddly-ho there, neighborino');
// => 'hi-diddly-ho there, neighbo...'

truncate('hi-diddly-ho there, neighborino', {
  length: 24,
  separator: ' ',
});
// => 'hi-diddly-ho there,...'

/**
 * @example truncate([string=''], [options=])
 * @description 截断string字符串，如果字符串超出了限定的最大值。 被截断的字符串后面会以 omission 代替，omission 默认是 "..."
 * @param {string} string
 * @param {Object} option
 */
const _truncate = (string = '', option = { length: 30, omission: '...' }) => {
  return string.length > option.length
    ? string.slice(0, option.length + 1) + option.omission
    : string;
};

if (require.main === module) {
  console.log(_truncate('hi-diddly-ho there, neighborino'));
}

module.exports = _truncate;
