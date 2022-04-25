const { lowerFirst } = require('lodash');

lowerFirst('Fred');
// => 'fred'

lowerFirst('FRED');
// => 'fRED'

/**
 * @example lowerFirst([string=''])
 * @description 转换字符串string的首字母为小写
 * @param {string} string
 */
const _lowerFirst = (string) => {
  return string.replace(/^.{1}/, (w) => w.toLowerCase());
};

if (require.main === module) {
  console.log(_lowerFirst('Fred'));
  console.log(_lowerFirst('FRED'));
}

module.exports = _lowerFirst;
