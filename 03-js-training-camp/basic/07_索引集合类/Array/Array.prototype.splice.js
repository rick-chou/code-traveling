/**
 * @example array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
 * 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组
 */

const arr = [1, 2, 3, 4, 5];

// 删除元素
arr.splice(0, 1);
console.log(arr); // [ 2, 3, 4, 5 ]

// 添加元素
arr.splice(0, 0, 1);
console.log(arr); // [ 1, 2, 3, 4, 5 ]
