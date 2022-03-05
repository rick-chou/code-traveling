/**
 * @example Object.preventExtensions(obj)
 * @description 让一个对象变的不可扩展，也就是永远不能再添加新的属性
 * @returns {Object} obj
 */

const obj = { name: 'chou' };
Object.preventExtensions(obj);

obj.age = 18;
console.log(obj); // { name: 'chou' }
