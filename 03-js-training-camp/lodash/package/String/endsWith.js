const { endsWith } = require('lodash');

endsWith('abc', 'c');
// => true

endsWith('abc', 'b');
// => false

endsWith('abc', 'b', 2);
// => true

/**
 * @example endsWith([string=''], [target], [position=string.length])
 * @description 检查字符串string是否以给定的target字符串结尾
 * @param {string} string
 * @param {string} target  要检索字符
 * @param {number} position 检索的位置
 */
const _endsWith = (string, target, position = string.length) => {
  return string[position - 1] === target;
};

if (require.main === module) {
  console.log(_endsWith('abc', 'c'));
  console.log(_endsWith('abc', 'b'));
  console.log(_endsWith('abc', 'b', 2));
}

module.exports = _endsWith;
