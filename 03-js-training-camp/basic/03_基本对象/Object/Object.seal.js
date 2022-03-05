/**
 * @example Object.seal(obj)
 * @description 方法封闭一个对象，阻止添加新属性并将所有现有属性标记为不可配置。当前属性的值只要原来是可写的就可以改变
 * @returns {Object} obj
 */

const obj = Object.defineProperties(
  {},
  {
    name: {
      value: 'nanshu',
      configurable: true,
      enumerable: true,
      writable: true,
    },
    age: {
      value: 18,
      enumerable: true,
      writable: false,
      configurable: false,
    },
  }
);

Object.seal(obj);

console.log(obj); // { name: 'nanshu', age: 18 }

obj.name = 'chou';
obj.age = 3;

console.log(obj); // { name: 'chou', age: 18 }
