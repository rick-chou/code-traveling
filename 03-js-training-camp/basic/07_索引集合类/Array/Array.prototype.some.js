/**
 * @example arr.some(callback(element[, index[, array]])[, thisArg])
 * @description 测试数组中是不是至少有1个元素通过了被提供的函数测试。它返回的是一个Boolean类型的值
 */

console.log([1, 2, 3].some((item) => item === 2)); // true
