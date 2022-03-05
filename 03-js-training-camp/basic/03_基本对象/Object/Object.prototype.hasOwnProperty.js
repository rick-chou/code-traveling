/**
 * @example obj.hasOwnProperty(prop)
 * @description 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键）
 */

const symbolKey = Symbol();

const obj = {
  name: 'chou',
  [symbolKey]: 'private',
};

console.log(obj.hasOwnProperty('name')); // true
console.log(obj.hasOwnProperty(symbolKey)); // true
