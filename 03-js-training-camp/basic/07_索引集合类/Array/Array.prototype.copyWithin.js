/**
 * @example arr.copyWithin(target[, start[, end]])
 * @description 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度
 * @returns {Array} target
 */

const arr = [1, 2, 3, 4, 5];
arr.copyWithin(0, 1, 2); // [ 2, 2, 3, 4, 5 ]

console.log(arr);
