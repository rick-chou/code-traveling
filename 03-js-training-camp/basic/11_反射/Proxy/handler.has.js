/**
 * @example has: function(target, prop) {}
 * @description 是针对 in 操作符的代理方法
 * @param target 目标对象
 * @param prop 需要检查是否存在的属性
 */

var p = new Proxy(
  {},
  {
    has: function (target, prop) {
      console.log('called: ' + prop);
      return true;
    },
  }
);

console.log('a' in p);
// called: a;
// true;
