/**
 * @example Promise.resolve(value);
 * @returns 返回一个以给定值解析后的Promise 对象
 */

var p = Promise.resolve('chou');
p.then(console.log); // chou
