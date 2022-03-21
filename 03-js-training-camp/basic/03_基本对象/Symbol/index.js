/**
 * Symbol([description])
 * 不支持语法："new Symbol()"
 * 每个从Symbol()返回的symbol值都是唯一的。
 * 一个symbol值能作为对象属性的标识符；
 * 这是该数据类型仅有的目的
 */

const symbol1 = Symbol();
const symbol2 = Symbol(42);
const symbol3 = Symbol('foo');
const symbol4 = Symbol('foo');

console.log(symbol1);
console.log(symbol2);
console.log(symbol3 === symbol4); // false

// 属性
// Symbol.length 长度为0
console.log(Symbol.length); // 0
