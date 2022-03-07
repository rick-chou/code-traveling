/**
 * @example getOwnPropertyDescriptor: function(target, prop) {}
 * @description 是 Object.getOwnPropertyDescriptor()  的钩子
 * @param target 目标对象
 * @param prop 返回属性名称的描述
 */

var p = new Proxy(
  { a: 20 },
  {
    getOwnPropertyDescriptor: function (target, prop) {
      console.log('called: ' + prop);
      return { configurable: true, enumerable: true, value: 10 };
    },
  }
);

console.log(Object.getOwnPropertyDescriptor(p, 'a').value); // "called: a"
// 10
