/**
 * @example Object.getOwnPropertyDescriptor(obj, prop)
 * @description 方法返回指定对象上一个自有属性对应的属性描述符
 * @returns {Object} 属性描述符
 *
 * 属性描述符
 *
 * value
 * 该属性的值(仅针对数据属性描述符有效)
 *
 * writable
 * 当且仅当属性的值可以被改变时为true。(仅针对数据属性描述有效)
 *
 * get
 * 获取该属性的访问器函数（getter）。如果没有访问器， 该值为undefined。(仅针对包含访问器或设置器的属性描述有效)
 *
 * set
 * 获取该属性的设置器函数（setter）。 如果没有设置器， 该值为undefined。(仅针对包含访问器或设置器的属性描述有效)
 *
 * configurable
 * 当且仅当指定对象的属性描述可以被改变或者属性可被删除时，为true。
 *
 * enumerable
 * 当且仅当指定对象的属性可以被枚举出时，为 true。
 */

const obj = { name: 'chou' };

console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
// { value: 'chou', writable: true, enumerable: true, configurable: true }
