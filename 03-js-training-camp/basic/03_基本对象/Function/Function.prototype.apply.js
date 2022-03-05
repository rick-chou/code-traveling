/**
 * @example Function.prototype.apply(thisArg [, argsArray])
 * @description 调用一个函数并将其 this 的值设置为提供的 thisArg。参数可用以通过数组对象传递
 */

// TODO

const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// expected output: 7
