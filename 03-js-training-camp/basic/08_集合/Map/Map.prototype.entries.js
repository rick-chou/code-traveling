/**
 * @example myMap.entries()
 * @description 方法返回一个新的包含 [key, value] 对的 Iterator 对象
 */

const myMap = new Map();
myMap.set('name', 'chou');
myMap.set('age', 18);

const it = myMap.entries();

for (const [key, val] of it) {
  console.log(key, val);
}

// name chou
// age 18
