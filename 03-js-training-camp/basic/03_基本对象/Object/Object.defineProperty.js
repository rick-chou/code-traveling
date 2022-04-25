/**
 * @example Object.defineProperty(obj, prop, descriptor)
 * @description 会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象
 * @returns {Object} obj
 *
 * 如果一个描述符同时拥有 value 或 writable 和 get 或 set 键，则会产生一个异常
 *
 * configurable
 * 当且仅当该属性的 configurable 键值为 true 时，该属性的描述符才能够被改变，同时该属性也能从对应的对象上被删除。默认为 false。
 *
 * enumerable
 * 当且仅当该属性的 enumerable 键值为 true 时，该属性才会出现在对象的枚举属性中。默认为 false。
 *
 * value
 * 该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。默认为 undefined。
 *
 * writable
 * 当且仅当该属性的 writable 键值为 true 时，属性的值，也就是上面的 value，才能被赋值运算符 (en-US)改变。默认为 false。
 *
 * get
 * 属性的 getter 函数，如果没有 getter，则为 undefined。当访问该属性时，会调用此函数。执行时不传入任何参数，但是会传入 this 对象（由于继承关系，这里的this并不一定是定义该属性的对象）。该函数的返回值会被用作属性的值。默认为 undefined。
 *
 * set
 * 属性的 setter 函数，如果没有 setter，则为 undefined。当属性值被修改时，会调用此函数。该方法接受一个参数（也就是被赋予的新值），会传入赋值时的 this 对象。默认为 undefined。
 */

/**
 * Writable 属性
 * 当 writable 属性设置为 false 时，该属性被称为“不可写的”。它不能被重新赋值
 */

const obj1 = Object.defineProperty({}, 'name', {
  writable: true,
  enumerable: true,
  configurable: true,
  value: 'chou',
});

const obj2 = Object.defineProperty({}, 'name', {
  writable: false,
  enumerable: true,
  value: 'chou',
});

console.log('===========writable============');
console.log(obj1); // { name: 'chou' }
console.log(obj2); // { name: 'chou' }
obj1.name = 'nanshu';
obj2.name = 'nanshu';
console.log(obj1); // { name: 'nanshu' }
console.log(obj2); // { name: 'chou' } 因为 writable 是 false 不允许修改

delete obj2.name;
console.log(obj2); // { name: 'chou' } 不允许删除

/**
 * Enumerable 属性
 * enumerable 定义了对象的属性是否可以在 for...in 循环和 Object.keys() 中被枚举
 */

console.log('===========enumerable============');
const obj3 = Object.defineProperty({}, 'name', {
  writable: false,
  enumerable: false,
  value: 'chou',
});

console.log(Object.keys(obj1)); // [ 'name' ]
console.log(Object.keys(obj3)); // []

/**
 * Configurable 属性
 * 表示对象的属性是否可以被删除，以及除 value 和 writable 特性外的其他特性是否可以被修改
 */

console.log('===========configurable============');
const obj4 = Object.defineProperty({}, 'name', {
  configurable: false,
  enumerable: true,
  value: 'chou',
});

delete obj4.name;
console.log(obj4); // { name: 'chou' } 不会被删除

// TypeError: Cannot redefine property: name
// Object.defineProperty(obj4, 'name', {
//   enumerable: false,
// });

/**
 * 自定义 Setters 和 Getters
 */

console.log('===========Setters && Getters============');
// 不能配置 writable 或 value 属性
// TypeError: Invalid property descriptor. Cannot both specify accessors and a value or writable attribute
const obj5 = Object.defineProperty({}, 'name', {
  configurable: true,
  enumerable: true,
  set: (val) => {
    console.log('name 被赋值了');
    return val;
  },
  get: () => {
    console.log('name 被取值了');
  },
});

obj5.name = 'chou'; // name 被赋值了
obj5.name; // name 被取值了

/**
 * 默认值
 */

var o = {};

o.a = 1;
// 等同于：
Object.defineProperty(o, 'a', {
  value: 1,
  writable: true,
  configurable: true,
  enumerable: true,
});

// 另一方面，
Object.defineProperty(o, 'a', { value: 1 });
// 等同于：
Object.defineProperty(o, 'a', {
  value: 1,
  writable: false,
  configurable: false,
  enumerable: false,
});
