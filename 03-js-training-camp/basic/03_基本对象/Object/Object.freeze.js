/**
 * @example Object.freeze(obj)
 * @description 冻结一个对象。一个被冻结的对象再也不能被修改
 * @returns {Object} obj
 */

const obj = { name: 'chou' };

obj.name = 'nanshu';
console.log(obj); // { name: 'nanshu' }

Object.freeze(obj);
obj.name = 'chou';
console.log(obj); // // { name: 'nanshu' }
