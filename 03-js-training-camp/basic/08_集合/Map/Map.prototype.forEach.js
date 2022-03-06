/**
 * @example myMap.forEach(callback([value][,key][,map])[, thisArg])
 * @description 方法按照插入顺序依次对 Map 中每个键/值对执行一次给定的函数
 */

const myMap = new Map();
myMap.set('name', 'chou');
myMap.set('age', 18);

myMap.forEach(console.log);

// chou name Map(2) { 'name' => 'chou', 'age' => 18 }
// 18 age Map(2) { 'name' => 'chou', 'age' => 18 }
