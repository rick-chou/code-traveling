/**
 * @example arr.push(element1, ..., elementN)
 * @description 将一个或多个元素添加到数组的末尾，并返回该数组的新长度
 * @returns {number} 新数组的长度
 */

const arr = [1, 2, 3, 4, 5];
const length = arr.push(6);
console.log(length); // 6
console.log(arr); // [ 1, 2, 3, 4, 5, 6 ]
