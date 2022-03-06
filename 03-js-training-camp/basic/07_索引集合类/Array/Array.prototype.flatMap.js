/**
 * @example
 * arr.flatMap(function callback(currentValue[, index[, array]]) {
 * // return element for new_array
 * }[, thisArg])
 * @description 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。它与 map 连着深度值为1的 flat 几乎相同，但 flatMap 通常在合并成一种方法的效率稍微高一些
 * @returns {Array} 一个新的数组，其中每个元素都是回调函数的结果，并且结构深度 depth 值为1
 */

const arr = [1, 2, 3, 4, 5];

const afterArr = arr.flatMap((item) => item * item);
console.log(afterArr); // [ 1, 4, 9, 16, 25 ]
