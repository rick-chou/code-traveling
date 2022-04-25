/**
 * @example str.replace(regexp|substr, newSubStr|function)
 * 方法返回一个由替换值（replacement）替换部分或所有的模式（pattern）匹配项后的新字符串。
 * 模式可以是一个字符串或者一个正则表达式，替换值可以是一个字符串或者一个每次匹配都要调用的回调函数。
 * 如果pattern是字符串，则仅替换第一个匹配项
 *
 * @returns 一个部分或全部匹配由替代模式所取代的新的字符串
 */

const str = 'chou chou chou';

const afterStr = str.replace(/[a-z]/g, 'js');
console.log(afterStr); // jsjsjsjs jsjsjsjs jsjsjsjs
