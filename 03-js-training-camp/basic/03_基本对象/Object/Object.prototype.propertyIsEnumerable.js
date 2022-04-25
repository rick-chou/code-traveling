/**
 * @example obj.propertyIsEnumerable(prop)
 * @description 返回一个布尔值，表示指定的属性是否可枚举
 * @returns {boolean}
 */

const obj1 = Object.defineProperty({}, 'name', {
  value: 'nanshu',
  enumerable: false,
});

const obj2 = Object.defineProperty({}, 'name', {
  value: 'chou',
  enumerable: true,
});

console.log(obj1.propertyIsEnumerable('name')); // false
console.log(obj2.propertyIsEnumerable('name')); // true
