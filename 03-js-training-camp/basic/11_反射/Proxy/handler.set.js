/**
 * @example set: function(target, property, value, receiver) {}
 * @description 是设置属性值操作的捕获器
 * @param target 目标对象。
 * @param property 将被设置的属性名或 Symbol。
 * @param value 新属性值。
 * @param receiver 最初被调用的对象。通常是 proxy 本身，但 handler 的 set 方法也有可能在原型链上，或以其他方式被间接地调用（因此不一定是 proxy 本身）
 */

var p = new Proxy(
  {},
  {
    set: function (target, prop, value, receiver) {
      target[prop] = value;
      console.log('property set: ' + prop + ' = ' + value);
      return true;
    },
  }
);

console.log('a' in p); // false

p.a = 10; // "property set: a = 10"
console.log('a' in p); // true
console.log(p.a); // 10
