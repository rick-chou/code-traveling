/**
 * [@@iterator]() 方法返回一个新的Iterator对象，它遍历字符串的代码点，返回每一个代码点的字符串值
 */

const str = 'hello chou';

const it = str[Symbol.iterator]();

console.log(it.next()); // { value: 'h', done: false }
