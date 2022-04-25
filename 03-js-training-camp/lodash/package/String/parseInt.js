const { parseInt, map } = require('lodash');

parseInt('08');
// => 8

map(['6', '08', '10'], parseInt);
// => [6, 8, 10]

/**
 * @example parseInt(string, [radix=10])
 * @description 转换string字符串为指定基数的整数。 如果基数是 undefined 或者 0，则radix基数默认是10，如果string字符串是16进制，则radix基数为 16
 * @param {string} string
 * @param {number} radix
 */
const _parseInt = (string, radix = 10) => {
  return parseInt(string, radix);
};

if (require.main === module) {
  console.log(_parseInt('08'));
}

module.exports = _parseInt;
