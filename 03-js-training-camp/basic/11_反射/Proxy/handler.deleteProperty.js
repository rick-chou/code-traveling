/**
 * @example deleteProperty: function(target, property) {}
 * @description 用于拦截对对象属性的 delete 操作
 * @param target 目标对象。
 * @param property 待删除的属性名。
 */

var p = new Proxy(
  {},
  {
    deleteProperty: function (target, prop) {
      console.log('called: ' + prop);
      return true;
    },
  }
);

delete p.a; // "called: a"
