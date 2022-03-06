/**
 * @example mySet.entries()
 * @description 返回一个新的迭代器对象 ，这个对象的元素是类似 [value, value] 形式的数组
 */

const mySet = new Set();
mySet.add(1);

const it = mySet.entries();

for (const [key, val] of it) {
  console.log(key, val);
}

// 1 1
