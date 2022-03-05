/**
 * @example Object.getOwnPropertyDescriptors(obj)
 * @description 用来获取一个对象的所有自身属性的描述符
 */

const obj = { name: 'chou', age: 18 };

console.log(Object.getOwnPropertyDescriptors(obj));
/**
{
  name: {
    value: 'chou',
    writable: true,
    enumerable: true,
    configurable: true
  },
  age: { 
    value: 18, 
    writable: true, 
    enumerable: true, 
    configurable: true 
  }
}
 */
