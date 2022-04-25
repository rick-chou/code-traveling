const { replace } = require('lodash');

replace('Hi Fred', 'Fred', 'Barney');
// => 'Hi Barney'

/**
 * @example replace([string=''], pattern, replacement)
 * @description 替换string字符串中匹配的pattern为给定的replacement
 */
const _replace = (string, pattern, replacement) => {
  return string.replace(pattern, replacement);
};

if (require.main === module) {
  console.log(_replace('Hi Fred', 'Fred', 'Barney'));
}

module.exports = _replace;
