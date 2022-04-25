const { startsWith } = require('lodash');

startsWith('abc', 'a');
// => true

startsWith('abc', 'b');
// => false

startsWith('abc', 'b', 1);

/**
 * @example startsWith
 * @description 检查字符串string是否以 target 开头
 * @param {string} string
 * @param {string} target  要检索字符
 * @param {number} position 检索的位置
 */
const _startsWith = (string, target, position = 0) => {
  return string[position] === target;
};

if (require.main === module) {
  console.log(_startsWith('abc', 'a'));
  console.log(_startsWith('abc', 'b'));
  console.log(_startsWith('abc', 'b', 1));
}

module.exports = _startsWith;
