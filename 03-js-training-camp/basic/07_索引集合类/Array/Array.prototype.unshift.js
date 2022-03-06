/**
 * @example arr.unshift(element1, ..., elementN)
 * @description 方法将一个或多个元素添加到数组的开头，并返回该数组的新长度(该方法修改原有数组)。
 * @returns {number} 修改后数组的长度
 */

const arr = [1, 2, 3];

console.log(arr.unshift(0)); // 4
console.log(arr); // [ 0, 1, 2, 3 ]
