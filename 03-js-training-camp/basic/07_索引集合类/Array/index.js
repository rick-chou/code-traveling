/**
 * 数组的下标和长度的关系
 * 数组的长度 = 数组的最大下标 + 1
 */

const arr1 = [1, 2, 3, 4, 5];
console.log(arr1.length); // 5

arr1[100] = 100;
console.log(arr1.length); // 101

// 可以设置 length 来达到删除元素的作用
arr1.length = 0; // 清空元素
console.log(arr1); // []
