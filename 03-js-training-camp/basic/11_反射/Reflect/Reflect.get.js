/**
 * @example Reflect.get(target, propertyKey[, receiver])
 * @description Reflect.get()方法与从 对象 (target[propertyKey]) 中读取属性类似，但它是通过一个函数执行来操作的
 * @param target 需要取值的目标对象
 * @param propertyKey 需要获取的值的键值
 * @param receiver 如果target对象中指定了getter，receiver则为getter调用时的this值
 * @returns 属性的值
 */

// Object
var obj = { x: 1, y: 2 };
Reflect.get(obj, 'x'); // 1

// Array
Reflect.get(['zero', 'one'], 1); // "one"

// Proxy with a get handler
var x = { p: 1 };
var obj = new Proxy(x, {
  get(t, k, r) {
    return k + 'bar';
  },
});
Reflect.get(obj, 'foo'); // "foobar"
