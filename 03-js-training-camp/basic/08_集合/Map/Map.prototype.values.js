/**
 * @example myMap.keys()
 * @description 返回一个引用的 Iterator 对象。它包含按照顺序插入 Map 对象中每个元素的key值
 */

const myMap = new Map();
myMap.set('name', 'chou');
myMap.set('age', 18);

const it = myMap.values();

for (const val of it) {
  console.log(val);
}

// chou;
// 18;
