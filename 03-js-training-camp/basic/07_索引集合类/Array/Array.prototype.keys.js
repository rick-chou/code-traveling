/**
 * @example arr.keys()
 * @description 方法返回一个包含数组中每个索引键的Array Iterator对象
 */

const array1 = ['a', 'b', 'c'];
const iterator = array1.keys();

for (const key of iterator) {
  console.log(key);
}

// 0;
// 1;
// 2;
