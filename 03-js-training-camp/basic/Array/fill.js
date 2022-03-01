/**
 * fill 填充的每一项都相同
 * 不要用这种方法去生成对象数组
 */

const arr1 = new Array(2).fill({}); // [ {}, {} ]
arr1[0].name = 'chou'; // [{ name: 'chou' }, { name: 'chou' }];

const arr2 = Array.from({ length: 2 }).map((_) => ({})); // [ {}, {} ]
arr2[0].name = 'chou'; // [{ name: 'chou' }, {}];

console.log(arr1);
console.log(arr2);

