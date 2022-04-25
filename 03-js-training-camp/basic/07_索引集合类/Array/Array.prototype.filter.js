/**
 * @example arr.filter(callback(element[, index[, array]])[, thisArg])
 * @description 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素
 */

const afterArr = [1, 2, 3, 4, 5].filter((item) => item % 2 === 1);

console.log(afterArr); // [ 1, 3, 5 ]
