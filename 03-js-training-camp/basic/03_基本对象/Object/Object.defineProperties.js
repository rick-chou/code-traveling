/**
 * @example Object.defineProperties(obj, props)
 * @description 直接在一个对象上定义新的属性或修改现有属性，并返回该对象
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
    },
  }
);

console.log(obj); // { name: 'nanshu' }
