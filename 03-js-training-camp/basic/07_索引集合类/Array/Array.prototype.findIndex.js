/**
 * @example arr.findIndex(callback[, thisArg])
 * @description 方法返回数组中满足提供的测试函数的第一个元素的索引
 */

const arr = [1, 2, 3, 4, 5];

console.log(arr.findIndex((item) => item === 5)); // 4
console.log(arr.findIndex((item) => item === 6)); // -1
