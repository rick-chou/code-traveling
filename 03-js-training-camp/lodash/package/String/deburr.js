const { deburr } = require('lodash');

deburr('déjà vu');
// => 'deja vu'

/**
 * @example deburr
 * @description 转换字符串string中拉丁语-1补充字母 和拉丁语扩展字母-A 为基本的拉丁字母，并且去除组合变音标记
 * @param {string} string
 */
const _deburr = (string) => {
  return deburr(string);
};

if (require.main === module) {
}

module.exports = _deburr;
