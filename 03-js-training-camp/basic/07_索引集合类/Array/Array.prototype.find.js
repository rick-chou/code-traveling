/**
 * @example arr.find(callback[, thisArg])
 * @description 方法返回数组中满足提供的测试函数的第一个元素的值
 */

const arr = [1, 2, 3, 4, 5];

console.log(arr.find((item) => item === 5)); // 5
console.log(arr.find((item) => item === 6)); // undefined
