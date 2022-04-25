/**
 * @example Object.assign(target, ...sources)
 * @description Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象分配到目标对象。它将返回目标对象
 * 如果目标对象中的属性具有相同的键，则属性将被源对象中的属性覆盖。后面的源对象的属性将类似地覆盖前面的源对象的属性
 * 浅拷贝
 * @returns {Object} target
 */

const objA = { name: 'chou' };
const objB = { age: 18, name: 'nanshu' };

Object.assign(objA, objB);

console.log(objA); // { name: 'nanshu', age: 18 }
