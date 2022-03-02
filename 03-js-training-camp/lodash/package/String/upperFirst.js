const { upperFirst } = require('lodash');

upperFirst('fred');
// => 'Fred'

upperFirst('FRED');
// => 'FRED'

/**
 * @example upperFirst([string=''])
 * @description 转换字符串string的首字母为大写
 * @param {string} string
 */
const _upperFirst = (string) => {
  return string.replace(/.{1}/, (w) => w.toUpperCase());
};

if (require.main === module) {
  console.log(_upperFirst('fred'));
  console.log(_upperFirst('FRED'));
}

module.exports = _upperFirst;
