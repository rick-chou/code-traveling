const { capitalize } = require('lodash');

capitalize('FRED');
// => 'Fred'

/**
 * @example capitalize([string=''])
 * @description 转换字符串string首字母为大写，剩下为小写
 * @param {string} string
 */

const _capitalize = (string) => {
  return string.toLowerCase().replace(/.{1}/, (w) => w.toUpperCase());
};

if (require.main === module) {
  console.log(_capitalize('FRED'));
}

module.exports = _capitalize;
