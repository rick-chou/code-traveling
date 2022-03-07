/**
 * @example Reflect.has(target, propertyKey)
 * @description Reflect.has() 作用与 in 操作符 相同
 * @returns {boolean} 一个 Boolean 类型的对象指示是否存在此属性
 */

Reflect.has({ x: 0 }, 'x'); // true
Reflect.has({ x: 0 }, 'y'); // false

// 如果该属性存在于原型链中，返回true
Reflect.has({ x: 0 }, 'toString');

// Proxy 对象的 .has() 句柄方法
obj = new Proxy(
  {},
  {
    has(t, k) {
      return k.startsWith('door');
    },
  }
);
Reflect.has(obj, 'doorbell'); // true
Reflect.has(obj, 'dormitory'); // false
