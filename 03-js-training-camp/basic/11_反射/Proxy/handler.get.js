/**
 * @example get: function(target, property, receiver) {}
 * @description 用于拦截对象的读取属性操作
 * @param target 目标对象。
 * @param property 被获取的属性名。
 * @param receiver Proxy或者继承Proxy的对象
 */

var p = new Proxy(
  {},
  {
    get: function (target, prop, receiver) {
      console.log('called: ' + prop);
      return 10;
    },
  }
);

console.log(p.a); // "called: a"
// 10
