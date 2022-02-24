const { capitalize } = require('lodash');
const head = require('../Array/head');
const tail = require('../Array/tail');

capitalize('FRED');
// => 'Fred'

/**
 * @example capitalize([string=''])
 * @description 转换字符串string首字母为大写，剩下为小写
 * @param {string} string
 */

const _capitalize = (string) => {
  return (
    head([...string])[0].toUpperCase() +
    tail([...string]).map((i) => i.toLowerCase())
  );
};

if (require.main === module) {
  console.log(capitalize('FRED'));
}

module.exports = _capitalize;
