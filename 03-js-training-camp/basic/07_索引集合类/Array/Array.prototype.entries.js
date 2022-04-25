/**
 * @example arr.entries()
 * @description 方法返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对
 */

const arr = [1, 2, 3, 4, 5];

const it = arr.entries();

for (const iterator of it) {
  console.log(iterator);
}
// [ 0, 1 ]
// [ 1, 2 ]
// [ 2, 3 ]
// [ 3, 4 ]
// [ 4, 5 ]
