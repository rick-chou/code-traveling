/**
 * @example arr.every(callback(element[, index[, array]])[, thisArg])
 * @description 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试
 */

const flag = [1, 2, 3, 4, 5].every((item) => item > 0);

console.log(flag); // true
