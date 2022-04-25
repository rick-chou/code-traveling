const { toUpper } = require('lodash');

/**
 * @example toUpper
 * @description 转换整个string字符串的字符为小写，类似String#toLowerCase
 * @param {string} string
 */
const _toUpper = (string) => {
  return string.toUpperCase();
};

if (require.main === module) {
}

module.exports = _toUpper;
