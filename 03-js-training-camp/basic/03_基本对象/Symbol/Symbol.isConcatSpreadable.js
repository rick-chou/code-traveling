/**
 * @description 内置的Symbol.isConcatSpreadable符号用于配置某对象作为Array.prototype.concat()方法的参数时是否展开其数组元素
 */

var alpha = ['a', 'b', 'c'],
  numeric = [1, 2, 3];

var alphaNumeric = alpha.concat(numeric);

console.log(alphaNumeric); // 结果: ['a', 'b', 'c', 1, 2, 3]

var alpha = ['a', 'b', 'c'],
  numeric = [1, 2, 3];

numeric[Symbol.isConcatSpreadable] = false;
var alphaNumeric = alpha.concat(numeric);

console.log(alphaNumeric); // 结果: ['a', 'b', 'c', [1, 2, 3] ]

var x = [1, 2, 3];

var fakeArray = {
  [Symbol.isConcatSpreadable]: true,
  length: 2,
  0: 'hello',
  1: 'world',
};

console.log(x.concat(fakeArray)); // [1, 2, 3, "hello", "world"]
