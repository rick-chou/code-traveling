/**
 * @example arr.fill(value[, start[, end]])
 * @description 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素
 *
 * fill 填充的每一项都相同
 * 不要用这种方法去生成对象数组
 */

const arr1 = new Array(2).fill({}); // [ {}, {} ]
arr1[0].name = 'chou'; // [{ name: 'chou' }, { name: 'chou' }];

const arr2 = Array.from({ length: 2 }).map((_) => ({})); // [ {}, {} ]
arr2[0].name = 'chou'; // [{ name: 'chou' }, {}];

console.log(arr1);
console.log(arr2);
