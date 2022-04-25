/**
 * @example defineProperty: function (target, property, descriptor) {}
 * @description 用于拦截对对象的 Object.defineProperty() 操作
 * @param target 目标对象。
 * @param property 待检索其描述的属性名。
 * @param descriptor 待定义或修改的属性的描述符。
 */

var p = new Proxy(
  {},
  {
    defineProperty: function (target, prop, descriptor) {
      console.log('called: ' + prop);
      return true;
    },
  }
);

var desc = { configurable: true, enumerable: true, value: 10 };
Object.defineProperty(p, 'a', desc); // "called: a"
