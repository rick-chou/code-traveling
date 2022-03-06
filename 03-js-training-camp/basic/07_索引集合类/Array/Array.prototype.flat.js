/**
 * @example arr.flat([depth])
 * @description 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回
 * @returns {Array} new array
 */

const arr = [1, [2, 3], [4, 5]];
const flatArr = arr.flat();

console.log(flatArr); // [ 1, 2, 3, 4, 5 ]

console.log([[[1]]].flat()); // [ [ 1 ] ]
console.log([[[1]]].flat(2)); // [ 1 ]
