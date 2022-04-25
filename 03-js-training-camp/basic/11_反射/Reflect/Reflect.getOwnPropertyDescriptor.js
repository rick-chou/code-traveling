/**
 * @example Reflect.getOwnPropertyDescriptor(target, propertyKey)
 * @description 静态方法 Reflect.getOwnPropertyDescriptor() 与 Object.getOwnPropertyDescriptor() 方法相似。如果在对象中存在，则返回给定的属性的属性描述符。否则返回 undefined
 */

Reflect.getOwnPropertyDescriptor({ x: 'hello' }, 'x');
// {value: "hello", writable: true, enumerable: true, configurable: true}

Reflect.getOwnPropertyDescriptor({ x: 'hello' }, 'y');
// undefined

Reflect.getOwnPropertyDescriptor([], 'length');
// {value: 0, writable: true, enumerable: false, configurable: false}
