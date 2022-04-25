const { toLower } = require('lodash');

/**
 * @example toLower
 * @description 转换整个string字符串的字符为大写，类似String#toUpperCase
 * @param {string} string
 */
const _toLower = (string) => {
  return string.toLocaleLowerCase();
};

if (require.main === module) {
}

module.exports = _toLower;
