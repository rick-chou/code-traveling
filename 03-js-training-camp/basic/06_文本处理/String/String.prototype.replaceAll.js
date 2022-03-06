/**
 * const newStr = str.replaceAll(regexp|substr, newSubstr|function)
 * 方法返回一个新字符串，新字符串所有满足 pattern 的部分都已被replacement 替换。
 * pattern可以是一个字符串或一个 RegExp， replacement可以是一个字符串或一个在每次匹配被调用的函数
 */

const str = 'chou chou chou';

const afterStr = str.replaceAll('c', 'z');
console.log(afterStr); // zhou zhou zhou
